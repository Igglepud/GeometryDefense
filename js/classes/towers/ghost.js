class Ghost extends Phaser.GameObjects.Container {
  constructor(type, tile) {
    super(scene, 0, 0);
    if (scene.ghost) {      
      scene.ghost.tile.setDepth(DEPTH.tower)
      scene.ghost.destroy()
    }
    scene.ghost = this
    this.template = _.find(TOWER_STATS, {type:type});
    this.tile = tile

    this.rangeBubble = scene.add.circle(TILE_SIZE / 2, TILE_SIZE / 2, this.template.levels[0].range, 0xFFFFFF)
    this.rangeBubble.setOrigin(.5)
    this.rangeBubble.setAlpha(.2)
    this.rangeBubble.setStrokeStyle(4, 0xefc53f);
    this.add(this.rangeBubble)

    this.turret = scene.add.circle(4, 4, TILE_SIZE / 2 - 4, this.template.color);
    this.turret.setOrigin(0);
    this.add(this.turret);
    // this.sendToBack(this.turret);

    this.alpha = .5
    this.tile.setDepth(DEPTH.selectedTower)
    // scene.add(this)
  }

  
}
