class UpgradeButton extends Button {
  constructor(tower) {
    super(14,
    128, 110, 30, 'Upgrade', {click: function() {
      console.log("Upgrade");
    }}, false, '14px');
    this.tower = tower;
  }
}