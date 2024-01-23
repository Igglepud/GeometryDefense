class BlueTriangle extends Enemy {
  constructor(x = null, y = null) {
    super(x, y);
    this.acceleration=0;
    this.speed = ENEMYSTATS.triangles.blue.speed;
    this.health = ENEMYSTATS.triangles.blue.health;
    this.resistance = ENEMYSTATS.triangles.blue.resistance;
    this.graphics=scene.add.graphics();
    this.graphics.setVisible(false);
    this.triangle = scene.add.circle(-15, 0,18, 0x0000ff).setIterations(1/3);
   // this.triangle.setOrigin(0)
    this.add(this.triangle);
   
    
    scene.time.addEvent({
      delay: 1000,
      callback: this.takeDamage,
      callbackScope: this,
      repeat:-1,
    });
   
    }
    move() {
      scene.tweens.add({
        targets: this,
        duration: this.speed,
        callbackScope: this,
        x: scene.level.path.curves[this.currentMove].p1.x + 30,
        y: scene.level.path.curves[this.currentMove].p1.y + 15,
        acceleration:1,
        onUpdate() {
          this.triangle.angle+=this.acceleration;
          this.graphics.clear();
          this.graphics.fillStyle(0xffffff, 1);
          let circle=this.graphics.fillCircle(this.x-15, this.y, 7);
         
          let mask =circle.createGeometryMask(this.graphics);
          this.setMask(mask);
          mask.setInvertAlpha(true);
         


        },
        onComplete: function () {
          this.currentMove++;
          if (this.currentMove > scene.level.path.curves.length - 1) {
            this.destroy();
          } else {
            this.move();
          }
        },
      });
    };
  }

