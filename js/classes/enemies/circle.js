class Circle extends Enemy {
    constructor(stats, x, y, explode = false) {
      super(x, y);
      this.acceleration = 0;
      this.speed = stats.speed;
      this.health = stats.health;
      this.healthMax = stats.health;
      this.resistance = stats.resistance;
      this.score = stats.score;
      this.money = stats.money;
      this.damage = stats.damage;
      this.resources = stats.resources;
      this.graphics = scene.add.graphics();
      this.graphics.setVisible(false);
      this.circle = scene.add
        .circle(0, 0, stats.radius, stats.color)
      this.stealth = false;
      // this.triangle.setOrigin(0)
      this.add(this.circle);
      if (explode) {
        this.alpha = 1
        // this.alive = false
        this.spawnTween.stop().remove();
        scene.tweens.add({
          targets: this,
          duration: 100,
          x: this.x + Phaser.Math.Between(-25, 25),
          y: this.y + Phaser.Math.Between(-25, 25),
          easing: "Quartic.In",      
          callbackScope: this,
          onComplete: function () {
            this.move();
          },
        });
      }
      this.setDepth(DEPTH.enemy);
    }
    split() { 
        if (this.circle.radius == 16) { 
          let circle1=  new Circle(ENEMY_STATS.circles.smallGreen, this.x, this.y, true);
          let circle2=  new Circle(ENEMY_STATS.circles.smallGreen, this.x, this.y, true);
            circle1.currentMove = this.currentMove;
            circle2.currentMove = this.currentMove;

        }
        else if(this.circle.radius == 8) { 
           let circle1= new Circle(ENEMY_STATS.circles.smallestGreen, this.x, this.y, true);
            let circle2 = new Circle(ENEMY_STATS.circles.smallestGreen, this.x, this.y, true);
            circle1.currentMove = this.currentMove;
            circle2.currentMove = this.currentMove;
        }

    };
  }
  