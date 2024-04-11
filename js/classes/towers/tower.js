class Tower extends Phaser.GameObjects.Container {
  constructor(tile, template) {
    super(scene, 0, 0);
    this.template = TOWER_STATS[template]
    this.range = this.template.levels[0].range
    this.cooldownMax = this.template.levels[0].cooldown

    this.rangeBubble = scene.add.circle(TILE_SIZE / 2, TILE_SIZE / 2, this.range, 0xFFFFFF)
    this.rangeBubble.setOrigin(.5)
    this.rangeBubble.setAlpha(.2)
    this.rangeBubble.setScale(0)
    this.rangeBubble.setStrokeStyle(4, 0xefc53f);
    this.add(this.rangeBubble)

    this.tile = tile    
    this.level = 1
    this.cooldown = 0
    this.selected = false
    scene.towers.push(this)
  }

  tick() {
    if (this.cooldown === 0) {
      this.cooldown = this.cooldownMax
      this.fire()
    }
    this.cooldown--;
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
