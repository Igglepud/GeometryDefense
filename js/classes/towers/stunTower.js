class StunTower extends Tower {
  constructor(tile) {
    super(tile, 1);
  
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
            projectile.spawn(this.tile.x, this.tile.y, enemy, this.template.levels[this.level].damage, 'stun', this.effectDuration);
            return false;
          }
        }
      }.bind(this)
    );
  }
}
