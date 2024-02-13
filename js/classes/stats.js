class Stats {
  constructor() {
    this.score = 0
    this.money = 100
  }

  updateScore(diff) {
    this.score += diff
    // Update UX here
    scene.ui.updateScore(this.score)
  }

  updateMoney(diff) {
    this.money += diff
    // Update UX here
  }
}
