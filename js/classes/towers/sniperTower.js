class SniperTower extends Tower {
  constructor(tile) {
    super(tile, 3);
    this.turret = scene.add.circle(4, 4, TILE_SIZE / 2 - 4, this.template.color);
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
        if (circle.contains(enemy.x, enemy.y)) {
          if (enemy.alive) {
            let projectile = scene.projectiles.getNext();
            if (!projectile) {
              console.log("oops, no bullets");
              return;
            }
            projectile.spawn(this.tile.x, this.tile.y, enemy, this.template.levels[this.level].damage);
            return false;
          }
        }
      }.bind(this)
    );
  }
}
