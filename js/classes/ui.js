class UI {
  constructor() {
    this.score = 0;
    this.newScore = 0;
    this.resources = 0;
    this.newResources = 0;
    this.header = new Header(this);
    this.towers = new Towers(this);
    this.details = new Details();
    this.doubleSpeedButton = new DoubleSpeedButton();
    this.startButton = new StartButton();
  }

  updateScore(score = 100) {
    this.newScore = score;
    scene.tweens.add({
      targets: this,
      callbackScope: this,
      score: this.newScore,
      duration: 100,
      onUpdate: function () {
        this.header.scoreText.setText("Score: " + Math.floor(this.score));
      },
    });
    this.header.scoreText.setText("Score: " + Math.floor(this.score));
  }

  updateLives(lives = 5) {
    this.header.livesText.setText("Lives: " + lives);
    if (lives <= 0) {
      if (!localStorage.getItem("scores")) {
        let scores = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100];
        let pushes = [];
        for (let i = 0; i < 10; i++) {
          let push = {
            name: animals[Phaser.Math.Between(0, animals.length - 1)],
            score: scores[i],
          };
          pushes.push(push);
        }
        localStorage.setItem("scores", JSON.stringify(pushes));
      }
      let scores = JSON.parse(localStorage.getItem("scores"));
      alert('HIGH SCORES\n\n1. ' + scores[0].name + ': ' + scores[0].score + '\n2. ' + scores[1].name + ': ' + scores[1].score + '\n3. ' + scores[2].name + ': ' + scores[2].score + '\n4. ' + scores[3].name + ': ' + scores[3].score + '\n5. ' + scores[4].name + ': ' + scores[4].score + '\n6. ' + scores[5].name + ': ' + scores[5].score + '\n7. ' + scores[6].name + ': ' + scores[6].score + '\n8. ' + scores[7].name + ': ' + scores[7].score + '\n9. ' + scores[8].name + ': ' + scores[8].score + '\n10. ' + scores[9].name + ': ' + scores[9].score);
      scene.data = null;
      scene.scene.restart();
    }
  }
  updateResources(resources = 1) {
    this.newResources = resources;
    scene.tweens.add({
      targets: this,
      callbackScope: this,
      resources: this.newResources,
      duration: 100,
      onUpdate: function () {
        this.header.resourcesText.setText(
          "Resources: " + Math.floor(this.resources)
        );
        this.header.resourcesTextSubber.x =
          16 + this.header.resourcesText.width;
        this.header.resourcesTextAdder.x = 16 + this.header.resourcesText.width;
      },
    });

    this.header.resourcesText.setText("Resources: " + resources);
  }
}
