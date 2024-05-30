class Portal extends Phaser.GameObjects.Container {
  constructor(x, y, radius) {
    super(scene, x, y);

    this.rangeBubble = scene.add.circle(0, 0, radius, 0x000000);
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
    //   this.particles = scene.add.particles(this.x, this.y, "1x1", {
    //       speed: { min: 50, max: 100 },
    //       // angle: { min: 0, max: 360 },
    //       scale: { start: 1, end: 0 },
    //        alpha: { start: 1, end: 0 },
    //       lifespan: 1000,
    //       //blendMode: "ADD",
    //       frequency: 10,
    //       quantity: 10,
    //       maxParticles: 300,
    //       collideLeft:true,
    //       collideRight:true,
    //       collideTop:true,
    //       collideBottom:true,
    //     })

    //  this.particles.addEmitZone({ type: 'edge', source: Phaser.Geom.Circle.GetBounds(circle)});
    // this.particles.setEmitZone(0);
    //   this.particles.setParticleTint(0xffffff).setDepth(DEPTH.enemy-1);
    // this.particles.createGravityWell({
    //     x: this.x,
    //     y: this.y,
    //     power: 4.2,
    //     epsilon: 400,
    //     gravity: 100
    //   });
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
        console.log("portal destroy");
        this.destroy();
      }.bind(this),
    });
    _.each(this.enemies, function (enemy) {
      console.log("teleporting enemy");
      enemy.statusEffect({ effect: "teleport", x: x, y: y });
    });
  }
}
