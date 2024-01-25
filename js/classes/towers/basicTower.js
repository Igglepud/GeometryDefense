class BasicTower extends Tower {
  constructor(tile) {
    super(tile, 100, 2, 1)
    this.turret = scene.add.circle(0, 0, TILE_SIZE / 2, 0x6074A1)
    this.turret.setOrigin(0)
    this.add(this.turret)
    this.sendToBack(this.turret)
  }

  fire() {
    let circle = new Phaser.Geom.Circle(this.tile.x + (TILE_SIZE / 2), this.tile.y + (TILE_SIZE / 2), this.range)
    _.each(scene.enemies.getChildren(), function(enemy) {
if(enemy.alive){

      if (circle.contains(enemy.x, enemy.y)) {
        let projectile = scene.projectiles.getNext()
        if (!projectile) {
          console.log('oops, no bullets')
          return
        }
        projectile.spawn(this.tile.x, this.tile.y, enemy)
        return false
      }
    }
   
    }.bind(this))
  }
}
