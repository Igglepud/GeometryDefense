class Enemy extends Phaser.GameObjects.Container {
  constructor(x = null, y = null) {
    super(
      scene,
      x ?? resolvePosition(scene.level.data.start.x) ,
      y ?? resolvePosition(scene.level.data.start.y)
    );
    this.speed = 1000;
    this.health = 100;
    this.damage = 1;
    this.resources = 1;
    this.currentMove = 1;
    this.score = 100;
    this.setDepth(DEPTH.enemy);
    this.blackBar = scene.add.rectangle(-16, -26, 32, 6, 0x000000);
    this.blackBar.setOrigin(0);
    this.blackBar.setAlpha(0);
    this.healthBar = scene.add.rectangle(-16, -26, 32, 6, 0xcb0000);
    this.healthBar.setAlpha(0);
    this.healthBar.setOrigin(0);
    this.stunned = false;
    this.stunTargeted = false;
    this.finishedPath = false;
    this.movementRemaining = 1;
    this.poisoned = false;
    this.teleporting = false;
    this.add(this.blackBar);
    this.add(this.healthBar);

    this.stealth = false;
    this.alive = false;
    scene.add.existing(this);
     this.setPosition(x, y );
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

  statusEffect(effect) {
    switch (effect.effect) {
      case "stun":
        if (!this.stunned) {
          this.stunned = true;
          this.moveTween.pause();
          this.resumeTimer = scene.time.delayedCall(
            effect.stun,
            function () {
              this.stunned = false;
              this.stunTargeted = false;
              if (!this.teleporting) {
                this.moveTween.resume();
              }
            }.bind(this)
          );
        }
        break;

      case "poison":
        this.poisonTimer = scene.time.addEvent({
          delay: effect.duration,
          repeat: effect.ticks,
          callback: function () {
            this.takeDamage(effect.damage);
            if (this.poisonTimer.repeatCount === 0) {
              this.poisoned = false;
            }
          },
          callbackScope: this,
        });
        break;

      case "teleport":
        if (!this.teleporting) {
          this.teleporting = true;
          this.moveTween.pause();
          scene.tweens.chain({
            targets: this,

            tweens: [
              {
                x: effect.x,
                y: effect.y,
                scale: 0,
                duration: 1000,
                onComplete: function () {
                  this.x = resolvePosition(scene.level.data.start.x) + 16;
                  this.y = resolvePosition(scene.level.data.start.y) + 4;
                },
                callbackScope: this,
              },

              {
                scale: 1,
                duration: 1000,
                onComplete: function () {
                  this.currentMove = 1;
                  this.teleporting = false;
                  this.move();
                },
                callbackScope: this,
              },
            ],
          });
        }
        break;

      default:
        break;
    }
  }

  move() {
    let multiplier =
      Phaser.Math.Distance.Between(
        this.x,
        this.y,
        scene.level.path.curves[this.currentMove].p1.x + 16,
        scene.level.path.curves[this.currentMove].p1.y + 4
      ) /
      (TILE_SIZE + TILE_MARGIN);
    let duration = this.speed * multiplier;
    this.moveTween = scene.tweens.add({
      targets: this,
      duration: duration,
      callbackScope: this,
      x: scene.level.path.curves[this.currentMove].p1.x + 16,
      y: scene.level.path.curves[this.currentMove].p1.y + 4,
      onComplete: function () {
        if (this.currentMove >= 1) {
          this.alive = true;

        }
                this.currentMove++;

        if (this.currentMove > scene.level.path.curves.length - 1) {
       

          scene.stats.updateLives(this.damage);
          this.finishedPath = true;
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
      this.health -= Math.floor(damage * resistance);
      scene.tweens.add({
        targets: this.healthBar,
        duration: 100,
        scaleX: this.health / this.healthMax,
        easing: "Sine.easeOut",
      });
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
    if (this.resources) {
      scene.stats.updateResources(this.resources);
    }
    this.removeFromGame();
  }

  removeFromGame() {
    if (this.alive) {
      this.alive = false;
    }
    this.healthBar.setVisible(false);
    this.blackBar.setVisible(false);
    if (!this.finishedPath) {
      let deathParticles = scene.add.particles(this.x, this.y, "1x1", {
        speed: { min: 50, max: 100 },
        scale: { start: 1, end: 0 },
        lifespan: 1000,
        frequency: 10,
        quantity: 10,
        maxParticles: 10,
      });
      deathParticles.setParticleTint(this.shape.strokeColor);
      this.destroy();
      this.checkEndLevel();
    } else {
      this.scene.customSoundManager.emitter.emit("enemy exited");
      this.scene.tweens.add({
        targets: this,
        duration: 1000,
        alpha: 0,
        scale: 0,
        angle: 720,
        callbackScope: this,
        easing: "Sine.easeOut",
        onComplete: function () {
          this.destroy();
          this.checkEndLevel();
        },
      });
    }
  }
  checkEndLevel() {
    if (scene.enemies.children.size === 0 && scene.level.doneSpawning) {
      if (scene.level.autoNext) {
        scene.level.spawnWave();
      } else {
        scene.customSoundManager.emitter.emit("wavecomplete");
        new StartButton();
    
        scene.ui.header.updateWave();
      }
    }
  
  
  }
}
