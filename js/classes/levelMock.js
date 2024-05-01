class LevelMock {
  constructor() {
    scene.level = this;
    this.data = null;
    this.start = null;
    this.end = null;
    this.autoNext = false;
    this.doneSpawning = false;
    // this.points = [];
    this.wave = 0;
    this.path = new Phaser.Curves.Path();
    this.data = {
      start: { x: 5, y: 1 },
      end: { x:32,y:1 },
      path: [{"x":5,"y":1},{"x":5,"y":2},{"x":5,"y":3},{"x":5,"y":4},{"x":4,"y":4},{"x":3,"y":4},{"x":2,"y":4},{"x":1,"y":4},{"x":1,"y":5},{"x":1,"y":6},{"x":1,"y":7},{"x":1,"y":8},{"x":2,"y":8},{"x":3,"y":8},{"x":3,"y":9},{"x":3,"y":10},{"x":3,"y":11},{"x":4,"y":11},{"x":5,"y":11},{"x":5,"y":12},{"x":5,"y":13},{"x":5,"y":14},{"x":5,"y":15},{"x":4,"y":15},{"x":3,"y":15},{"x":2,"y":15},{"x":2,"y":16},{"x":2,"y":16},{"x":2,"y":17},{"x":1,"y":17},{"x":1,"y":18},{"x":1,"y":19},{"x":2,"y":19},{"x":3,"y":19},{"x":4,"y":19},{"x":5,"y":19},{"x":6,"y":19},{"x":7,"y":19},{"x":8,"y":19},{"x":9,"y":19},{"x":10,"y":19},{"x":11,"y":19},{"x":12,"y":19},{"x":13,"y":19},{"x":14,"y":19},{"x":15,"y":19},{"x":16,"y":19},{"x":17,"y":19},{"x":18,"y":19},{"x":19,"y":19},{"x":20,"y":19},{"x":21,"y":19},{"x":22,"y":19},{"x":23,"y":19},{"x":24,"y":19},{"x":25,"y":19},{"x":26,"y":19},{"x":27,"y":19},{"x":28,"y":19},{"x":29,"y":19},{"x":30,"y":19},{"x":31,"y":19},{"x":32,"y":19},{"x":33,"y":19},{"x":34,"y":19},{"x":35,"y":19},{"x":36,"y":19},{"x":36,"y":18},{"x":36,"y":17},{"x":35,"y":17},{"x":35,"y":16},{"x":35,"y":15},{"x":34,"y":15},{"x":33,"y":15},{"x":32,"y":15},{"x":32,"y":14},{"x":32,"y":13},{"x":32,"y":12},{"x":32,"y":11},{"x":33,"y":11},{"x":34,"y":11},{"x":34,"y":10},{"x":34,"y":9},{"x":34,"y":8},{"x":35,"y":8},{"x":36,"y":8},{"x":36,"y":7},{"x":36,"y":6},{"x":36,"y":5},{"x":36,"y":4},{"x":35,"y":4},{"x":34,"y":4},{"x":33,"y":4},{"x":32,"y":4},{"x":32,"y":3},{"x":32,"y":2},{"x":32,"y":1}],
      waves: [
        [
          {
            type: "GreenCircle",
            count: 10,
            cooldown: 1000,
          },{
            type: "BlueTriangle",
            count: 5,
            cooldown: 1000,
          },
          {
            type: "PurpleSquare",
            count: 5,
            cooldown: 1500,
          },
          {
            type: "RedSquare",
            count: 5,
            cooldown: 1500,
          }  ,
          {
            type: "nothing",
            count: 1,
            cooldown: 25000,
          }  
        ],
      ]
    }
    this.drawMap();
    this.spawnWave()
  }

  drawMap() {
    let that = this;
    this.path.moveTo(
      resolvePosition(this.data.start.x - 2) - 8,
      resolvePosition(this.data.start.y - 2) + 3
    );
    _.each(this.data.path, function (node) {
      scene.grid[node.x][node.y].setPath();
      that.path.lineTo(resolvePosition(node.x - 2) - 8, resolvePosition(node.y - 2) + 3);
    });

    scene.grid[this.data.start.x][
      this.data.start.y
    ].setPath(0x157334);
    scene.grid[this.data.end.x][
      this.data.end.y
    ].setPath(0x73331e);
  }

  spawnWave() {
    this.wave = JSON.parse(JSON.stringify(this.data.waves[0]));
    if (this.wave && this.wave.length > 0) {
      this.spawnBatch();
    }
  }

  spawnBatch() {
    shimmer()
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
                new Triangle(ENEMY_STATS.triangles.blue, resolvePosition(scene.level.data.start.x - 2) - 8, resolvePosition(scene.level.data.start.y - 2) + 3);
                break;
              case "RedSquare":
                new Square(ENEMY_STATS.squares.red, resolvePosition(scene.level.data.start.x - 2) - 8, resolvePosition(scene.level.data.start.y - 2) + 3);
                break;
              case "PurpleSquare":
                new Square(ENEMY_STATS.squares.purple, resolvePosition(scene.level.data.start.x - 2) - 8, resolvePosition(scene.level.data.start.y - 2) + 3);
                break;
              case "GreenCircle":
                new Circle(ENEMY_STATS.circles.bigGreen, resolvePosition(scene.level.data.start.x - 2) - 8, resolvePosition(scene.level.data.start.y - 2) + 3);
                break;
              default:
                // console.log("type not added");
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
      this.spawnWave()
    }
  }
}
