class PriorityButton extends Button {
  constructor(tower) {
    super(
      24,
      166,
      174,
      30,
      "Sell",
      {
        click: function () {
          tower.cycleTarget();
          this.title.setText(Object.keys(TARGET)[tower.targetType]);
        }
      },
      false,
      "14px"
    );
    this.tower = tower;
    this.title.setText(Object.keys(TARGET)[this.tower.targetType]);
  }
}
