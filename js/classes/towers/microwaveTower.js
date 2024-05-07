class MicrowaveTower extends Tower {
  constructor(tile) {
    super(tile, 2);
   

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
      this.cooldown = this.cooldownMax;

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
