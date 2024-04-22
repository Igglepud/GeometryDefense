class Tower extends Phaser.GameObjects.Container {
  constructor(tile, template) {
    super(scene, 0, 0);
    this.template = TOWER_STATS[template];
    this.range = this.template.levels[0].range;
    this.cooldownMax = this.template.levels[0].cooldown;
    this.cost = this.template.levels[0].cost;
    this.rangeBubble = scene.add.circle(
      TILE_SIZE / 2,
      TILE_SIZE / 2,
      this.range,
      0xffffff
    );
    this.turret = scene.add.circle(
      4,
      4,
      TILE_SIZE / 2 - 4,
      this.template.color
    );
    this.turret.setOrigin(0);
    this.add(this.turret);
    this.sendToBack(this.turret);

    this.rangeBubble.setOrigin(0.5);
    this.rangeBubble.setAlpha(0.2);
    this.rangeBubble.setScale(0);
    this.rangeBubble.setStrokeStyle(4, 0xefc53f);
    this.add(this.rangeBubble);

    this.tile = tile;
    this.level = 1;
    this.cooldown = 0;
    this.selected = false;
    scene.towers.push(this);
    //bring up radial menu
    this.turret.setInteractive();
    this.turret.on(
      "pointerdown",
      function () {
        let pos = this.turret.getWorldTransformMatrix();
        scene.radial.reveal(
          pos.tx - this.turret.radius,
          pos.ty - this.turret.radius
        );
      },
      this
    );
  }

  tick() {
    if (this.cooldown === 0) {
      this.cooldown = this.cooldownMax;
      this.fire();
    }
    this.cooldown--;
  }

  select() {
    deselectAll();
    this.tile.setDepth(DEPTH.selectedTower);
    this.selected = true;
    scene.tweens.add({
      targets: this.rangeBubble,
      duration: 100,
      scale: 1,
      repeat: 0,
    });
  }

  deselect() {
    this.tile.setDepth(DEPTH.tower);
    this.selected = false;
    scene.tweens.add({
      targets: this.rangeBubble,
      duration: 100,
      scale: 0,
      repeat: 0,
    });
  }
}
