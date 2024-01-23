class GameLoop {
  constructor() {
    this.heartbeat = 0
    this.loop = setInterval(this.tick.bind(this), 50) // 20 ticks a second
    this.paused = false
  }

  tick() {
    if (!document.hidden) {
      _.each(scene.bullets, function (bullet) {
        bullet.tick();
      });  
      this.heartbeat++;
      if (this.heartbeat % 5 === 0) {
        _.each(scene.towers, function (tower) {
          tower.tick();
        });
      }
    }
  }
}
