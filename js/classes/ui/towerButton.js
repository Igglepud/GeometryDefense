class TowerButton extends Phaser.GameObjects.Container {
  constructor(type, x, y) {
    super(scene, x, y)
    this.type = type
    switch (type) {
      case 0:
        this.color = 0xe279b4
        this.name = 'Basic'
        this.cost = 50
        break;
      case 1:
        this.color = 0xffa878
        this.name = 'Stun'
        this.cost = 200
        break;
      case 2:
        this.color = 0xfffcc9
        this.name = 'Radio'
        this.cost = 200
        break;
      case 3:
        this.color = 0xfffab0
        this.name = 'Splash'
        this.cost = 200
        break;
      case 4:
        this.color = 0xd2e269
        this.name = 'Slow'
        this.cost = 200
        break;
      case 5:
        this.color = 0x75dceb
        this.name = 'Rapid'
        this.cost = 200
        break;
      case 6:
        this.color = 0xa7c4e2
        this.name = 'Sniper'
        this.cost = 200
        break;
      case 7:
        this.color = 0xd3a7ff
        this.name = 'Doom'
        this.cost = 200
        break;
      default:
        this.color = 0x00FFFF
        break;
    }

    this.selectedCircle = scene.add.rectangle(0, 4, 74, 80);
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

    this.add(scene.add.text(0, -34, this.name, { fontSize: '12px', fill: '#b4b6c1', fontFamily: "font1"}).setOrigin(0.5, 0))
    this.add(scene.add.text(0, 24, this.cost, { fontSize: '12px', fill: '#b4b6c1', fontFamily: "font1"}).setOrigin(0.5, 0))

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
