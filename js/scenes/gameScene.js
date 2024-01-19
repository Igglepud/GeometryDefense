let gameScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function gameScene() {
    Phaser.Scene.call(this, {
      key: "gameScene",
    });
  },

  preload: function () {
    scene = this;
    this.name = "game";
  },

  create: function () {
    // draw grid
    for (let i = 0; i < 40; i++) {
      let ln = scene.add.line(
        null,
        null,
        i * 34,
        0,
        i * 34,
        GAME_HEIGHT,
        0x2e345b
      );
      ln.setOrigin(0)
      let ln2 = scene.add.line(
        null,
        null,
        0,
        i * 34,
        GAME_WIDTH,
        i * 34,
        0x2e345b
      );
      ln2.setOrigin(0)
    }

    // load game
    this.level = new Level(0)
  },

  update: function () {
   
  },
});
