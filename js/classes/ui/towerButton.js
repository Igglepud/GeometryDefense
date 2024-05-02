class TowerButton extends Phaser.GameObjects.Container {
  constructor(type, x, y) {
    super(scene, x, y);
    this.type = type;

    let template = TOWER_STATS[type];

    this.color = template.color;
    this.name = template.name;
    this.cost = template.levels[0].cost;
    this.selector = template.type;

    this.selectedCircle = scene.add.rectangle(0, 4, 74, 80);
    this.selectedCircle.setStrokeStyle(2, 0xb4b6c1);
    this.selectedCircle.setVisible(false);
    this.add(this.selectedCircle);

    this.tower = scene.add.circle(1, 1, TILE_SIZE / 2 - 2, this.color);
    this.tower.setInteractive();
    this.add(this.tower);
    this.tower.on(
      "pointerdown",
      function () {
        _.each(this.parentContainer.towerButtons, function (b) {
          b.deselect();
        });
        deselectAll();
        this.select();
      }.bind(this)
    );

    this.add(
      scene.add
        .text(0, -34, this.name, {
          fontSize: "12px",
          fill: "#b4b6c1",
          fontFamily: "font1",
        })
        .setOrigin(0.5, 0)
    );
    this.add(
      scene.add
        .text(0, 24, this.cost, {
          fontSize: "12px",
          fill: "#b4b6c1",
          fontFamily: "font1",
        })
        .setOrigin(0.5, 0)
    );



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
    scene.ui.header.resourcesTextSubber.setText("");
    scene.ui.header.resourcesTextAdder.setText("");
  }

  select() {
    this.selectedCircle.setVisible(true);
    selector = this.selector;
    scene.ui.header.resourcesTextSubber.setText(" - " + this.cost);
    scene.ui.header.resourcesTextAdder.setText("");
  }
}
