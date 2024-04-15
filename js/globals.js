const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;
const TILE_SIZE = 32;
const TILE_MARGIN = 2;
const MAP_MARGIN = 2;

const DEPTH = {
  ghost: 45,
  enemy: 30,
  selectedTower: 20,
  tower: 10,
  ground: 0,
  projectile: 2000,
};

let scene;
let selector = "none";
let ghost = false;
