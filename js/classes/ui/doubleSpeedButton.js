class DoubleSpeedButton extends Button {
  constructor() {
    super(
      GAME_WIDTH / 2 - 26,
      405,
      130,
      60,
      "2X",
      {
        click: function () {
          if (!this.timeVal) {
            this.timeVal = 2;
          } else if (this.timeVal === 2) {
            this.timeVal = 1;
          } else {
            this.timeVal = 2;
          }
          scene.time.timeScale = this.timeVal;
          scene.physics.timeScale = this.timeVal;
          scene.tweens.timeScale = this.timeVal;
        },
      },
      false
    );
    scene.add.existing(this);
  }
}
