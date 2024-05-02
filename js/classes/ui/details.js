class Details extends Panel {
  constructor(ui) {
    super(0, 62 + 484, 204, 172);
    this.ui = ui;
    this.type = "wave";
  }

  setDetails(tower) {
    this.clearDetails();
    this.type = "tower";
    this.tower = tower;
    let level = tower.template.levels[tower.level];
    let nextLevel = tower.template.levels[tower.level + 1];
    this.title = scene.add
      .text(102, 24, tower.template.name + " " + (tower.level + 1), {
        fontSize: "20px",
        fill: "#b4b6c1",
        fontFamily: "font1",
      })
      .setOrigin(0.5);
    this.add(this.title);
    this.damage = scene.add.text(18, 48, "Damage: " + level.damage, {
      fontSize: "14px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.add(this.damage);
    this.range = scene.add.text(18, 68, "Range: " + level.range, {
      fontSize: "14px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.add(this.range);
    this.cooldown = scene.add.text(18, 88, "Rate: " + level.cooldown, {
      fontSize: "14px",
      fill: "#b4b6c1",
      fontFamily: "font1",
    });
    this.add(this.cooldown);
    this.upgrade = new UpgradeButton(tower);
    this.add(this.upgrade);
    this.sell = new SellButton(tower);
    this.add(this.sell);

    this.damageUpgrade = scene.add.text(18 + this.damage.width, 48, "", {
      fontSize: "14px",
      fill: "#157334",
      fontFamily: "font1",
    });
    this.add(this.damageUpgrade);
    this.rangeUpgrade = scene.add.text(18 + this.range.width, 68, "", {
      fontSize: "14px",
      fill: "#157334",
      fontFamily: "font1",
    });
    this.add(this.rangeUpgrade);
    this.cooldownUpgrade = scene.add.text(18 + this.cooldown.width, 88, "", {
      fontSize: "14px",
      fill: "#157334",
      fontFamily: "font1",
    });
    this.add(this.cooldownUpgrade);
  }

  clearDetails() {
    this.tower = null;
    if (this.type === "tower") {
      this.type = "wave";
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
      this.damageUpgrade.destroy();
      this.damageUpgrade = null;
      this.rangeUpgrade.destroy();
      this.rangeUpgrade = null;
      this.cooldownUpgrade.destroy();
      this.cooldownUpgrade = null;
    }
  }

  setUpgrades(tower) {
    let level = tower.template.levels[tower.level];
    let nextLevel = tower.template.levels[tower.level + 1];
    this.damageUpgrade.setText("&nbsp+" + nextLevel.damage - level.damage);
    this.rangeUpgrade.setText(" +" + nextLevel.range - level.range);
    this.cooldownUpgrade.setText(" -" + nextLevel.cooldown - level.cooldown);
  }

  clearUpgrades() { 
    this.damageUpgrade.setText("");
    this.rangeUpgrade.setText("");
    this.cooldownUpgrade.setText("");


  }
}
