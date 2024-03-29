class GameLoop {
  constructor() {
    this.heartbeat = 0
    this.loop = setInterval(this.tick.bind(this), 50) // 20 ticks a second
    this.paused = false
  }

  tick() {
    if (!document.hidden) {
      scene.projectiles.tick() 
      this.heartbeat++;
      _.each(scene.towers, function (tower) {
        tower.tick();
      });
    }
  }
}
