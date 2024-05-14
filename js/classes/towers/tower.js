class Tower extends Phaser.GameObjects.Container {
  constructor(tile, template) {
    super(scene, 0, 0);
    this.template = TOWER_STATS[template];
    this.targetType = TARGET.weak;
    this.range = this.template.levels[0].range;
    this.cooldownMax = this.template.levels[0].cooldown;
    this.cost = this.template.levels[0].cost;
    this.cooldown = 0;
    this.size = this.template.levels[0].size;
    this.damage = this.template.levels[0].damage;
    this.upgradeCost = this.template.levels[0].upgradeCost;
    this.value = this.cost / 2;
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
    this.level = 0;
    this.maxLevel = this.template.levels.length - 1;
    this.selected = false;
    scene.towers.add(this);
  }

  cycleTarget() {
    switch (this.targetType) {
      case TARGET.first:
        this.targetType = TARGET.last;
        break;
      case TARGET.last:
        this.targetType = TARGET.strong;
        break;
      case TARGET.strong:
        this.targetType = TARGET.weak;
        break;
      case TARGET.weak:
        this.targetType = TARGET.first;
        break;
      default:
        break;
    }
    scene.ui.details.setDetails(this);
  }

  tick() {
    if (this.cooldown <= 0) {
      let target = this.selectTarget();
      if (target) {
        this.fire(target);
        this.cooldown = this.cooldownMax;
      }
    } else {
      this.cooldown--;
    }
  }

  getTargets() {
    let circle = new Phaser.Geom.Circle(
      this.tile.x + TILE_SIZE / 2,
      this.tile.y + TILE_SIZE / 2,
      this.range
    );
    let targets = [];
    _.each(
      scene.enemies.getChildren(),
      function (enemy) {
        if (circle.contains(enemy.x, enemy.y)) {
          if (enemy.alive) {
            targets.push(enemy)
          }
        }
      }.bind(this)
    );
    return targets;
  }

  selectTarget() {
    let targets = this.getTargets();
    if (targets.length === 0) {
      return;
    } else if (targets.length === 1) {
      return targets[0];
    }
    switch (this.targetType) {
      case TARGET.first:
        return _.maxBy(targets, function (o) { return o.currentMove; }); // target the furthest along the path
      case TARGET.last:
        return _.minBy(targets, function (o) { return o.currentMove; }); // target the closest along the path
      case TARGET.strong:
        return _.maxBy(targets, function (o) { return o.health; }); // target with highest health
      case TARGET.weak:
        return _.minBy(targets, function (o) { return o.health; }); // target with lowest health
      default:
        break;
    }
    return targets[0];
  }

  select() {
    deselectAll();
    this.tile.setDepth(DEPTH.selectedTower);
    this.selected = true;
    scene.ui.details.setDetails(this);
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
    this.rangeBubble.setScale(0);
  }

  sell() {
    scene.stats.updateResources(this.value);
    scene.towers.remove(this);
    this.tile.tower = null;
    this.destroy();
    scene.ui.details.clearDetails();
    scene.ui.header.resourcesTextSubber.setText("");
    scene.ui.header.resourcesTextAdder.setText("");
  }

  upgrade() {
    if (this.level === this.maxLevel) {
      this.upgradeCost = "";
      return;
    }
    scene.stats.updateResources(-this.upgradeCost);

    this.level++;

    this.range = this.template.levels[this.level].range;
    this.cooldownMax = this.template.levels[this.level].cooldown;
    this.upgradeCost = this.template.levels[this.level].upgradeCost;
    if (this.level === this.maxLevel) {
      this.upgradeCost = "";
    }
    scene.ui.header.resourcesTextSubber.setText("-" + this.upgradeCost);
    scene.ui.details.setDetails(this);
  }
}
