class StartButton extends Button {
  constructor() {
    super(GAME_WIDTH / 2 - 26,
    105, 130, 60, 'Start', function() {

      /*
            
      300,
      100,
      "CLICK HERE TO \nSTART NEXT WAVE",
      function () {
        // scene.scene.pause();
        scene.waveButton.setVisible(false);
      },
      this
      */
    });
    this.draw(w, h)
    this.setScrollFactor(0);
    this.depth = 1000
    scene.add.existing(this);
  }
}