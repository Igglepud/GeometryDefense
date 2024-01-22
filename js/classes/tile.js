class Tile extends Phaser.GameObjects.Container {
  constructor(x, y, gridX, gridY) {
    super(scene, x, y);
    this.gridX = gridX
    this.gridY = gridY
    this.rectangle = scene.add.rectangle(0 ,0, TILE_SIZE, TILE_SIZE, 0x252945)
    this.rectangle.setOrigin(0)
    this.path = false
    this.add(this.rectangle)
    scene.add.existing(this);
  }

  setPath(color = 0x4f5267) {
    this.path = true
    this.rectangle.setFillStyle(color)
  }  
}
