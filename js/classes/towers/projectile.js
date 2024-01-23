class Projectile extends Phaser.GameObjects.Container {
  constructor(x, y, enemy) {
    super(scene, x, y);
    this.image = scene.add.circle(0, 0, 5, 0xAAAAAA)
    scene.physics.add.existing(this)
    this.image.setOrigin(0)
    this.target = enemy
    this.add(this.image)
    scene.add.existing(this)
    scene.bullets.push(this)
    this.uuid = makeid(7)
  }

  tick() {
    scene.physics.moveTo(this, this.target.x - 16, this.target.y - 16, 500);
    let distance = Phaser.Math.Distance.BetweenPoints(this, {x: this.target.x - 16, y: this.target.y - 16});
    if (distance < 22) {
      console.log('aah!')
      let index = scene.bullets.findIndex(function(bullet) {
        return bullet.uuid = this.uuid 
      }.bind(this))
      console.log(index)
      scene.bullets.splice(index, 1);
      this.target.takeDamage(1)
      this.destroy()
    }
  }
}
