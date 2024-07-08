class Square extends Enemy {
  constructor(stats, x = null, y = null) {
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

    this.shape = scene.add
      .circle(0, 0, 9, stats.color)
      .setIterations(1 / 4)
      .setStrokeStyle(2, stats.color)
      .setFillStyle(0xffffff, 0);

    this.stealth = false;
    this.shape.angle = -60;
    this.add(this.shape);
    scene.tweens.add({
      targets: this.shape,
      duration: 1000,
      angle: 60,
      callbackScope: this,
      repeat: -1,
      yoyo: true,
    });
  }
}
