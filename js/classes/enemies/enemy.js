class Enemy extends Phaser.GameObjects.Container {
  constructor(x = null, y = null) {
    super(scene, x ?? resolvePosition(scene.level.data.start.x) + 30, y ?? resolvePosition(scene.level.data.start.y) + 15);
    this.speed = 1000;
    this.health = 100;
    this.currentMove = 1;
    scene.add.existing(this);
    // this.setPosition(scene.level.start.x + 30, scene.level.start.y + 15);
    this.alpha = 0;
    scene.tweens.add({
      targets: this,
      duration: this.speed,
      callbackScope: this,
      alpha: 1,
      onComplete: this.move()
    });
  }

  move() {
    scene.tweens.add({
      targets: this,
      duration: this.speed,
      callbackScope: this,
      x: scene.level.path.curves[this.currentMove].p1.x + 30,
      y: scene.level.path.curves[this.currentMove].p1.y + 15,
      onComplete: function () {
        console.log("move complete", this.x, this.y);
        this.currentMove++;
        if (this.currentMove > scene.level.path.curves.length - 1) {
          this.destroy();
        } else {
          this.move();
        }
      },
    });
  };

  takeDamage(damage=1,resistance=1){
    
    this.health -= Math.floor(damage*resistance)  
      if(this.health <= 0){
      this.die();
    }

  }

  die(){
    this.destroy();
  }
}
