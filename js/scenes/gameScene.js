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

    this.load.spritesheet("basicFrame", "images/basicFrame.png", {
      frameWidth: 12,
      frameHeight: 12,
    });

    scene.load.spritesheet("buttonFrame", "images/buttonFrame.png", {
      frameWidth: 12,
      frameHeight: 12,
    });

  },

  create: function () {
    if (this.spawnInterval) {
      clearInterval(this.spawnInterval);
    }
    // draw grid
    this.grid = [];
    this.flatGrid = [];
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        if (!this.grid[i]) {
          this.grid[i] = [];
        }
        this.grid[i][j] = new Tile(
          i * (TILE_SIZE + TILE_MARGIN),
          j * (TILE_SIZE + TILE_MARGIN),
          i,
          j
        );
        this.flatGrid.push(this.grid[i][j]);
      }
    }
    /*
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
      ln.setOrigin(0);
      let ln2 = scene.add.line(
        null,
        null,
        0,
        i * 34,
        GAME_WIDTH,
        i * 34,
        0x2e345b
      );
      ln2.setOrigin(0);
      // ln.postFX.addGlow(0x0000ff, 5)
      // ln2.postFX.addGlow(0x0000ff, 5);
      // ln.setBlendMode(Phaser.BlendModes.ADD);
      // ln2.setBlendMode(Phaser.BlendModes.ADD);
    }
    */
    // load game

    this.projectiles = new Projectiles();
    this.towers = [];
    this.enemies = this.add.group();
    this.level = new Level(0);
    this.stats = new Stats();

    this.ui = new UI();

  },

  update: function () {
    if (!this.gameLoop) {
      this.gameLoop = new GameLoop();
    }
  },
});
