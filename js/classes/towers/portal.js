class Portal extends Phaser.GameObjects.Container {
  constructor(x, y, radius) {
    super(scene, x, y);
    this.rangeBubble = scene.add.circle(
      Phaser.Math.Between(-16, 16),
      Phaser.Math.Between(-4, 4),
      radius,
      0x000000
    );
    let circle = new Phaser.Geom.Circle(x, y, radius);

    this.enemies = [];
    _.each(
      scene.enemies.getChildren(),
      function (enemy) {
        if (circle.contains(enemy.x, enemy.y)) {
          if (enemy.alive) {
            this.enemies.push(enemy);
          }
        }
      }.bind(this)
    );

    this.rangeBubble.setOrigin(0.5);
    this.rangeBubble.setAlpha(1);
    this.rangeBubble.setScale(0);
    this.rangeBubble.setStrokeStyle(4, 0x000000).setFillStyle(0x000000, 1);
    this.add(this.rangeBubble);

    scene.add.existing(this);
    this.moveTween = scene.tweens.add({
      targets: this.rangeBubble,
      duration: 500,
      scale: 1,
      repeat: 0,
      yoyo: true,
      onComplete: function () {
        this.destroy();
      }.bind(this),
    });
    _.each(
      this.enemies,
      function (enemy) {
        enemy.statusEffect({
          effect: "teleport",
          x: this.rangeBubble.getWorldTransformMatrix().tx,
          y: this.rangeBubble.getWorldTransformMatrix().ty,
        });
      }.bind(this)
    );
  }
}
