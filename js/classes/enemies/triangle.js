class Triangle extends Enemy {
  constructor(x = 0, y = 0,stats) {
    super(x, y);
    console.log('triangle alive')
    this.acceleration = 0;
    this.speed = stats.speed;
    this.health = stats.health;
    this.healthMax = stats.health;
    this.resistance = stats.resistance;
    this.score = stats.score;
    this.money = stats.money;
    this.graphics = scene.add.graphics();
    this.graphics.setVisible(false);
    this.triangle = scene.add.circle(-15, 0, 18, stats.color).setIterations(stats.iterations);
    this.stealth = false;
    // this.triangle.setOrigin(0)
    this.add(this.triangle);

    scene.tweens.add({
      targets: this,
      duration: 1000,
      acceleration: 1.5,
      easing: "Sine.easeOut",
      callbackScope: this,
      onComplete: function () {
        // this.stealth = true;
      },
    });

    this.setDepth(DEPTH.enemy);
  }

  spin() {
    this.triangle.angle += this.acceleration;
  }

  updateMask() {
    this.graphics.clear();
    this.graphics.fillStyle(0xffffff, 1);
    let circle = this.graphics.fillCircle(this.x - 15, this.y, 7);
    let mask = circle.createGeometryMask(this.graphics);
    this.setMask(mask);
    mask.setInvertAlpha(true);
  }
}
