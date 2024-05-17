class Enemy extends Phaser.GameObjects.Container {
  constructor(x = null, y = null) {
    super(
      scene,
      x ?? resolvePosition(scene.level.data.start.x)+16,
      y ?? resolvePosition(scene.level.data.start.y)+4
    );
    this.speed = 1000;
    this.health = 100;
    this.damage = 1;
    this.resources = 1;
    this.currentMove = 1;
    this.score = 100;
    this.blackBar = scene.add.rectangle(-16, -26, 32, 6, 0x000000);
    this.blackBar.setOrigin(0);
    this.blackBar.setAlpha(0);
    this.healthBar = scene.add.rectangle(-16, -26, 32, 6, 0xcb0000);
    this.healthBar.setAlpha(0);
    this.healthBar.setOrigin(0);
    this.stunned = false;
    this.stunTargeted = false;
    this.movementRemaining = 1;

    this.add(this.blackBar);
    this.add(this.healthBar);

    this.stealth = false;
    this.alive = false;
    scene.add.existing(this);
    // this.setPosition(scene.level.start.x + 30, scene.level.start.y + 15);
    this.alpha = 0;
    this.spawnTween = scene.tweens.add({
      targets: this,
      duration: 1000,
      callbackScope: this,
      alpha: 1,
      onComplete: function () {
        this.move();
      },
    });
    scene.enemies.add(this);
  }

  statusEffect(effect, duration) {
    switch (effect) {
      case "stun":
        if (!this.stunned) {
          console.log("stunned");
          this.stunned = true;
          this.moveTween.pause();
          scene.time.delayedCall(
            duration,
            function () {
              console.log(this);
              this.stunned = false;
              this.stunTargeted = false;
              this.moveTween.resume();
            }.bind(this)
          );
        }
        break;
      default:
        console.log("effect not added yet!");
        break;
    }
  }

  move() {
    let multiplier =
      Phaser.Math.Distance.Between(
        this.x,
        this.y,
        scene.level.path.curves[this.currentMove].p1.x+12,
        scene.level.path.curves[this.currentMove].p1.y+4
      ) /
      (TILE_SIZE + TILE_MARGIN);
    let duration = this.speed * multiplier;
    this.moveTween = scene.tweens.add({
      targets: this,
      duration: duration,
      callbackScope: this,
      x: scene.level.path.curves[this.currentMove].p1.x+16,
      y: scene.level.path.curves[this.currentMove].p1.y+4,
      onComplete: function () {
        if (this.currentMove >= 1) {
          this.alive = true;
        }

        this.currentMove++;
        if (this.currentMove > scene.level.path.curves.length - 1) {
          scene.stats.updateLives(this.damage);
          this.removeFromGame();
        } else {
          this.move();
        }
      },
      onUpdate: function () {
        this.movementRemaining = this.moveTween.progress;
        if (this.spin) {
          this.spin();
        }
        if (this.updateMask) {
          this.updateMask();
        }
      },
    });
    if (this.stealth) {
      this.setVisible(false);
    } else {
      this.setVisible(true);
    }
  }

  takeDamage(damage = 1, resistance = 1) {
    if (this.alive) {
      if (this.health === this.healthMax) {
        scene.tweens.add({
          targets: [this.healthBar, this.blackBar],
          duration: 250,
          alpha: 1,
          easing: "Sine.easeOut",
        });
      }
      // console.log("Enemy took damage: " + damage * resistance);
      this.health -= Math.floor(damage * resistance);
      scene.tweens.add({
        targets: this.healthBar,
        duration: 100,
        scaleX: this.health / this.healthMax,
        easing: "Sine.easeOut",
      });
      // console.log("Health remaining: " + this.health);
      if (this.health <= 0 && this.alive) {
        this.die();
      }
    }
  }

  die() {
    console.log("dying");
    this.alive = false;
    if (this.moveTween) {
      this.moveTween.stop();
      this.moveTween.remove();
    }
    if (this.split) {
      this.split();
    }

    scene.stats.updateScore(this.score);

    if (this.money) {
      scene.stats.updateMoney(this.money);
    }
    if (this.resources) {
      scene.stats.updateResources(this.resources);
    }
    this.removeFromGame();
  }

  removeFromGame() {
    console.log(this);
    let deathParticles = scene.add.particles(this.x, this.y, "1x1", {
      speed: { min: 50, max: 100 },
      // angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      lifespan: 1000,
      //blendMode: "ADD",
      frequency: 10,
      quantity:10,
      maxParticles: 10,
    });
    deathParticles.setParticleTint(this.shape.strokeColor);
    this.destroy();
    if (scene.enemies.children.size === 0 && scene.level.doneSpawning) {
      if (scene.level.autoNext) {
        scene.level.spawnWave();
      } else {
        console.log("new start button");
        scene.customSoundManager.emitter.emit("wavecomplete");
        new StartButton();
      }
    }
  }
}
