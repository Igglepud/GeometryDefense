class Level {
  constructor(index) {
    scene.level = this;
    this.data = null;
    this.start = null;
    this.end = null;
    this.autoNext = false;
    this.doneSpawning = false;
    this.wave = 0;
    this.currentWave = 1;
    this.totalWaves = 0;
    this.path = new Phaser.Curves.Path();
    if (!LEVELS[index]) {
      console.log("ERR: level not found");
    } else {
      this.data = JSON.parse(JSON.stringify(LEVELS[index]));
      this.data.waves = JSON.parse(JSON.stringify(WAVES));
      this.totalWaves = this.data.waves.length;
      this.start = this.data.start;

      this.drawMap();
    }
  }

  drawMap() {
    let that = this;
    this.path.moveTo(
      resolvePosition(this.data.start.x),
      resolvePosition(this.data.start.y)
    );
    _.each(this.data.path, function (node) {
      scene.grid[node.x + MAP_MARGIN][node.y + MAP_MARGIN].setPath();
      that.path.lineTo(resolvePosition(node.x), resolvePosition(node.y));
    });

    scene.grid[this.data.start.x + MAP_MARGIN][
      this.data.start.y + MAP_MARGIN
    ].setPath(0x157334);
    scene.grid[this.data.end.x + MAP_MARGIN][
      this.data.end.y + MAP_MARGIN
    ].setPath(0x73331e);
  }

  spawnWave() {
    shimmer();
    this.doneSpawning = false;
    this.wave = this.data.waves.shift();
    if (this.wave && this.wave.length > 0) {
      this.spawnBatch();
    }
  }

  spawnBatch() {
    if (this.wave && this.wave.length > 0) {
      this.batch = this.wave.shift();
      scene.spawnInterval = scene.time.addEvent({
        callbackScope: this,
        delay: this.batch.cooldown,
        repeat: -1,
        callback: function () {
          if (this.batch && this.batch.count > 0) {
            switch (this.batch.type) {
              case "BlueTriangle":
                new Triangle(
                  ENEMY_STATS.triangles.blue,
                  resolvePosition(scene.level.data.start.x) + 16,
                  resolvePosition(scene.level.data.start.y) + 2
                );
                break;
              case "RedSquare":
                new Square(
                  ENEMY_STATS.squares.red,
                  resolvePosition(scene.level.data.start.x) + 16,
                  resolvePosition(scene.level.data.start.y) + 2
                );
                break;
              case "PurpleSquare":
                new Square(
                  ENEMY_STATS.squares.purple,
                  resolvePosition(scene.level.data.start.x) + 16,
                  resolvePosition(scene.level.data.start.y) + 2
                );
                break;
              case "GreenCircle":
                new Circle(
                  ENEMY_STATS.circles.bigGreen,
                  resolvePosition(scene.level.data.start.x) + 16,
                  resolvePosition(scene.level.data.start.y) + 2
                );
                break;
              default:
                console.log("type not added");
                break;
            }
            this.batch.count--;
          } else {
            scene.spawnInterval.destroy();
            this.spawnBatch();
          }
        },
      });
    } else {
      this.doneSpawning = true;
    }
  }
}
