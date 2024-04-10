class Towers extends Panel {
  constructor(ui) {
    super(0, 62, 204, 492);
    this.ui = ui;
    this.add(scene.add.text(24, 16, 'Towers', { fontSize: '28px', fill: '#b4b6c1', fontFamily: "font1"}));

    this.towerButtons = []
    let counter = 0
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        let towerButton = new TowerButton(counter, i * 90 + 50, 24 + j * 100 + 80);
        this.add(towerButton);
        this.towerButtons.push(towerButton);
        counter++;
      }
    }
  }
}
