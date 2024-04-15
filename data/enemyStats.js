const ENEMY_STATS = {
  triangles: {
    blue: {
      color: 0x0000ff,
      speed: 250,
      health: 100,
      score: 20,
      iterations: 1 / 3,
      damage: 1,
      resistance: {
        standard: 1,
      },
      resources: 2,
    },
  },
  squares: {
    red: {
      color: 0xff0000,
      speed: 1000,
      health: 100,
      score: 25,
      damage: 1,

      iterations: 1 / 4,
      resistance: {
        standard: 1,
      },
      resources: 3,
    },
    purple: {
      color: 0x800080,
      speed: 1000,
      health: 150,
      score: 50,
      damage: 1,

      iterations: 1 / 4,
      resistance: {
        standard: 1,
      },
      resources: 5,
    },
  },
  circles: {
    bigGreen: {
      color: 0x00ff00,
      speed: 200,
      health: 100,
      score: 30,
      radius: 10,
      damage: 1,

      resistance: {
        standard: 1,
      },
      resources: 1,
    },
    smallGreen: {
      color: 0x00ff00,
      speed: 400,
      health: 50,
      score: 10,
      radius: 8,
      damage: 1,

      resistance: {
        standard: 1,
      },
      resources: 1,
    },
    smallestGreen: {
      color: 0x00ff00,
      speed: 600,
      health: 25,
      score: 5,
      radius: 4,
      damage: 1,

      resistance: {
        standard: 1,
      },
      resources: 1,
    },
  },
};
