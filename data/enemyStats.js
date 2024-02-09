const ENEMY_STATS = {
  triangles: {
    blue: {
      color: 0x0000ff,
      speed: 250,
      health: 100,
      score: 20,
      money: 5,
      iterations: 1 / 3,
      resistance: {
        standard: 1,
      }
    },
  },
  squares: {
    red: {
      color: 0xff0000,
      speed: 1000,
      health: 100,
      score: 25,
      money: 100,
      iterations: 1 / 4,
      resistance: {
        standard: 1,

      }
    },
    purple: {
      color: 0x800080,
      speed: 1000,
      health: 150,
      score: 50,
      money: 120,
      iterations: 1 / 4,
      resistance: {
        standard: 1,

      }
    },

  },
  circles: {
    bigGreen: {
      color: 0x00ff00,
      speed: 200,
      health: 100,
      score: 30,
      money: 10,
      radius:16,
      resistance: {
        standard: 1,
      }
    },
    smallGreen: {
      color: 0x00ff00,
      speed: 400,
      health: 50,
      score: 10,
      money: 5,
      radius:8,
      resistance: {
        standard: 1,
      }
    },
    smallestGreen: {
      color: 0x00ff00,
      speed: 600,
      health: 25,
      score: 5,
      money: 3,
      radius:4,
      resistance: {
        standard: 1,
      }
    },
  },
};
