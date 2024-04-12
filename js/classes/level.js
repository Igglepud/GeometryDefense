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
      console.log(JSON.stringify(this.data));
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
    this.wave = this.data.waves.shift();
    if (this.wave && this.wave.length > 0) {
      console.log(JSON.stringify(this.wave));
      this.spawnBatch();
    } else {
      console.log("level done");
    }
  }

  spawnBatch() {
    if (this.wave && this.wave.length > 0) {
      this.batch = this.wave.shift();
      scene.spawnInterval = setInterval(
        function () {
          if (this.batch && this.batch.count > 0) {
            switch (this.batch.type) {
              case "BlueTriangle":
                new Triangle(ENEMY_STATS.triangles.blue);
                break;
              case "RedSquare":
                new Square(ENEMY_STATS.squares.red);
                break;
              case "PurpleSquare":
                new Square(ENEMY_STATS.squares.purple);
                break;
              case "GreenCircle":
                console.log("green circle");
                new Circle(ENEMY_STATS.circles.bigGreen);
                break;
              default:
                console.log("type not added");
                break;
            }
            this.batch.count--;
          } else {
            clearInterval(scene.spawnInterval);
            this.spawnBatch();
          }
        }.bind(this),
        this.batch.cooldown
      );
    } else {
      console.log("wave done, spawn next wave");
      alert("wave done, spawn next wave");
      scene.time.addEvent({
        delay: 5000,
        callback: function () {
          this.spawnWave();
        },
        callbackScope: this,
      });
    }
  }
}
