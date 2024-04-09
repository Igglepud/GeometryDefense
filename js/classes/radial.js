class Radial {
  constructor(x, y, width, height,tile) {
    this.container = scene.add.container(0, 0);

    this.background = scene.add
      .circle(width / 2, height / 2, 50, 0x252945)
      .setAlpha(0.75);
    this.basic = scene.add.circle(0, 0, 20, 0xffffff);
    this.microwave = scene.add.circle(0, 0, 20, 0xff0000);
    this.stun = scene.add.circle(0, 0, 20, 0x0000ff);
    this.circle = new Phaser.Geom.Circle(
      0 + width / 2,
      0 + height / 2,
      50
    );
    Phaser.Actions.PlaceOnCircle(
      [this.basic, this.microwave, this.stun],
      this.circle
    );

    this.background.setInteractive();
    this.basic.setInteractive();
    this.microwave.setInteractive();
    this.stun.setInteractive();
    selector = "none";
    this.background.on("pointerdown", function () {
      this.hide();
    },this);
      this.container.add(this.background);
      this.container.add(this.basic);
      this.container.add(this.microwave);
      this.container.add(this.stun);
      this.container.setVisible(false);
      this.container.setDepth(100);
      
    this.container.setPosition(x, y);

    this.basic.on("pointerdown", function () {
      selector = "basic";
      tile.buildTower();
      this.hide();

    }, this);
    
    this.microwave.on("pointerdown", function () {
      selector = "microwave";
      tile.buildTower();
      this.hide();

    }, this);

    this.stun.on("pointerdown", function () {
      selector = "stun";
      tile.buildTower();
      this.hide();

    }, this);




  }

  hide() {
    if (this.container.visible == true) {
      scene.tweens.add({
        targets: this.container,
        duration: 100,
        scale: 0,
        alpha: 0,
        onComplete: function () {
          this.container.setVisible(false);
        }.bind(this),
      });
      selector = "none";
    }
  }

  reveal() {
    _.each(scene.flatGrid, function (tile) {
      tile.radial.hide();
    });
    this.container.setVisible(true);
    scene.tweens.add({
      targets: this.container,
      duration: 100,
      alpha: 1,
      scale: 1
    });
  }
}
