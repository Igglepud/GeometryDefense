class Panel extends Phaser.GameObjects.Container {
  constructor(x, y, w, h) {
    super(scene, x, y);
    this.draw(w, h)
    this.setScrollFactor(0);
    this.setDepth(DEPTH.display)
    scene.add.existing(this);
    
  }

  draw(w, h) {
    this.width = w;
    this.height = h;
    if (this.BG) {
      this.BG.destroy()
      this.N.destroy()
      this.E.destroy()
      this.S.destroy()
      this.W.destroy()
      this.NW.destroy()
      this.NE.destroy()
      this.SW.destroy()
      this.SE.destroy()
    }
    this.BG = scene.add.rectangle(0, 0, w, h - 4, 0x121423);
    this.BG.setOrigin(0);
    this.BG.setInteractive();
    this.BG.setScrollFactor(0);
    this.add(this.BG);

    this.N = scene.add.tileSprite(0, 0, w, 11, "basicFrame");
    this.N.setOrigin(0);
    this.N.setFrame(1);
    this.add(this.N);

    this.E = scene.add.tileSprite(w, 0, 12, h, "basicFrame");
    this.E.setOrigin(1, 0);
    this.E.setFrame(5);
    this.add(this.E);

    this.S = scene.add.tileSprite(0, h, w, 12, "basicFrame");
    this.S.setOrigin(0, 1);
    this.S.setFrame(7);
    this.add(this.S);

    this.W = scene.add.tileSprite(0, 0, 12, h, "basicFrame");
    this.W.setOrigin(0);
    this.W.setFrame(3);
    this.add(this.W);

    this.NW = scene.add.sprite(0, 0, "basicFrame");
    this.NW.setOrigin(0);
    this.add(this.NW);

    this.NE = scene.add.sprite(w, 0, "basicFrame");
    this.NE.setOrigin(1, 0);
    this.NE.setFrame(2);
    this.add(this.NE);

    this.SW = scene.add.sprite(0, h, "basicFrame");
    this.SW.setOrigin(0, 1);
    this.SW.setFrame(6);
    this.add(this.SW);

    this.SE = scene.add.sprite(w, h, "basicFrame");
    this.SE.setOrigin(1);
    this.SE.setFrame(8);
    this.add(this.SE);

    
    this.sendToBack(this.N)
    this.sendToBack(this.E)
    this.sendToBack(this.S)
    this.sendToBack(this.W)
    this.sendToBack(this.NE)
    this.sendToBack(this.NW)
    this.sendToBack(this.SE)
    this.sendToBack(this.SW)
    this.sendToBack(this.BG)
  }
}
