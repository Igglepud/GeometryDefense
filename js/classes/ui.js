class UI {
  constructor() {
    this.score = 0;
    this.newScore = 0;
    this.resources = 0;
    this.newResources = 0;
    this.gameOver=false;
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
      if(!this.gameOver){
      this.gameOver=true;
        this.saveScores();

      scene.data = null;
      //scene.scene.restart();
    }}
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
     this.oldScores = JSON.parse(localStorage.getItem("scores"));
     this.userScore = this.score;
    this.newScores = this.oldScores;
    scene.scene.launch("scoreScene", {userScore:this.userScore, levelID: scene.level.id} );
    scene.scene.pause('gameScene');
    
  }
}
