class UI{

    constructor() {
        
        this.score = 0;
        this.newScore = 0;
        this.scoreText = scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });

        this.scoreText.postFX.addGlow(0x0000ff, 10)




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


}