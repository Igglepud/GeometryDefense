class Explosion extends Phaser.GameObjects.Container {
  constructor(x, y, radius, damage) {
    super(scene, x, y);
    this.rangeBubble = scene.add.circle(0, 0, radius, 0xED2939)
    let circle = new Phaser.Geom.Circle(x, y, radius);
    this.enemies = []
    _.each(
      scene.enemies.getChildren(),
      function (enemy) {
        if (circle.contains(enemy.x, enemy.y)) {
          if (enemy.alive) {
            this.enemies.push(enemy)
          }
        }
      }.bind(this)
    );
    this.rangeBubble.setOrigin(.5)
    this.rangeBubble.setAlpha(.5)
    this.rangeBubble.setScale(0)
    this.rangeBubble.setStrokeStyle(4, 0xFF0000);
    this.add(this.rangeBubble)
    this.setDepth(DEPTH.projectile)
    scene.add.existing(this);
    scene.tweens.add({
      targets: this.rangeBubble,
      duration: 200,
      scale: 1,
      repeat: 0,
      onComplete: function() {
        this.destroy()
      }.bind(this)
    });
    _.each(this.enemies, function(enemy) { 
      enemy.takeDamage(damage)
    });
  }
}
