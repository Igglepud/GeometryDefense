class Stats {
  constructor() {
    this.score = 0;
    this.money = 100;
    this.lives = 500;
    this.resources = 0;
  }

  updateScore(diff) {
    this.score += diff;
    // Update UX here
    scene.ui.updateScore(this.score);
  }

  updateMoney(diff) {
    this.money += diff;
    // Update UX here
  }

  updateLives(diff) {
    this.lives -= diff;
    scene.ui.updateLives(this.lives);
    // Update UX here
  }
  updateResources(diff) {
    this.resources += diff;
    // Update UX here
    scene.ui.updateResources(this.resources);
  }
}
