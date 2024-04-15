class MicrowaveTower extends Tower {
  constructor(tile) {
    super(tile, 2);
    this.turret = scene.add.circle(4, 4, TILE_SIZE / 2 - 4, this.template.color);
    this.turret.setOrigin(0);
    this.add(this.turret);
    this.sendToBack(this.turret);
  }

  fire() {
    let target = false
    let circle = new Phaser.Geom.Circle(
      this.tile.x + TILE_SIZE / 2,
      this.tile.y + TILE_SIZE / 2,
      this.range
    );
    _.each(
      scene.enemies.getChildren(),
      function (enemy) {
        if (enemy && enemy.alive && circle.contains(enemy.x, enemy.y)) {
          target = true;
        }
      }.bind(this)
    );
    if (target) {
      new Explosion(this.tile.x + TILE_SIZE / 2, this.tile.y + TILE_SIZE / 2, this.range, this.template.levels[this.level].damage)
      this.shake()
    }
  }

  shake() {
    scene.tweens.add({
      targets: this,
      duration: this.cooldownMax,
      x: this.x + Phaser.Math.Between(-3, 3),
      y: this.y + Phaser.Math.Between(-3, 3),
      callbackScope: this,
      yoyo: true,
    });
  }
}
