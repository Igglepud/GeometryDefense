class UI {
  constructor() {
    this.score = 0;
    this.newScore = 0;
    this.header = new Header(this);
    this.towers = new Towers(this);
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
    this.header.resourcesText.setText("Resources: " + resources);
  }
}
