class StartButton extends Button {
  constructor() {
    super(
      5,
      515,
      195,
      30,
      "Start",
      {
        click: function () {
          scene.level.spawnWave();
        },
      },
      true
    );
    scene.add.existing(this);

  }
}
