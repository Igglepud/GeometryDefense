class CustomSoundManager {
  constructor() {
    this.emitter = new Phaser.Events.EventEmitter();
    this.loopCounter = 0;
    const emitter = this.emitter;
    const sound = scene.sound;
    this.loop1 = sound.add("loop1");
    this.loop2 = sound.add("loop2");
    this.loop3 = sound.add("loop3");
    this.title = sound.add("title");

    emitter.on(
      "title",
      function () {
        this.title.play({ volume: 0.5, loop: true });
      },
      this
    );

    emitter.on(
      "gameStart",
      function () {
        sound.stopAll();
        this.loop1.play({ volume: 0.5, loop: true });
      },
      this
    );

    emitter.on(
      "start",
      function () {
        sound.stopAll();

        //wait for current loop to end and then play loop2

        this.loopCounter = 0;
        this.loop2.play({ volume: 0.5 });
      },
      this
    );
    this.loop2.on(
      "complete",
      function () {
        console.log("loop2 complete");
        this.loopCounter++;
        console.log(this.loopCounter);
        if (this.loopCounter < 4) {
          console.log("looping 2 again");
          this.loop2.play({ volume: 0.5 });
        } else {
          console.log("resetting counter and looping 3");
          this.loopCounter = 0;
          this.loop3.play({ volume: 0.5 });
        }
      },
      this
    );

    this.loop3.on(
      "complete",
      function () {
        this.loopCounter = 2;
        this.loop2.play({ volume: 0.5 });
      },
      this
    );

    emitter.on(
      "wavecomplete",
      function () {
        sound.stopAll();
        this.loop1.play({ volume: 0.5, loop: true });
      },
      this
    );
  }
}
