class BasicTower extends Tower {
  constructor(tile) {
    super(tile, 0);
  }

  fire(target) {
    new Bullet(
      this.tile.x + TILE_SIZE / 2,
      this.tile.y + TILE_SIZE / 2,
      target,
      this.template.levels[this.level].damage
    );
  }
}
