class UpgradeButton extends Button {
  constructor(tower) {
    super(
      24,
      132,
      110,
      30,
      "Upgrade",
      {
        click: function () {
          tower.upgrade();
        },
        pointerover: function () {
          if (tower.upgradeCost) {
            scene.ui.header.resourcesTextSubber.setText(
              " -" + tower.upgradeCost
            );
            scene.ui.details.setUpgrades(tower);
          } else {
            scene.ui.header.resourcesTextSubber.setText("");
          }
        },
        pointerout: function () {
          scene.ui.header.resourcesTextSubber.setText("");
          scene.ui.details.clearUpgrades();
        },
      },
      false,
      "14px"
    );
    this.tower = tower;
  }
}
