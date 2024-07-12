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
      this.saveScores();

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

  saveScores() {
    if (!localStorage.getItem("scores")) {
      let scores = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
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
    let oldScores = JSON.parse(localStorage.getItem("scores"));
    let userScore = this.score;
    let newScores = oldScores;
   if(userScore > oldScores[0].score) {
    let userName = prompt("Enter your name");

    for (let i = 0; i < 10; i++) {
     
      if (userScore >= oldScores[i].score) {
        if (oldScores[i - 1]) {
          newScores[i - 1] = oldScores[i];
          newScores[i] = { name: userName, score: userScore };
        }
        if (oldScores[i + 1] && userScore <= oldScores[i].score) {

          newScores[i] = { name: userName, score: userScore };
        } else if (!oldScores[i + 1]) {

          newScores[i] = { name: userName, score: userScore };
        } 
      }
    }}
    console.log(newScores);
  }
}
