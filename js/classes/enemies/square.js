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
    this.graphics = scene.add.graphics();
    this.graphics.setVisible(false);
    this.square = scene.add
      .circle(-15, 0, 18, stats.color)
      .setIterations(1 / 4);

    this.stealth = false;
    this.square.angle = -60;
    // this.triangle.setOrigin(0)
    this.add(this.square);
    scene.tweens.add({
      targets: this.square,
      duration: 1000,
      angle: 60,
      callbackScope: this,
      repeat: -1,
      yoyo: true,
    });
    this.setDepth(DEPTH.enemy);
  }
}
