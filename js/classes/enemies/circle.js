class Circle extends Enemy {
    constructor(stats, x = null, y = null) {
      super(x, y);
      this.acceleration = 0;
      this.speed = stats.speed;
      this.health = stats.health;
      this.healthMax = stats.health;
      this.resistance = stats.resistance;
      this.score = stats.score;
      this.money = stats.money;
      this.graphics = scene.add.graphics();
      this.graphics.setVisible(false);
      this.circle = scene.add
        .circle(-15, 0, stats.radius, stats.color)
      this.stealth = false;
      // this.triangle.setOrigin(0)
      this.add(this.circle);
     
      this.setDepth(DEPTH.enemy);
    }
    split() { 
        if (this.circle.radius == 16) { 
          let circle1=  new Circle(ENEMY_STATS.circles.smallGreen, this.x - 10, this.y - 10);
          let circle2=  new Circle(ENEMY_STATS.circles.smallGreen, this.x + 10, this.y + 10);
            circle1.currentMove = this.currentMove;
            circle2.currentMove = this.currentMove;

        }
        else if(this.circle.radius == 8) { 
           let circle1= new Circle(ENEMY_STATS.circles.smallestGreen, this.x - 10, this.y - 10);
            let circle2 = new Circle(ENEMY_STATS.circles.smallestGreen, this.x + 10, this.y + 10);
            circle1.currentMove = this.currentMove;
            circle2.currentMove = this.currentMove;
        }

    };
  }
  