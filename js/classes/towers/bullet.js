class Bullet extends Phaser.GameObjects.Container {
  constructor(x, y, enemy, damage, effect = false) {
    super(scene, 0, 0);
    this.image = scene.add.image(0, 0, 'projectileOne'); 
    scene.physics.add.existing(this);
    this.image.setOrigin(0);
    this.add(this.image);
    scene.add.existing(this);
    this.setDepth(DEPTH.projectile);
    this.setPosition(x - 5, y - 5);
    this.target = enemy;
    this.damage = damage;
    this.effect = effect;
    this.visible = true;
    this.inactive = false;
    scene.projectiles.add(this);
    this.tick()
  }

  tick() {
    scene.physics.moveTo(this, this.target.x + this.target.displayWidth / 2 , this.target.y + this.target.displayHeight / 2, 800);
    let angle = Phaser.Math.Angle.BetweenPoints(this, {
      x: this.target.x + this.target.displayWidth / 2,
      y: this.target.y + this.target.displayHeight / 2,
    });
    this.rotation = angle
    let distance = Phaser.Math.Distance.BetweenPoints(this, {
      x: this.target.x + this.target.displayWidth / 2,
      y: this.target.y + this.target.displayHeight / 2,
    });
    if (distance < 25) {
      if (this.effect) {
        this.target.statusEffect(this.effect);
      }
      this.target.takeDamage(this.damage);

      const emitter = scene.add.particles(this.x, this.y, 'pixel2', {
        lifespan: 300,
        speed: { min: 150, max: 250 },
        scale: { start: 0.8, end: 0 },
        blendMode: 'ADD',
        emitting: false
      });
      emitter.explode(10);
      scene.projectiles.remove(this);
      this.destroy();
    }
  }
}
