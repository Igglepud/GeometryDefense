class Details extends Panel {
  constructor(ui) {
    super(0, 62 + 484, 204, 172);
    this.ui = ui;
    this.type = 'wave'
  }

  setDetails(tower) {
    this.clearDetails();
    this.type = 'tower'
    this.tower = tower;
    let level = tower.template.levels[tower.level]
    this.title = scene.add.text(102, 24, tower.template.name + ' ' + tower.level, { fontSize: '20px', fill: '#b4b6c1', fontFamily: "font1"}).setOrigin(.5);
    this.add(this.title)
    this.damage = scene.add.text(18, 48, 'Damage: ' + level.damage, { fontSize: '14px', fill: '#b4b6c1', fontFamily: "font1"});
    this.add(this.damage)
    this.range = scene.add.text(18, 68, 'Range: ' + level.range, { fontSize: '14px', fill: '#b4b6c1', fontFamily: "font1"});
    this.add(this.range)
    this.cooldown = scene.add.text(18, 88, 'Rate: ' + level.cooldown, { fontSize: '14px', fill: '#b4b6c1', fontFamily: "font1"});
    this.add(this.cooldown)
    this.upgrade = new UpgradeButton(tower)
    this.add(this.upgrade)
    this.sell = new SellButton(tower)
    this.add(this.sell)
  }

  clearDetails() {
    this.tower = null;
    if (this.type === 'tower') {
      this.type = 'wave'
      this.title.destroy();
      this.title = null;
      this.damage.destroy();
      this.damage = null;
      this.range.destroy();
      this.range = null;
      this.cooldown.destroy();
      this.cooldown = null;
      this.upgrade.destroy();
      this.upgrade = null;
      this.sell.destroy();
      this.sell = null;
    }
  }
}
