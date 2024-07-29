class ScoreTable extends Panel {
	constructor(x = 0, y = 0, w = 200, h = 200,  ) {
		super(x, y, w, h);
		scoreSubmitScene.add.existing(this);
    $('#user').val(animal);
		this.scoreText = scoreSubmitScene.add.text(w / 2, h / 2, 'ENTER YOUR NAME', {
			fontSize: '32px',
			fill: '#fff',
			fontFamily: "font1",
		});
		this.scoreText.setOrigin(0.5);
		this.add(this.scoreText);
		this.button = new Button(w/2-75, h/2+75 , 150, 75, "Submit", {
			click: () => {alert()
        this.submitScore({
          name: $('#user').val(),
          score: scoreSubmitScene.userScore,
          level: scoreSubmitScene.id
        });
			}
		});
		this.add(this.button)
	}
	draw(w, h) {
		this.width = w;
		this.height = h;
		if (this.BG) {
			this.BG.destroy();
			this.N.destroy();
			this.E.destroy();
			this.S.destroy();
			this.W.destroy();
			this.NW.destroy();
			this.NE.destroy();
			this.SW.destroy();
			this.SE.destroy();
		}
		this.BG = scene.add.rectangle(0, 0, w, h - 4, 0x121423);
		this.BG.setOrigin(0);
		this.BG.setInteractive();
		this.BG.setScrollFactor(0);
		this.add(this.BG);
		this.N = scene.add.tileSprite(0, 0, w, 11, "basicFrame");
		this.N.setOrigin(0);
		this.N.setFrame(1);
		this.add(this.N);
		this.E = scene.add.tileSprite(w, 0, 12, h, "basicFrame");
		this.E.setOrigin(1, 0);
		this.E.setFrame(5);
		this.add(this.E);
		this.S = scene.add.tileSprite(0, h, w, 12, "basicFrame");
		this.S.setOrigin(0, 1);
		this.S.setFrame(7);
		this.add(this.S);
		this.W = scene.add.tileSprite(0, 0, 12, h, "basicFrame");
		this.W.setOrigin(0);
		this.W.setFrame(3);
		this.add(this.W);
		this.NW = scene.add.sprite(0, 0, "basicFrame");
		this.NW.setOrigin(0);
		this.add(this.NW);
		this.NE = scene.add.sprite(w, 0, "basicFrame");
		this.NE.setOrigin(1, 0);
		this.NE.setFrame(2);
		this.add(this.NE);
		this.SW = scene.add.sprite(0, h, "basicFrame");
		this.SW.setOrigin(0, 1);
		this.SW.setFrame(6);
		this.add(this.SW);
		this.SE = scene.add.sprite(w, h, "basicFrame");
		this.SE.setOrigin(1);
		this.SE.setFrame(8);
		this.add(this.SE);
		this.sendToBack(this.N);
		this.sendToBack(this.E);
		this.sendToBack(this.S);
		this.sendToBack(this.W);
		this.sendToBack(this.NE);
		this.sendToBack(this.NW);
		this.sendToBack(this.SE);
		this.sendToBack(this.SW);
		this.sendToBack(this.BG);
		this.bringToTop(this.button);
		this.depth = 900;
		this.setPosition(395, 200);
		console.log(this)
		console.log(this.button)
	}

  submitScore(submission) {
    submission = btoa(JSON.stringify(submission));
    let that = this
    console.log(submission);
    $.ajax({
      type: "POST",
      url: "https://us-dev.nightscapes.io/geometry/score.php",
      data: { data: submission },
      dataType: "json",
      success: function (res) {
        that.button.destroy();
        that.scoreText.destroy();
        $('#user').hide();
        _.each(res.scores, function (score, i) {
          that.add(
            new ScoreItem(25, 20 + i * 30, i + 1, score.name, score.score)
          );
        });
        if (res.position) {
          that.add(
            new ScoreItem(25, 20 + 10 * 30, res.position, res.name, res.score)
          );
        }
      },
    });
  }

	displayScores(scores) {
		this.button.destroy();
		this.draw(this.width - 100, this.height + 100);
		this.scoreText.setText("SCORES\n" + "\n" + scores[9].name + ": " + scores[9].score + "\n" + scores[8].name + ": " + scores[8].score + "\n" + scores[7].name + ": " + scores[7].score + "\n" + scores[6].name + ": " + scores[6].score + "\n" + scores[5].name + ": " + scores[5].score + "\n" + scores[4].name + ": " + scores[4].score + "\n" + scores[3].name + ": " + scores[3].score + "\n" + scores[2].name + ": " + scores[2].score + "\n" + scores[1].name + ": " + scores[1].score + "\n" + scores[0].name + ": " + scores[0].score, {
			fontSize: '25px',
			fill: '#fff'
		});
		this.scoreText.setPosition(this.scoreText.x, this.scoreText.y + 50);
	}
}