class StartButton extends Button {
  constructor() {
    super(GAME_WIDTH / 2 - 26,
    105, 130, 60, 'Start', function() {
      scene.level.spawnWave();
    }, true);
    scene.add.existing(this);
  }
}