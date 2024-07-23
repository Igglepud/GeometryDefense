class ScoreItem extends Phaser.GameObjects.Container {
  // static counter = 0;

  constructor(x, y, number, name, score) {
    super(scene, x, y);
    let frame = scene.add.image(0, 0, "highscore");
    frame.setOrigin(0);
    this.add(frame);
    let num = scene.add.text(90, 6, displayNumber(number) + ".", {
      fontFamily: "font1",
      fontSize: "24px",
      color: "#b4b6c1",
    });
    num.setOrigin(1, 0);
    this.add(num);
    this.add(
      scene.add.text(98, 6, name, {
        fontFamily: "font1",
        fontSize: "24px",
        color: "#b4b6c1",
      })
    );
    this.add(
      scene.add.text(380, 6, displayNumber(score), {
        fontFamily: "font1",
        fontSize: "24px",
        color:"#b4b6c1",
      })
    );
  }
}
