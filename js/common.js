function resolvePosition(pos = 0) {
  pos = pos + 2;
  return pos * (TILE_SIZE + 2) + TILE_SIZE / 2;
}

function deselectAll() {
  selector = "none";
  if (scene.towers) {
    _.each(scene.towers.getChildren(), function (tower) {
      if (tower.selected) {
        tower.deselect();
      }
    });
  }
  scene.ui.towers.towerButtons.forEach(function (button) {
    button.deselect();
  });
}

function shimmer() {
  let shimmer = scene.add
    .image(0, 500, "gradient")
    .setOrigin(0.5)
    .setRotation(0.125 * Math.PI)
    .setDepth(DEPTH.shimmer);

  scene.tweens.add({
    targets: shimmer,
    duration: 1300,
    x: 1700,
    onComplete: function () {
      shimmer.destroy();
    },
  });
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
