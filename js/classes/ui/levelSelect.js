class LevelSelect extends Button {
  constructor(x, y, level, locked = false) {
    super(x, y, 240, 224, "", {
      click: function () {
        scene.scene.start("gameScene");
      },
    });
    let diff = "Easy";
    if (level > 4) {
      diff = "Hard";
    } else if (level > 2) {
      diff = "Normal";
    }
    this.level = level;
    this.image = scene.add.image(6, 40, "level" + level).setOrigin(0);
    this.add(
      scene.add
        .text(120, 20, diff, {
          fontSize: "20px",
          fill: "#b4b6c1",
          fontFamily: "font1",
        })
        .setOrigin(0.5)
    );
    this.add(
      scene.add.text(12, 195, "Score: 0", {
        fontSize: "16px",
        fill: "#b4b6c1",
        fontFamily: "font1",
      })
    );
    this.add(this.image);
    if (locked) {
      this.add(
        scene.add.rectangle(120, 112, 240, 224, 0x000000, 0.5).setOrigin(0.5)
      );
      this.add(
        scene.add
          .text(120, 120, "Coming Soon!", {
            fontSize: "20px",
            fill: "#b4b6c1",
            fontFamily: "font1",
          })
          .setOrigin(0.5)
          .setAngle(-30)
      );
      this.BG.removeInteractive();
    }
  }
}
