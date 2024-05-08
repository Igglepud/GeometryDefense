const TOWER_STATS = [
  {
    color: 0xe279b4,
    name: "Basic",
    type: "basic",
    levels: [
      {
        cost: 50,
        range: 100,
        damage: 10,
        cooldown: 30,
        upgradeCost: 60,
      },
      {
        range: 125,
        damage: 15,
        cooldown: 25,
        upgradeCost: 70,
      },
      {
        range: 150,
        damage: 20,
        cooldown: 20,
      },
    ],
  },
  {
    color: 0xffa878,
    name: "Stun",
    type: "stun",
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 1,
        cooldown: 75,
        stun: 250,
        upgradeCost: 30,
      },
      {
        range: 125,
        damage: 1,
        cooldown: 75,
        stun: 350,
        upgradeCost: 40,
      },
      {
        range: 150,
        damage: 1,
        cooldown: 75,
        stun: 500,
      },
    ],
  },
  {
    color: 0xfffcc9,
    name: "Radio",
    type: "microwave",
    levels: [
      {
        cost: 20,
        range: 40,
        damage: 2,
        cooldown: 2,
        upgradeCost: 30,
      },
      {
        range: 40,
        damage: 3,
        cooldown: 2,
        upgradeCost: 40,
      },
      {
        range: 40,
        damage: 4,
        cooldown: 1,
      },
    ],
  },
  {
    color: 0xa7c4e2,
    name: "Sniper",
    type: "sniper",
    levels: [
      {
        cost: 40,
        range: 400,
        damage: 100,
        cooldown: 100,
        upgradeCost: 50,
      },
      {
        range: 550,
        damage: 160,
        cooldown: 95,
        upgradeCost: 50,
      },
      {
        range: 600,
        damage: 280,
        cooldown: 90,
      },
    ],
  },
  {
    color: 0x7d309c,
    name: "Rapid",
    type: "rapid",
    levels: [
      {
        cost: 80,
        range: 80,
        damage: 1,
        cooldown: 10,
        upgradeCost: 60,
      },
      {
        range: 85,
        damage: 1,
        cooldown: 10,
        upgradeCost: 70,
      },
      {
        range: 90,
        damage: 1,
        cooldown: 7,
      },
    ],
  },
  {
    color: 0xa11aff,
    name: "Tesla",
    type: "slow",
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 1,
        cooldown: 50,
        slow: 250,
        upgradeCost: 30,
      },
      {
        range: 125,
        damage: 1,
        cooldown: 50,
        slow: 350,
        upgradeCost: 40,
      },
      {
        range: 150,
        damage: 1,
        cooldown: 50,
        slow: 500,
      },
    ],
  },
  {
    color: 0xaf1f1a,
    name: "Harambe",
    type: "slow",
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 1,
        cooldown: 2,
        slow: 250,
        upgradeCost: 30,
      },
      {
        range: 125,
        damage: 1,
        cooldown: 2,
        slow: 350,
        upgradeCost: 40,
      },
      {
        range: 150,
        damage: 1,
        cooldown: 1,
        slow: 500,
      },
    ],
  },
  {
    color: 0xffffa1,
    name: "Rocket",
    type: "rocket",
    levels: [
      {
        cost: 20,
        range: 100,
        damage: 100,
        cooldown: 150,
        size: 25,
        upgradeCost: 30,
      },
      {
        range: 125,
        damage: 100,
        cooldown: 125,
        size: 100,
        upgradeCost: 40,
      },
      {
        range: 850,
        damage: 100,
        cooldown: 100,
        size: 250,
      },
    ],
  },
];
