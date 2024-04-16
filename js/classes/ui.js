class UI {
  constructor() {
    this.score = 0;
    this.newScore = 0;
    this.resources=0;
    this.newResources=0;
    this.header = new Header(this);
    this.towers = new Towers(this);
    this.StartButton = new StartButton();
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

  updateLives(lives = 500) {
    this.header.livesText.setText("Lives: " + lives);
    if (lives <= 0) {
      alert("Game Over");
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
        this.header.resourcesText.setText("Resources: " + Math.floor(this.resources));
      },
    });

    this.header.resourcesText.setText("Resources: " + resources);
  }
}
