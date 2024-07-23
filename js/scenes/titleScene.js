let titleScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function titleScene() {
    Phaser.Scene.call(this, {
      key: "titleScene",
    });
  },

  preload: function () {
    scene = this;
    this.name = "title";

    let pixel = this.textures.generate("1x1", { data: ["1"], pixelWidth: 4 });

    this.load.spritesheet("basicFrame", "images/basicFrame.png", {
      frameWidth: 12,
      frameHeight: 12,
    });

    scene.load.spritesheet("buttonFrame", "images/buttonFrame.png", {
      frameWidth: 12,
      frameHeight: 12,
    });

    scene.load.image("gradient", "images/grad.png");
    scene.load.image("level1", "images/level1.png");
    scene.load.image("level2", "images/level2.png");
    scene.load.image("level3", "images/level3.png");
    scene.load.image("level4", "images/level4.png");
    scene.load.image("level5", "images/level5.png");
    scene.load.image("level6", "images/level6.png");

    this.load.audio("loop1", "sounds/loop1.wav");
    this.load.audio("loop2", "sounds/loop2.wav");
    this.load.audio("loop3", "sounds/loop3.wav");
    this.load.audio("title", "sounds/title.wav");
    this.load.audio("exit", "sounds/exit.wav");

    scene.input.mouse.disableContextMenu();
  },

  create: function () {
    new Panel(212, 34, 850, 580);
    scene.add
      .text(247, 47, "Geometry Defense", {
        fontSize: "60px",
        fill: "#b4b6c1",
        fontFamily: "font1",
      })
      .setDepth(DEPTH.display);
    // draw grid
    this.grid = [];
    this.flatGrid = [];
    for (let i = 0; i < 40; i++) {
      for (let j = 0; j < 40; j++) {
        if (!this.grid[i]) {
          this.grid[i] = [];
        }
        this.grid[i][j] = new Tile(
          i * (TILE_SIZE + TILE_MARGIN) - 8,
          j * (TILE_SIZE + TILE_MARGIN) + 3,
          i,
          j
        );
        this.grid[i][j].rectangle.removeInteractive();
        this.flatGrid.push(this.grid[i][j]);
      }
    }

    new LevelSelect(260, 130, 1);
    new LevelSelect(260, 130 + 240, 2);
    new LevelSelect(260 + 260, 130, 3);
    new LevelSelect(260 + 260, 130 + 240, 4);
    new LevelSelect(260 + 260 + 260, 130, 5);
    new LevelSelect(260 + 260 + 260, 130 + 240, 6);

    this.enemies = this.add.group();
    this.level = new LevelMock(0);

    this.stats = {
      updateLives: function () {},
    };
    SUBMIT_STATISTIC(GAME, "GAME_LOADED", 1);

    this.customSoundManager = new CustomSoundManager();
    this.customSoundManager.emitter.emit("title");
    $('#highscoreContainer').hide();

  },

  update: function () {
    // if (!this.gameLoop) {
    //   this.gameLoop = new GameLoop();
    // }
  },
});
