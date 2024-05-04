class StartButton extends Button {
  constructor() {
    super(
      5,
      520,
      195,
      30,
      "Start",
      {
        click: function () {
          scene.level.spawnWave();
          scene.customSoundManager.emitter.emit('start');
        },
      },
      true
    );
    scene.add.existing(this);

  }
}
