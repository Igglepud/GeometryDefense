class scoreScene extends Phaser.Scene {
  constructor() {
    super({ key: 'scoreScene' });
  }

init(data){
scoreSubmitScene = this;
this.userScore = data.userScore;
this.levelID = data.levelID;
    
}

  create() {
 

    $('#highscoreContainer').show();
    let scoreTable =    new ScoreTable(0, 0, GAME_WIDTH/2, GAME_HEIGHT/2, );

  }
}