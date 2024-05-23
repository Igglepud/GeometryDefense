class StunTower extends Tower {
  constructor(tile) {
    super(tile, 2);
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
          if (enemy.alive &&!enemy.stunned &&!enemy.stunTargeted) {
            let projectile = new Projectile(
              this.tile.x + TILE_SIZE / 2,
              this.tile.y + TILE_SIZE / 2,
              enemy,
              this.template.levels[this.level].damage,
              {effect:"stun", duration: this.template.levels[this.level].duration,
              stun:this.template.levels[this.level].stun}
            );
            enemy.stunTargeted = true;
            this.cooldown = this.cooldownMax;

            return false;
          }
        }
      }.bind(this)
    );
  }
}
