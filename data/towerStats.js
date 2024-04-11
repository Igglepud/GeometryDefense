const TOWER_STATS = [
  {
    color: 0xe279b4,
    name: 'Basic',
    type: 'basic',
    levels: [
      {
        cost: 50,
        range: 100,
        damage: 10,
        cooldown: 10,
      },
      {
        cost: 60,
        range: 125,
        damage: 15,
        cooldown: 9,
      },
      {
        cost: 70,
        range: 150,
        damage: 20,
        cooldown: 8,
      },
    ],
  },
  {
    color: 0xffa878,
    name: 'Stun',
    type: 'stun',
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 1,
        cooldown: 15,
        stun: 250,
      },
      {
        cost: 30,
        range: 125,
        damage: 1,
        cooldown: 13,
        stun: 350,
      },
      {
        cost: 40,
        range: 150,
        damage: 1,
        cooldown: 11,
        stun: 500,
      },
    ],
  },
  {
    color: 0xfffcc9,
    name: 'Radio',
    type: 'microwave',
    levels: [
      {
        cost: 20,
        range: 40,
        damage: 2,
        cooldown: 2,
      },
      {
        cost: 30,
        range: 40,
        damage: 3,
        cooldown: 1.5,
      },
      {
        cost: 40,
        range: 40,
        damage: 4,
        cooldown: 1,
      },
    ],
  },
  {
    color: 0xa7c4e2,
    name: 'Sniper',
    type: 'sniper',
    levels: [
      {
        cost: 40,
        range: 400,
        damage: 100,
        cooldown: 20,
      },
      {
        cost: 50,
        range: 550,
        damage: 160,
        cooldown: 20,
      },
      {
        cost: 50,
        range: 600,
        damage: 280,
        cooldown: 17,
      },
    ],
  },
];
