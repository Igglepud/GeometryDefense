class UI{

    constructor() {
        
        this.score = 0;
      this.newScore = 0;
      this.livestext = scene.add.text(16, 16, 'Lives: 5', { fontSize: '32px', fill: '#fff' });
        this.scoreText = scene.add.text(16, 64, 'Score: 0', { fontSize: '32px', fill: '#fff' });
      this.resourcesText = scene.add.text(16, 112, 'Resources: 100', { fontSize: '32px', fill: '#fff' });
      this.scoreText.postFX.addGlow(0x0000ff, 10)
      this.livestext.postFX.addGlow(0x0000ff, 10)




    }

    updateScore(score = 100) {
        this.newScore = score;
        scene.tweens.add({
          targets: this,
          callbackScope: this,
          score: this.newScore,
          duration: 1000,
          onUpdate: function () {
            this.scoreText.setText("Score: " + Math.floor(this.score));
          },
        });
        this.scoreText.setText("Score: " + Math.floor(this.score));
      }


      updateLives(lives = 5) {
        this.livestext.setText("Lives: " + lives);
        if(lives <= 0){
          alert("Game Over");
          scene.data = null;
          scene.scene.restart();
        }
      }
      updateResources(resources = 1) {
        this.resourcesText.setText("Resources: " + resources);
      }
}