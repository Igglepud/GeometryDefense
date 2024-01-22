class Tile extends Phaser.GameObjects.Container {
  constructor(x, y, gridX, gridY) {
    super(scene, x, y);
    let that = this
    this.gridX = gridX
    this.gridY = gridY
    this.path = false
    this.tower = false
    this.rectangle = scene.add.rectangle(0 ,0, TILE_SIZE, TILE_SIZE, 0x252945)
    this.rectangle.setOrigin(0)
    this.rectangle.setInteractive()

    // UNCOMMENT TO DRAW MAPS - DO NOT DELETE
    /*
    this.rectangle.on("pointerover", function () {
      if (!that.path) {
        // this.setFillStyle(0xecc3a0);
      }
    }).on("pointerout", function () {
      if (!that.path) {
        // this.setFillStyle(0x252945);
      }
    }).on("pointerdown", function () {
        if (!scene.pathDesign) {
          scene.pathDesign = []
        }
        scene.pathDesign.push({
          x: that.gridX,
          y: that.gridY
        })
        this.setFillStyle(0xecc3a0);
        console.log(JSON.stringify(scene.pathDesign))
    });
    */


    this.rectangle.on("pointerdown", function () {
      console.log('building!')
      if (!that.path && !that.tower) {
        that.tower = new BasicTower()
        that.tower.tile = that
        that.add(that.tower)
        console.log(that.tower)
      }
    });

    this.path = false
    this.add(this.rectangle)
    scene.add.existing(this);
  }

  setPath(color = 0x4f5267) {
    this.path = true
    this.rectangle.setFillStyle(color)
  }  
}
