class StartButton extends Button {
  constructor() {
    super(
      0,
      470,
      225,
      48,
      "Start",
      {
        click: function () {
          scene.level.spawnWave();
          scene.customSoundManager.emitter.emit("start");
        },
      },
      true
    );
    scene.add.existing(this);
  }
}
