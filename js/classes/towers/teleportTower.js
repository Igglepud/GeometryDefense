class TeleportTower extends Tower {
    constructor(tile) {
      super(tile, 7);
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
              this.cooldown = this.cooldownMax;
              new Rocket(
                this.tile.x + TILE_SIZE / 2,
                this.tile.y + TILE_SIZE / 2,
                enemy,
                this.template.levels[this.level].damage,
                null,
                null,
                this.template.levels[this.level].size
              );
              this.cooldown = this.cooldownMax;
  
              return false;
            }
          }
        }.bind(this)
      );
    }
  }
  