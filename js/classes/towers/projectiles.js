class Projectiles {
  constructor() {
    this.projectiles = [];
    for (let i = 0; i < 100; i++) {
      let projectile = new Projectile();
      this.projectiles.push(projectile);
    }
  }

  tick() {
    _.each(this.projectiles, function (p) {
      if (!p.inactive) {
        p.tick();
      }
    });
  }

  getNext() {
    let ret = null;
    _.each(this.projectiles, function (p) {
      if (p.inactive) {
        ret = p;
        return false;
      }
    });
    return ret;
  }
}
