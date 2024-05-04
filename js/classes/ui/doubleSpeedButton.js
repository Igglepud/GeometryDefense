class DoubleSpeedButton extends Button {
  constructor() {
    super(
      5,
      520,
      195,
      30,
      ">>",
      {
        click: function () {
          if (!this.timeVal) {
            this.timeVal = 2;
            scene.ui.doubleSpeedButton.title.setTint(0x00ff00);
          } else if (this.timeVal === 2) {
            this.timeVal = 1;
            scene.ui.doubleSpeedButton.title.setTint(0xffffff);
          } else {
            this.timeVal = 2;
            scene.ui.doubleSpeedButton.title.setTint(0x00ff00);
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
