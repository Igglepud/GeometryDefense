function resolvePosition(pos = 0) {
  pos = pos + 2
  return pos * (TILE_SIZE + 2) + (TILE_SIZE / 2)
}

function deselectAll() {
  selector = 'none'
  if (scene.towers) {
    _.each(scene.towers, function(tower) {
      if (tower.selected) {
        tower.deselect()
      }
    })
  }
  scene.ui.towers.towerButtons.forEach(function(button) {
    button.deselect()
  })
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}