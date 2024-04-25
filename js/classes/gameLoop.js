class GameLoop {
  constructor() {
    this.heartbeat = 0;
    this.loop = scene.time.addEvent({
      callback: this.tick,
      callbackScope: this,
      repeat: -1,
      delay: 50,
    });

    // 20 ticks a second
    this.paused = false;
  }

  tick() {
    if (!document.hidden) {
      _.each(scene.projectiles.getChildren(), function (projectile) { 
        if (projectile) {
          projectile.tick() 
        }
      });
      this.heartbeat++;
      _.each(scene.towers.getChildren(), function (tower) {
        tower.tick();
      });
    }
  }
}
