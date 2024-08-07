class Header extends Panel {
  constructor(ui) {
    super(0, 0, GAME_WIDTH, 72);
    this.ui = ui;
    this.livesText = scene.add.text(1125, 16, "Lives: 5", {
      fontSize: "18px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.waveText = scene.add.text(
      1125,
      36,
      "Wave: " + scene.level.currentWave + "/" + scene.level.data.waves.length,
      { fontSize: "18px", fill: "#b4b6c1", fontFamily: "font1" }
    );
    this.scoreText = scene.add.text(16, 16, "Score: 0", {
      fontSize: "18px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.resourcesText = scene.add.text(16, 36, "Resources: 100", {
      fontSize: "18px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.resourcesTextAdder = scene.add.text(
      16 + this.resourcesText.width,
      36,
      "",
      { fontSize: "18px", fill: "#157334", fontFamily: "font1" }
    );
    this.resourcesTextSubber = scene.add.text(
      16 + this.resourcesText.width,
      36,
      "",
      { fontSize: "18px", fill: "#73331e", fontFamily: "font1" }
    );
    this.add(
      scene.add.text(385, 10, "Geometry Defense", {
        fontSize: "40px",
        fill: "#b4b6c1",
        fontFamily: "font1",
      })
    );

    this.add(this.livesText);
    this.add(this.scoreText);
    this.add(this.waveText);
    this.add(this.resourcesText);
    this.add(this.resourcesTextAdder);
    this.add(this.resourcesTextSubber);
  }

  updateWave() {
    scene.level.currentWave++;
    this.waveText.setText(
      "Wave: " + scene.level.currentWave + "/" + scene.level.totalWaves
    );
  }
}
