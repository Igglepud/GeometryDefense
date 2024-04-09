const TOWER_STATS = {
  basicTower: {
    level1: {
      cost: 20,
      range: 100,
      damage: 10,
      refresh: 500,
    },
    level2: {
      cost: 30,
      range: 150,
      damage: 15,
      refresh: 400,
    },
    level3: {
      cost: 40,
      range: 200,
      damage: 20,
      refresh: 250,
    },
  },
  stunTower: {
    level1: {
      cost: 20,
      range: 100,
      damage: 1,
      refresh: 500,
      stun: 250,
    },
    level2: {
      cost: 30,
      range: 125,
      damage: 1,
      refresh: 400,
      stun: 350,
    },
    level3: {
      cost: 40,
      range: 150,
      damage: 1,
      refresh: 250,
      stun: 500,
    },
  },
  microwaveTower: {
    level1: {
      cost: 20,
      range: 100,
      damage: 2,
      refresh: 200,
    },
    level2: {
      cost: 30,
      range: 125,
      damage: 3,
      refresh: 150,
    },
    level3: {
      cost: 40,
      range: 150,
      damage: 4,
      refresh: 100,
    },
  },

  railTurret: {
    level1: {
      cost: 40,
      range: 400,
      damage: 40,
      refresh: 2000,
    },
    level2: {
      cost: 50,
      range: 550,
      damage: 60,
      refresh: 2000,
    },
    level3: {
      cost: 50,
      range: 600,
      damage: 80,
      refresh: 1750,
    },
  },
  explosiveTurret: {
    level1: {
      cost: 50,
      range: 200,
      damage: 50,
      refresh: 2000,
      splash: 150,
    },
    level2: {
      cost: 60,
      range: 225,
      damage: 75,
      refresh: 1875,
      splash: 175,
    },
    level3: {
      cost: 70,
      range: 250,
      damage: 100,
      refresh: 1750,
      splash: 200,
    },
  },
};
