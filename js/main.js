let config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: "#252945",
  parent: "wrapper",
  scene: [gameScene],
  roundPixels: true,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
    },
  },
  pixelArt: true,
  disableContextMenu: true, 
};

let game = new Phaser.Game(config);
