class RedSquare extends Enemy {
  constructor(x = null, y = null) {
    super(x, y);
    this.acceleration = 0;
    this.speed = ENEMYSTATS.squares.red.speed;
    this.health = ENEMYSTATS.squares.red.health;
    this.healthMax = ENEMYSTATS.squares.red.health;
    this.resistance = ENEMYSTATS.squares.red.resistance;
    this.graphics = scene.add.graphics();
    this.graphics.setVisible(false);
      this.square = scene.add.circle(-15, 0, 18, 0xff0000).setIterations(1 / 4);
      
      this.stealth = false;
      this.square.angle=-60
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
