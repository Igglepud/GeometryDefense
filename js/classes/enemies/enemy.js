class Enemy extends Phaser.GameObjects.Container {
  constructor(x = 0, y = 0) {
    super(scene, x, y);
    this.speed=1000;
    this.health=100;
     this.currentMove=1;
    scene.add.existing(this);
    this.setPosition(scene.level.start.x+30,scene.level.start.y+15);
    this.alpha=0;
     this.move();
  }

  move=function(){

    scene.tweens.add({
      targets:this,
      duration:this.speed,
      callbackScope:this,
      x:scene.level.path.curves[this.currentMove].p1.x+30,
      y: scene.level.path.curves[this.currentMove].p1.y+15,
      alpha:1,
      onComplete:function(){
        console.log('move complete',this.x,this.y)
        this.currentMove++;
        if(this.currentMove>scene.level.path.curves.length-1){
          this.destroy();

        }else{

          this.move();
        }
      
      }

    })


  }
  



}
