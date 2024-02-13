class Enemy extends Phaser.GameObjects.Container {
  constructor(x = null, y = null) {
    super(
      scene,
      x ?? resolvePosition(scene.level.data.start.x),
      y ?? resolvePosition(scene.level.data.start.y)
    );
    this.speed = 1000;
    this.health = 100;
    this.damage = 1;

    this.currentMove = 1;
    this.score = 100;
    this.healthBar = scene.add.rectangle(-28, -26, 32, 6, 0xcb0000);
    this.healthBar.setAlpha(0);
    this.healthBar.setOrigin(0);
    this.stunned = false;

    this.add(this.healthBar);
    this.stealth = false;
    this.alive = false;
    scene.add.existing(this);
    // this.setPosition(scene.level.start.x + 30, scene.level.start.y + 15);
    this.alpha = 0;
    scene.tweens.add({
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

  statusEffect(effect) {
    switch (effect) {
      case "stun":
        if (!this.stunned) {
          this.stunned = true;
          this.moveTween.pause();
          scene.time.addEvent({
            callbackScope: this,
            callback: function () {
              this.stunned = false;
              this.moveTween.resume();
            },
          });
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
        scene.level.path.curves[this.currentMove].p1.x,
        scene.level.path.curves[this.currentMove].p1.y
      ) / (TILE_SIZE + TILE_MARGIN);
    let duration = this.speed * multiplier;
    this.moveTween = scene.tweens.add({
      targets: this,
      duration: duration,
      callbackScope: this,
      x: scene.level.path.curves[this.currentMove].p1.x,
      y: scene.level.path.curves[this.currentMove].p1.y,
      onComplete: function () {
        if (this.currentMove >= 1) {
          this.alive = true;
        }

        this.currentMove++;
        if (this.currentMove > scene.level.path.curves.length - 1) {
          scene.stats.updateLives(this.damage);
          this.destroy();
        } else {
          this.move();
        }
      },
      onUpdate: function () {
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
          targets: this.healthBar,
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
        this.destroy();

  }
}
