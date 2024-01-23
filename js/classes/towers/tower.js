class Tower extends Phaser.GameObjects.Container {
  constructor(tile) {
    super(scene, 0, 0);
    this.tile = tile    
    this.cooldown = 0
    this.selected = false
    scene.towers.push(this)
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
