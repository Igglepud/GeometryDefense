const GAME_WIDTH = 1258;
const GAME_HEIGHT = 714;
const TILE_SIZE = 32;
const TILE_MARGIN = 2;
const MAP_MARGIN = 2;

const DEPTH = {
  buttons: 60,
  display: 55,
  projectile: 50,
  ghost: 45,
  enemy: 30,
  selectedTower: 20,
  tower: 10,
  ground: 0,
  shimmer: -10
};

const GAME = 'geometrydefense';

let scene;
let selector = "none";
let ghost = false;
