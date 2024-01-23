function resolvePosition(pos = 0) {
  pos = pos + 2
  return pos * (TILE_SIZE + 2) + 1
}

function deselectAll() {
  if (scene.towers) {
    _.each(scene.towers, function(tower) {
      if (tower.selected) {
        tower.deselect()
      }
    })
  }
}