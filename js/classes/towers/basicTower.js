class BasicTower extends Tower {
  constructor(x = 0, y = 0) {
    super(x, y);
    this.range = 100
    this.cooldown = 0
    this.cooldownMax = 2
    this.turret = scene.add.circle(0, 0, TILE_SIZE / 2, 0x6074A1)
    this.turret.setOrigin(0)
    this.add(this.turret)
    scene.towers.push(this)
    // this.setDepth(DEPTH.tower)
  }

  tick() {
    console.log('tock')
    if (this.cooldown === 0) {
      this.cooldown = this.cooldownMax
      this.fire()
    }
    this.cooldown--;
  }

  fire() {
    let circle = new Phaser.Geom.Circle(this.tile.x + (TILE_SIZE / 2), this.tile.y + (TILE_SIZE / 2), this.range)
    _.each(scene.enemies, function(enemy) {
      if (circle.contains(enemy.x, enemy.y)) {
        enemy.takeDamage(1)
        return false
      }
    })
    // circle.destroy()
  }
}
