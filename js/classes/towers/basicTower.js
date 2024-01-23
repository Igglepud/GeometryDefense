class BasicTower extends Tower {
  constructor(tile) {
    super(tile);
    this.range = 100
    this.cooldownMax = 2
    
    this.turret = scene.add.circle(0, 0, TILE_SIZE / 2, 0x6074A1)
    this.turret.setOrigin(0)
    this.add(this.turret)

    this.rangeBubble = scene.add.circle(TILE_SIZE / 2, TILE_SIZE / 2, this.range, 0xFFFFFF)
    this.rangeBubble.setOrigin(.5)
    this.rangeBubble.setAlpha(.2)
    this.rangeBubble.setScale(0)
    this.rangeBubble.setStrokeStyle(4, 0xefc53f);
    this.add(this.rangeBubble)
    this.select()
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
  }


}
