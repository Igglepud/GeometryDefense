class StunTower extends Tower {
  
  constructor(tile) {
    super(tile, 100, 15, 50);
    this.turret = scene.add.circle(1, 1, TILE_SIZE / 2 - 2, 0x00FFFF);
    this.turret.setOrigin(0);
    this.add(this.turret);
    this.sendToBack(this.turret);
    this.effectDuration = 500;
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
            projectile.spawn(this.tile.x, this.tile.y, enemy, 0, 'stun', this.effectDuration);
            return false;
          }
        }
      }.bind(this)
    );
  }
}
