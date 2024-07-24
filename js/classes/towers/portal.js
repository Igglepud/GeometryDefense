class Portal extends Phaser.GameObjects.Container {
  
  constructor(x, y, radius) {
    super(scene, x, y);
    const that = this;
    this.rangeBubble = scene.add.circle(
      Phaser.Math.Between(-16, 16),
      Phaser.Math.Between(-4, 4),
      radius,
      0x000000
    );
    let circle = new Phaser.Geom.Circle(0, 0, radius);

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

    this.emitter = scene.add.particles(this.x, this.y, "1x1", {
      speed: 200,

      scale: { start: 1, end: 0 },
      blendMode: "ADD",
      lifespan: 500,
      stopAfter: 300,
      frequency: 50,
   
      emitZone: { type: "edge", source: circle, quantity: 0, stepRate: 320 },
      emitCallback: function (particle) {
        // particle.velocityX*=-1;
        // particle.velocityY*=-1;
      },
      
    });
    this.emitter.setDepth(500);
    console.log(this.emitter);
    scene.add.existing(this);
    this.moveTween = scene.tweens.add({
      targets: this.rangeBubble,
      duration: 500,
      scale: 1,
      repeat: 0,
      yoyo: true,
      callbackScope:this,
        onUpdate: function () {

          this.emitter.removeEmitZone(0);
          circle = new Phaser.Geom.Circle(this.rangeBubble.x, this.rangeBubble.y, this.rangeBubble.radius);
          this.emitter.setEmitZone({ type: "edge", source: circle, quantity: 0, stepRate: 32 });


        },

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
