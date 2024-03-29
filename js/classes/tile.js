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
        lineWidth: 8,
        duration: 1000,
        // ease: "Power2",
        yoyo: true,
        repeat: -1,
        // alpha: { value: 0, duration: 1000, yoyo: true },
      })
      .pause();

    // UNCOMMENT TO DRAW MAPS - DO NOT DELETE
    /*
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
          x: that.gridX,
          y: that.gridY
        })
        this.setFillStyle(0xecc3a0);
        console.log(JSON.stringify(scene.pathDesign))
    });
    */
    //create radial

    this.rectangle.on(
      "pointerover",
      function () {
        if (!that.path) {
          this.rectangle.setStrokeStyle(1, 0xecc3a0);
        }
        this.blinkTween.play();
      },
      this
    );

    this.rectangle.on(
      "pointerout",
      function () {
        if (!that.path) {
          this.blinkTween.pause();
          this.rectangle.setStrokeStyle(1, 0x252945);
        }
      },
      this
    );

    this.rectangle.on(
      "pointerdown",
      function () {
        if (!that.path && !that.tower) {
          if (selector == "none") {
            this.showRadial();
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
        this.tower = new BasicTower(this);
        break;
      case "microwave":
        this.tower = new MicrowaveTower(this);
        break;
      case "stun":
        this.tower = new StunTower(this);
        break;

      default:
        break;
    }
    this.add(this.tower);
    console.log(this.tower);
  }
  showRadial() {
    let background = scene.add
      .circle(
        this.x + this.rectangle.width / 2,
        this.y + this.rectangle.height / 2,
        50,
        0x252945
      )
      .setAlpha(0.75);
    let basic = scene.add.circle(0, 0, 20, 0xffffff);
    let microwave = scene.add.circle(0, 0, 20, 0xff0000);
    let stun = scene.add.circle(0, 0, 20, 0x0000ff);
    let circle = new Phaser.Geom.Circle(
      this.x + this.rectangle.width / 2,
      this.y + this.rectangle.height / 2,
      50
    );
    Phaser.Actions.PlaceOnCircle([basic, microwave, stun], circle);

    background.setInteractive();
    basic.setInteractive();
    microwave.setInteractive();
    stun.setInteractive();
    selector = "basic";
    background.on("pointerdown", function () {
      background.destroy();
      basic.destroy();
      microwave.destroy();
      stun.destroy();
      selector = "none";
    });
  }
}
