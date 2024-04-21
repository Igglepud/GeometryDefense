class SellButton extends Button {
  constructor(tower) {
    super(128,
    128, 60, 30, 'Sell', {
      click: function() {
        tower.sell();
      },
      pointerover: function() {
        scene.ui.header.resroucesTextSubber.setText('')
        scene.ui.header.resroucesTextAdder.setText(' + ' + tower.value)
      },
      pointerout: function() {
        scene.ui.header.resroucesTextSubber.setText('')
        scene.ui.header.resroucesTextAdder.setText('')
      }
  }, false, '14px');
    this.tower = tower;
  }
}