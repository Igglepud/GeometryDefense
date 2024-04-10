const TOWER_STATS = [
  {
    color: 0xe279b4,
    baseRange: 100,
    name: 'Basic',
    type: 'basic',
    levels: [
      {
        cost: 50,
        range: 100,
        damage: 10,
        refresh: 1000,
      },
      {
        cost: 60,
        range: 125,
        damage: 15,
        refresh: 900,
      },
      {
        cost: 70,
        range: 150,
        damage: 20,
        refresh: 800,
      },
    ],
  },
  {
    color: 0xffa878,
    baseRange: 100,
    name: 'Stun',
    type: 'stun',
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 1,
        refresh: 500,
        stun: 250,
      },
      {
        cost: 30,
        range: 125,
        damage: 1,
        refresh: 400,
        stun: 350,
      },
      {
        cost: 40,
        range: 150,
        damage: 1,
        refresh: 250,
        stun: 500,
      },
    ],
  },
  {
    color: 0xfffcc9,
    baseRange: 100,
    name: 'Radio',
    type: 'microwave',
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 2,
        refresh: 200,
      },
      {
        cost: 30,
        range: 125,
        damage: 3,
        refresh: 150,
      },
      {
        cost: 40,
        range: 150,
        damage: 4,
        refresh: 100,
      },
    ],
  },
  {
    color: 0xa7c4e2,
    baseRange: 400,
    name: 'Sniper',
    type: 'sniper',
    levels: [
      {
        cost: 40,
        range: 400,
        damage: 40,
        refresh: 2000,
      },
      {
        cost: 50,
        range: 550,
        damage: 60,
        refresh: 2000,
      },
      {
        cost: 50,
        range: 600,
        damage: 80,
        refresh: 1750,
      },
    ],
  },
];
