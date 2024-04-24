class UpgradeButton extends Button {
  constructor(tower) {
    super(14,
      128, 110, 30, 'Upgrade', {
        click: function () {
          tower.upgrade();
      console.log("Upgrade");
        },
        pointerover: function () {
          scene.ui.header.resourcesTextSubber.setText(' -' + tower.upgradeCost);
        },
        pointerout: function () {
          scene.ui.header.resourcesTextSubber.setText('');
        }
    
    
    
    }, false, '14px');
    this.tower = tower;
    

  }
}