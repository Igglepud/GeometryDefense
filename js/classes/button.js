class Button extends Phaser.GameObjects.Container {
  // static counter = 0;

  constructor(x, y, w, h, title, callback, destroy = false) {
    super(scene, x, y);
    this.width = w;
    this.height = h;

    this.BG = scene.add.rectangle(0, 0, w, h, 0x121423);
    this.BG.setOrigin(0);
    this.add(this.BG);

    this.N = scene.add.tileSprite(0, 0, w, 12, "buttonFrame");
    this.N.setOrigin(0);
    this.N.setFrame(1);
    this.add(this.N);

    this.E = scene.add.tileSprite(w, 0, 12, h, "buttonFrame");
    this.E.setOrigin(1, 0);
    this.E.setFrame(5);
    this.add(this.E);

    this.S = scene.add.tileSprite(0, h, w, 12, "buttonFrame");
    this.S.setOrigin(0, 1);
    this.S.setFrame(7);
    this.add(this.S);

    this.W = scene.add.tileSprite(0, 0, 12, h, "buttonFrame");
    this.W.setOrigin(0);
    this.W.setFrame(3);
    this.add(this.W);

    this.NW = scene.add.sprite(0, 0, "buttonFrame");
    this.NW.setOrigin(0);
    this.add(this.NW);

    this.NE = scene.add.sprite(w, 0, "buttonFrame");
    this.NE.setOrigin(1, 0);
    this.NE.setFrame(2);
    this.add(this.NE);

    this.SW = scene.add.sprite(0, h, "buttonFrame");
    this.SW.setOrigin(0, 1);
    this.SW.setFrame(6);
    this.add(this.SW);

    this.SE = scene.add.sprite(w, h, "buttonFrame");
    this.SE.setOrigin(1);
    this.SE.setFrame(8);
    this.add(this.SE);

    this.title = scene.add.text(w / 2, h / 2, title, {
      fontFamily: "font1",
      fontSize: "24px",
      color: "#b4b6c1",
    });

    this.title.setOrigin(0.5);
    this.add(this.title);
    this.BG.setInteractive();
    this.BG.setScrollFactor(0);
    this.BG.on("pointerover", function () {
      this.setFillStyle(0x121423);
    })
      .on("pointerout", function () {
        this.setFillStyle(0x121423);
      })
      .on("pointerdown", function () {
        callback();
        if (destroy) {
          this.parentContainer.destroy();
        }
      });

    this.setScrollFactor(0);
    this.depth = 200;
    scene.add.existing(this);
  }
}
