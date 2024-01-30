class RedSquare extends Enemy {
  constructor(x = null, y = null) {
    super(x, y);
    this.acceleration = 0;
    this.speed = ENEMY_STATS.squares.red.speed;
    this.health = ENEMY_STATS.squares.red.health;
    this.healthMax = ENEMY_STATS.squares.red.health;
    this.resistance = ENEMY_STATS.squares.red.resistance;
    this.score = ENEMY_STATS.squares.red.score;
    this.money = ENEMY_STATS.squares.red.money;
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
