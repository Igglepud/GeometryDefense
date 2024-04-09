class TowerButton extends Phaser.GameObjects.Container {
  constructor(type, x, y) {
    super(scene, x, y)
    this.type = type
    switch (type) {
      case 0:
        this.color = 0x6074a1
        break;
      case 1:
        this.color = 0x710019
        break;
      case 2:
      default:
        this.color = 0x00FFFF
        break;
    }

    this.selectedCircle = scene.add.circle(1, 1, TILE_SIZE / 2 + 2);
    this.selectedCircle.setStrokeStyle(2, 0xb4b6c1);
    this.selectedCircle.setVisible(false);
    this.add(this.selectedCircle);

    this.tower = scene.add.circle(1, 1, TILE_SIZE / 2 - 2, this.color);
    this.tower.setInteractive()
    this.add(this.tower);
    this.tower.on("pointerdown", function () {
      _.each(this.parentContainer.towerButtons, function(b) {
        b.deselect()
      }) 
      this.select()
    }.bind(this))

    // I need a circle around the tower to show selected



    // super(0, 62, 204, 412);
    // this.ui = ui;
    // this.add(scene.add.text(24, 16, 'Towers', { fontSize: '28px', fill: '#b4b6c1', fontFamily: "font1"}));
    
    // this.add(this.livesText);
    // this.add(this.scoreText);
    // this.add(this.waveText);
    // this.add(this.resourcesText);

    // this.scoreText.postFX.addGlow(0x0000ff, 10)
    // this.livestext.postFX.addGlow(0x0000ff, 10)
  }

  deselect() {
    this.selectedCircle.setVisible(false);
  }

  select() {
    this.selectedCircle.setVisible(true);
  }
}
