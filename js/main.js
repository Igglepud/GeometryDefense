let config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  backgroundColor: "#2e345b",
  parent: "wrapper",
  scene: [gameScene],
  // roundPixels: false,
  physics: {
    default: "arcade",
    arcade: {
      // debug: true,
    },
  },
  // pixelArt: true,
  // disableContextMenu: true, 
};

let game = new Phaser.Game(config);
