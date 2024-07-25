class scoreScene extends Phaser.Scene {
  constructor() {
    super({ key: 'scoreScene' });
  }

init(data){
scene=this;
this.scores=data;
    
}

  create() {
 

    $('#highscoreContainer').show();
    let scoreTable =    new ScoreTable(0, 0, GAME_WIDTH/2, GAME_HEIGHT/2, this.scores);

  }
}