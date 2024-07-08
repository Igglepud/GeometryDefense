class Rocket extends Projectile {
  constructor(
    x,
    y,
    enemy,
    damage,
    effect = false,
    duration = false,
    size = false
  ) {
    super(scene, 0, 0);
    this.image = scene.add.circle(0, 0, 5, 0xff0000);
    scene.physics.add.existing(this);
    this.image.setOrigin(0);
    this.add(this.image);
    scene.add.existing(this);
    this.setDepth(DEPTH.projectile);
    this.setPosition(x - 5, y - 5);
    this.target = enemy;
    this.damage = damage;
    this.effect = effect;
    this.duration = duration;
    this.size = size;
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
        if (this.effect.type == "teleport") {
          new Portal(this.target.x, this.target.y, this.effect.size);
        }
      } else {
        let explosion = new Explosion(
          this.target.x,
          this.target.y,
          this.size,
          this.damage,
          this.effect
        );
      }
      this.destroy();
    }
  }
}
