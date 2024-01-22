class Level {
  constructor(index) {
    scene.level = this;
    this.data = null;
    this.start = null;
    this.end = null;
    // this.points = [];
    this.wave = 0;
    this.path = new Phaser.Curves.Path();
    if (!LEVELS[index]) {
      console.log("ERR: level not found");
    } else {
      this.data = JSON.parse(JSON.stringify(LEVELS[index]));
      this.drawMap();
      this.spawnWave();
    }
  }

  drawMap() {
    let that = this;
    this.path.moveTo(
      resolvePosition(this.data.start.x),
      resolvePosition(this.data.start.y)
    );
    _.each(this.data.path, function (node) {
      // let point = scene.add.rectangle(
      //   resolvePosition(node.x),
      //   resolvePosition(node.y),
      //   TILE_SIZE,
      //   TILE_SIZE,
      //   0x4f5267
      // );
      // point.setOrigin(0);
      // that.points.push(point);

      scene.grid[node.x + MAP_MARGIN][node.y + MAP_MARGIN].setPath()
      that.path.lineTo(resolvePosition(node.x), resolvePosition(node.y));
    });

    scene.grid[this.data.start.x + MAP_MARGIN][this.data.start.y + MAP_MARGIN].setPath(0x157334)
    scene.grid[this.data.end.x + MAP_MARGIN][this.data.end.y + MAP_MARGIN].setPath(0x73331e)
    // this.start = scene.add.rectangle(
    //   resolvePosition(this.data.start.x),
    //   resolvePosition(this.data.start.y),
    //   TILE_SIZE,
    //   TILE_SIZE,
    //   0x157334
    // );
    // this.start.setOrigin(0);
    // this.end = scene.add.rectangle(
    //   resolvePosition(this.data.end.x),
    //   resolvePosition(this.data.end.y),
    //   TILE_SIZE,
    //   TILE_SIZE,
    //   0x73331e
    // );
    // this.end.setOrigin(0);
  }

  spawnWave() {
    console.log("spawning wave");
    let wave = this.data.waves[this.wave];
    // console.log(this.start.x, this.start.y);
    let triangle = new BlueTriangle();
  }
}
