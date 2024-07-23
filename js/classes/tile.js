class Tile extends Phaser.GameObjects.Container {
  constructor(x, y, gridX, gridY) {
    super(scene, x, y);
    let that = this;
    this.gridX = gridX;
    this.gridY = gridY;
    this.path = false;
    this.tower = false;
    this.rectangle = scene.add.rectangle(0, 0, TILE_SIZE, TILE_SIZE, 0x000000);
    this.rectangle.setOrigin(0);
    this.rectangle.setInteractive();
  
    this.path = false;
    this.add(this.rectangle);
    scene.add.existing(this);

    this.blinkTween = scene.tweens
      .add({
        targets: this.rectangle,
        lineWidth: 4,
        duration: 1000,
        // ease: "Power2",
        yoyo: true,
        repeat: -1,
        // alpha: { value: 0, duration: 1000, yoyo: true },
      })
      .pause();

    // UNCOMMENT TO DRAW MAPS - DO NOT DELETE
    this.rectangle.on("pointerover", function () {
      if (!that.path) {
        // this.setFillStyle(0xecc3a0);
      }
    }).on("pointerout", function () {
      if (!that.path) {
        // this.setFillStyle(0x252945);
      }
    }).on("pointerdown", function () {
        if (!scene.pathDesign) {
          scene.pathDesign = []
        }
        scene.pathDesign.push({
          x: that.gridX - 2,
          y: that.gridY - 2
        })
        this.setFillStyle(0xecc3a0);
        console.log(JSON.stringify(scene.pathDesign))
    });
    //create radial

    this.rectangle.on(
      "pointerover",
      function () {
        if (!that.path && !that.tower) {
          this.rectangle.setStrokeStyle(1, 0xecc3a0);
          if (selector !== "none") {
            this.ghost = new Ghost(selector, this);
            this.add(this.ghost);
          }
        }
        this.blinkTween.play();
      },
      this
    );

    this.rectangle.on(
      "pointerout",
      function () {
        if (this.ghost) {
          this.ghost.tile.setDepth(DEPTH.tower);
          this.ghost.destroy();
        }
        if (!that.path) {
          this.blinkTween.pause();
          this.rectangle.setStrokeStyle(1, 0x252945);
        }
      },
      this
    );

    this.rectangle.on(
      "pointerdown",
      function (pointer) {
        if (pointer.button === 2) {
          deselectAll();
          selector = "none";
          if (scene.ghost) {
            scene.ghost.tile.setDepth(DEPTH.tower);
            scene.ghost.destroy();
          }
        }
        if (!that.path && !that.tower) {
          if (selector !== "none") {
            this.buildTower();
          } else {
            deselectAll();
          }
        } else if (that.tower) {
          that.tower.select();
        } else {
          deselectAll();
        }
      },
      this
    );
  }

  setPath(color = 0x4f5267) {
    this.path = true;
    this.rectangle.setFillStyle(color);
  }

  buildTower() {
    switch (selector) {
      case "basic":
        if (scene.stats.resources >= TOWER_STATS[0].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[0].levels[0].cost * -1);
          this.tower = new BasicTower(this);
        }
        break;
      case "microwave":
        if (scene.stats.resources >= TOWER_STATS[1].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[1].levels[0].cost * -1);
          this.tower = new MicrowaveTower(this);
        }
        break;
      case "stun":
        if (scene.stats.resources >= TOWER_STATS[2].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[2].levels[0].cost * -1);
          this.tower = new StunTower(this);
        }
        break;
      case "sniper":
        if (scene.stats.resources >= TOWER_STATS[3].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[3].levels[0].cost * -1);
          this.tower = new SniperTower(this);
        }
        break;
      case "rapid":
        if (scene.stats.resources >= TOWER_STATS[4].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[4].levels[0].cost * -1);
          this.tower = new RapidTower(this);
        }
        break;
      case "poison":
        if (scene.stats.resources >= TOWER_STATS[5].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[5].levels[0].cost * -1);
          this.tower = new PoisonTower(this);
        }
        break;
      case "teleport":
        if (scene.stats.resources >= TOWER_STATS[6].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[6].levels[0].cost * -1);
          this.tower = new TeleportTower(this);
        }
        break;
      case "rocket":
        if (scene.stats.resources >= TOWER_STATS[7].levels[0].cost) {
          scene.stats.updateResources(TOWER_STATS[7].levels[0].cost * -1);
          this.tower = new BoomTower(this);
        }

        break;
      default:
        break;
    }
    if (this.tower) {
      this.ghost.tile.setDepth(DEPTH.tower);
      this.ghost.destroy();
      this.add(this.tower);
    }
  }
}
