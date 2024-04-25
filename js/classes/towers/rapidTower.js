class RapidTower extends Tower {
  constructor(tile) {
    super(tile, 4);
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
            let projectile = new Projectile(this.tile.x + TILE_SIZE / 2, this.tile.y + TILE_SIZE / 2, enemy, this.template.levels[this.level].damage);
          
           
            
            return false;
          }
        }
      }.bind(this)
    );
  }
}
