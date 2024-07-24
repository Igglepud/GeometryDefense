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
    scene.load.image("gradient", "images/grad.png");
    scene.load.image("projectileOne", "images/projectileOne.png");
    scene.load.image("pixel2", "images/pixel2.png");
    scene.load.image("pixel3", "images/pixel3.png");
    scene.input.mouse.disableContextMenu();
  },

  create: function () {
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        scene.scene.pause();
      } else {
        scene.scene.resume();
      }
    });

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
          i * (TILE_SIZE + TILE_MARGIN) + 22,
          j * (TILE_SIZE + TILE_MARGIN) + 6,
          i,
          j
        );
        this.flatGrid.push(this.grid[i][j]);
      }
    }

    this.customSoundManager = new CustomSoundManager();
    this.customSoundManager.emitter.emit("gameStart");
    this.projectiles = this.add.group();
    this.towers = this.add.group();
    this.enemies = this.add.group();
    this.level = new Level(selectedLevel);
    this.stats = new Stats();

    this.ui = new UI();

    SUBMIT_STATISTIC(GAME, "GAME_LOADED", 1);
  },

  update: function () {
    if (!this.gameLoop) {
      this.gameLoop = new GameLoop();
    }
  },
});
