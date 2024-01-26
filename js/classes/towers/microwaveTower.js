class MicrowaveTower extends Tower {
  constructor(tile) {
    super(tile, 50, 1, 1);
    this.turret = scene.add.circle(0, 0, TILE_SIZE / 2, 0x710019);
    this.turret.setOrigin(0);
    this.add(this.turret);
    this.sendToBack(this.turret);
  }

  fire() {
    let circle = new Phaser.Geom.Circle(
      this.tile.x + TILE_SIZE / 2,
      this.tile.y + TILE_SIZE / 2,
      this.range
    );
    _.each(
      scene.enemies.getChildren(),
      function (enemy) {
        if (enemy && enemy.alive && circle.contains(enemy.x, enemy.y)) {
          enemy.takeDamage(2)
        }
      }.bind(this)
    );
  }
}
