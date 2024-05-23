class PoisonTower extends Tower {
  constructor(tile) {
    super(tile, 5);
    this.damage = 0;
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
          if (enemy.alive && !enemy.poisoned) {
            enemy.poisoned = true;
            let projectile = new Projectile(
              this.tile.x + TILE_SIZE / 2,
              this.tile.y + TILE_SIZE / 2,
              enemy,
              this.damage,
              {
                effect: "poison",
                duration: this.template.levels[this.level].duration,
                ticks: this.template.levels[this.level].ticks,
                damage: this.template.levels[this.level].damage,
              }
            );
            this.cooldown = this.cooldownMax;

            return false;
          }
        }
      }.bind(this)
    );
  }
}
