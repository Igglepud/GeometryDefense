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
    scene.load.image("level2", "images/level1.png");
    scene.load.image("level3", "images/level1.png");
    scene.load.image("level4", "images/level1.png");
    scene.load.image("level5", "images/level1.png");
    scene.load.image("level6", "images/level1.png");

    this.load.audio("loop1", "sounds/loop1.wav");
    this.load.audio("loop2", "sounds/loop2.wav");
    this.load.audio("loop3", "sounds/loop3.wav");
    this.load.audio("title", "sounds/title.wav");
    this.load.audio('exit', 'sounds/exit.wav');

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

    let level1 = new LevelSelect(260, 130, 1, false);
    let level2 = new LevelSelect(260, 130 + 240, 2, true);
    let level3 = new LevelSelect(260 + 260, 130, 3, true);
    let level4 = new LevelSelect(260 + 260, 130 + 240, 4, true);
    let level5 = new LevelSelect(260 + 260 + 260, 130, 5, true);
    let level6 = new LevelSelect(260 + 260 + 260, 130 + 240, 6, true);

    this.enemies = this.add.group();
    this.level = new LevelMock(0);

    this.stats = {
      updateLives: function () {},
    };
    SUBMIT_STATISTIC(GAME, "GAME_LOADED", 1);

    this.customSoundManager = new CustomSoundManager();
    this.customSoundManager.emitter.emit("title");

    //begin delete code
    //something needs to go here to force user interaction
    // let square = this.add
    //   .rectangle(400, 300, 5000, 5000, 0x0000ff)
    //   .setDepth(DEPTH.buttons);
    // square.setInteractive();
    // let clickHereText = this.add
    //   .text(400, 300, "Click  \nto\n start", {
    //     fontSize: "200px",
    //     fill: "#ffffff",
    //     fontFamily: "font1",
    //   })
    //   .setDepth(DEPTH.buttons);
    // clickHereText.setOrigin(0.5);
    // clickHereText.setInteractive();
    // square.on("pointerdown", () => {
    //   square.destroy();
    //   clickHereText.destroy();
    // });

    // clickHereText.on("pointerdown", () => {
    //   square.destroy();
    //   clickHereText.destroy();
    // });

    // square.postFX.addPixelate(9);
    // clickHereText.postFX.addPixelate(9);
    // square.postFX.addVignette(0.5, 0.5, 1, 0.3);
    // clickHereText.postFX.addVignette(0.5, 0.5, 1, 0.3);

    //end delete code
  },

  update: function () {
    // if (!this.gameLoop) {
    //   this.gameLoop = new GameLoop();
    // }
  },
});
