function resolvePosition(pos = 0) {
  pos = pos + 2;
  return (pos * (TILE_SIZE + 2) + TILE_SIZE / 2)+4;
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

  scene.ui.details.clearDetails();

}

function shimmer() {
  let shimmer = scene.add
    .image(-500, 500, "gradient")
    .setRotation(0.125 * Math.PI)
    .setDepth(DEPTH.shimmer);

  scene.tweens.add({
    targets: shimmer,
    duration: 1700,
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
