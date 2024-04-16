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
    this.damage=stats.damage;
    this.resources = stats.resources;

    // this.graphics = scene.add.graphics();
    // this.graphics.setVisible(false);
      this.triangle = scene.add
        .circle(0, 0, 9, stats.color)
        .setIterations(stats.iterations)
        .setStrokeStyle(2, stats.color)
        .setFillStyle(0xffffff,0);
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

  // updateMask() {
  //   this.graphics.clear();
  //   this.graphics.fillStyle(0xffffff, 1);
  //   let circle = this.graphics.fillCircle(this.x , this.y, 3);
  //   let mask = circle.createGeometryMask(this.graphics);
  //   this.setMask(mask);
  //   mask.setInvertAlpha(true);
  // }
}
