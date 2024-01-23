class BasicTower extends Tower {
  constructor(tile) {
    super(0, 0);
    this.range = 100
    this.cooldown = 0
    this.cooldownMax = 2
    this.tile = tile
    this.turret = scene.add.circle(0, 0, TILE_SIZE / 2, 0x6074A1)
    this.rangeBubble = scene.add.circle(TILE_SIZE / 2, TILE_SIZE / 2, this.range, 0xFFFFFF)
    this.turret.setOrigin(0)
    this.rangeBubble.setOrigin(.5)
    this.rangeBubble.setAlpha(.2)
    this.rangeBubble.setScale(0)
    this.rangeBubble.setStrokeStyle(4, 0xefc53f);
    this.add(this.turret)
    this.add(this.rangeBubble)
    this.selected = false
    scene.towers.push(this)
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
        console.log('pew')
        enemy.takeDamage(1)
        return false
      }
    })
  }

  select() {
    deselectAll()
    this.tile.setDepth(DEPTH.selectedTower)
    this.selected = true
    scene.tweens.add({
      targets: this.rangeBubble,
      duration: 100,
      scale: 1,
      repeat: 0
    });
  }

  deselect() {
    this.tile.setDepth(DEPTH.tower)
    this.selected = false
    scene.tweens.add({
      targets: this.rangeBubble,
      duration: 100,
      scale: 0,
      repeat: 0
    });
  }
}
