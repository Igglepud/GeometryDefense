class Triangle extends Enemy {
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
      .setIterations(stats.iterations)
      .setStrokeStyle(2, stats.color)
      .setFillStyle(0xffffff, 0);
    this.add(this.shape);

    scene.tweens.add({
      targets: this,
      duration: 1000,
      acceleration: 1.5,
      easing: "Sine.easeOut",
      callbackScope: this,
      onComplete: function () {
      },
    });
  }

  spin() {
    this.shape.angle += this.acceleration;
  }

  
}
