class Projectile extends Phaser.GameObjects.Container {
  constructor() {
    super(scene, -10, -10);
    this.image = scene.add.circle(0, 0, 5, 0xAAAAAA)
    scene.physics.add.existing(this)
    this.image.setOrigin(0)
    this.add(this.image)
    scene.add.existing(this)

    this.target = null
    this.visible = false
    this.inactive = true
  }

  spawn(x, y, enemy, damage) {
    this.x = x
    this.y = y
    this.target = enemy
    this.damage = damage
    this.visible = true
    this.inactive = false
  }

  despawn() {
    this.x = -10
    this.y = -10
    this.target = null
    this.visible = false
    this.inactive = true
  }

  tick() {
    scene.physics.moveTo(this, this.target.x - 16, this.target.y - 16, 800);
    let distance = Phaser.Math.Distance.BetweenPoints(this, {x: this.target.x - 16, y: this.target.y - 16});
    if (distance < 22) {
      this.target.takeDamage(this.damage)
      this.despawn()
    }
  }
}
