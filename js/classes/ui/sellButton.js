class SellButton extends Button {
  constructor(tower) {
    super(
      138,
      132,
      60,
      30,
      "Sell",
      {
        click: function () {
          tower.sell();
        },
        pointerover: function () {
          scene.ui.header.resourcesTextSubber.setText("");
          scene.ui.header.resourcesTextAdder.setText(" + " + tower.value);
        },
        pointerout: function () {
          scene.ui.header.resourcesTextSubber.setText("");
          scene.ui.header.resourcesTextAdder.setText("");
        },
      },
      false,
      "14px"
    );
    this.tower = tower;
  }
}
