class Header extends Panel {
  constructor(ui) {
    super(0, 0, GAME_WIDTH, 68);
    this.ui = ui;
    this.livesText = scene.add.text(1125, 16, 'Lives: 500', { fontSize: '18px', fill: '#b4b6c1', fontFamily: "font1"});
    this.waveText = scene.add.text(1125, 36, 'Wave: 1/10', { fontSize: '18px', fill: '#b4b6c1', fontFamily: "font1"});
    this.scoreText = scene.add.text(16, 16, 'Score: 0', { fontSize: '18px', fill: '#b4b6c1', fontFamily: "font1"});
    this.resourcesText = scene.add.text(16, 36, 'Resources: 100', { fontSize: '18px', fill: '#b4b6c1', fontFamily: "font1"});
    this.add(scene.add.text(320, 16, 'Geometry Defense', { fontSize: '40px', fill: '#b4b6c1', fontFamily: "font1"}));

    // this.text = scene.add.text(275, 200, "", {
    //   fontFamily: "font1",
    //   fontSize: "48px",
    //   fill: "#808080",
    //   align: "center",
    // });
    
    this.add(this.livesText);
    this.add(this.scoreText);
    this.add(this.waveText);
    this.add(this.resourcesText);

    // this.scoreText.postFX.addGlow(0x0000ff, 10)
    // this.livestext.postFX.addGlow(0x0000ff, 10)
  }
}
