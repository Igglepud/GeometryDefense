class Stinger extends Projectile {
    constructor(x, y, enemy, damage, effect = false, duration = false, ticks=false) {
      super(scene, 0, 0);
      this.image = scene.add.circle(0, 0, 5, 0xff0000); //0xaaaaaa
      scene.physics.add.existing(this);
      this.image.setOrigin(0);
      this.add(this.image);
      scene.add.existing(this);
      this.setDepth(DEPTH.projectile);
      this.setPosition(x-5, y-5);
      this.target = enemy;
      this.damage = damage;
      this.effect = effect;
        this.duration = duration;
        this.ticks = ticks;
      this.visible = true;
      this.inactive = false;
      scene.projectiles.add(this);
    }
  
    tick() {
        let target = this.target;
      scene.physics.moveTo(this, target.x - 16, target.y - 16, 800);
      let distance = Phaser.Math.Distance.BetweenPoints(this, {
        x: target.x - 16,
        y: target.y - 16,
      });
      if (distance < 22) {
       
          target.poisonTimer = scene.time.addEvent({
            delay: this.duration,
            repeat: this.ticks,
            callback: function(){
                target.takeDamage(this.damage);
                if(target.poisonTimer.repeatCount === 0){
                    target.poisoned = false;
                }
            },
            callbackScope: this
              
              
              
          })
       // target.takeDamage(this.damage);
        this.destroy();
      }
    }
  }
  