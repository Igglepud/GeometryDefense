class Projectile extends Phaser.GameObjects.Container {
  constructor(x, y, enemy, damage, effect = false, duration = false) {
    super(scene, 0, 0);
    this.image = scene.add.circle(0, 0, 5, 0xff0000); //0xaaaaaa
    scene.physics.add.existing(this);
    this.image.setOrigin(0);
    this.add(this.image);
    scene.add.existing(this);
    this.depth = DEPTH.projectile;
    this.setPosition(x, y);
    this.target = enemy;
    this.damage = damage;
    this.effect = effect;
    this.duration = duration;
    this.visible = true;
    this.inactive = false;
    scene.projectiles.add(this);
  }
  

 

  tick() {
    scene.physics.moveTo(this, this.target.x - 16, this.target.y - 16, 800);
    let distance = Phaser.Math.Distance.BetweenPoints(this, {
      x: this.target.x - 16,
      y: this.target.y - 16,
    });
    if (distance < 22) {
      if (this.effect) {
        this.target.statusEffect(this.effect, this.duration);
      }
      this.target.takeDamage(this.damage);
      scene.projectiles.remove(this);
      this.destroy();
    }
  }
}
