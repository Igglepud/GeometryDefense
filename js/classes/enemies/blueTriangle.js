class BlueTriangle extends Enemy {
  constructor(x = null, y = null) {
    super(x, y);
    this.acceleration = 0;
    this.speed = ENEMYSTATS.triangles.blue.speed;
    this.health = ENEMYSTATS.triangles.blue.health;
    this.healthMax = ENEMYSTATS.triangles.blue.health;
    this.resistance = ENEMYSTATS.triangles.blue.resistance;
    this.graphics = scene.add.graphics();
    this.graphics.setVisible(false);
    this.triangle = scene.add.circle(-15, 0, 18, 0x0000ff).setIterations(1 / 3);
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
