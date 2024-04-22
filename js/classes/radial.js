class Radial extends Phaser.GameObjects.Container {
  constructor(x, y, w, h, scene) {
    super(scene, x, y);

    scene.add.existing(this);
    this.background = scene.add
      .circle(w / 2, h / 2, 50, 0x252945)
      .setAlpha(0.75);
    this.basic = scene.add.circle(0, 0, 20, 0xffffff);
    this.microwave = scene.add.circle(0, 0, 20, 0xff0000);
    this.stun = scene.add.circle(0, 0, 20, 0x0000ff);
    this.circle = new Phaser.Geom.Circle(0 + w / 2, 0 + h / 2, 50);
    Phaser.Actions.PlaceOnCircle(
      [this.basic, this.microwave, this.stun],
      this.circle
    );

    this.background.setInteractive();
    this.basic.setInteractive();
    this.microwave.setInteractive();
    this.stun.setInteractive();
    selector = "none";
    this.background.on(
      "pointerdown",
      function () {
        this.hide();
      },
      this
    );
    this.add(this.background);
    this.add(this.basic);
    this.add(this.microwave);
    this.add(this.stun);
    //this.setVisible(false);
    this.setDepth(100);

    this.basic.on(
      "pointerdown",
      function () {
        selector = "basic";
        tile.buildTower();
        this.hide();
      },
      this
    );

    this.microwave.on(
      "pointerdown",
      function () {
        selector = "microwave";
        tile.buildTower();
        this.hide();
      },
      this
    );

    this.stun.on(
      "pointerdown",
      function () {
        selector = "stun";
        tile.buildTower();
        this.hide();
      },
      this
    );

    this.hide();
    console.log(this.visible);
  }

  hide() {
    if (this.visible == true) {
      scene.tweens.add({
        targets: this,
        duration: 100,
        scale: 0,
        alpha: 0,
        onComplete: function () {
          this.setVisible(false);
        }.bind(this),
      });
      selector = "none";
    }
  }

  reveal(x, y) {
    console.log("revealing");
    if (!this.visible) {
      this.setVisible(true);
      scene.tweens.add({
        targets: this,
        duration: 100,
        alpha: 1,
        scale: 1,
      });
      this.setPosition(x, y);
    } else {
      console.log("hiding from reveal");
      this.hide();
    }
  }
}
