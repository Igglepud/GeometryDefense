class PoisonTower extends Tower {
    constructor(tile) {
      super(tile, 5);
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
                  let projectile = new Stinger(
                    this.tile.x + TILE_SIZE / 2,
                    this.tile.y + TILE_SIZE / 2,
                    enemy,
                    this.template.levels[this.level].damage,
                    "poison",
                      this.template.levels[this.level].duration,
                        this.template.levels[this.level].ticks
                  );
                  this.cooldown = this.cooldownMax;
      
                  return false;
                }
              }
        }.bind(this)
      );
    }
  }
  