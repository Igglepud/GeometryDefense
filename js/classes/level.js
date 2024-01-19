class Level {
  constructor(index) {
    this.data = null;
    this.start = null;
    this.end = null;
    if (!LEVELS[index]) {
      console.log('ERR: level not found')
    } else {
      this.data = JSON.parse(JSON.stringify(LEVELS[index]))
      this.drawMap()
    }
  }

  drawMap() {
    this.start = scene.add.rectangle(200, 200, 200, 200, 0xFF00FF);
  }
}
