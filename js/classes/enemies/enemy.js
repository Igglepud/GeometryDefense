class Enemy extends Phaser.GameObjects.Container {
  constructor(x = null, y = null) {
    super(
      scene,
      x ?? resolvePosition(scene.level.data.start.x) + 30,
      y ?? resolvePosition(scene.level.data.start.y) + 15
    );
    this.speed = 1000;
    this.health = 100;

    this.currentMove = 1;

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
      duration: this.speed,
      callbackScope: this,
      alpha: 1,
      onComplete: this.move(),
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
    this.moveTween = scene.tweens.add({
      targets: this,
      duration: this.speed,
      callbackScope: this,
      x: scene.level.path.curves[this.currentMove].p1.x + 30,
      y: scene.level.path.curves[this.currentMove].p1.y + 15,
      onComplete: function () {
        if (this.currentMove == 1) {
          this.alive = true;
        }

        this.currentMove++;
        if (this.currentMove > scene.level.path.curves.length - 1) {
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
      if (this.health <= 0) {
        this.die();
      }
    }
  }

  die() {
    this.alive = false;
    this.moveTween.stop();
    this.moveTween.remove();
    this.destroy();
    if (scene.stats) {
      if (this.score) {
        scene.stats.updateScore(this.score)
      }
      if (this.money) {
        scene.stats.updateMoney(this.money)
      }
    }
  }
}
