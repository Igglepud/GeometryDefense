const LEVELS = [
  {
    start: { x: 4, y: 16 },
    end: { x: 33, y: 0 },
    path: [
      { x: 4, y: 16 },
      { x: 5, y: 16 },
      { x: 6, y: 16 },
      { x: 7, y: 16 },
      { x: 8, y: 16 },
      { x: 9, y: 16 },
      { x: 9, y: 15 },
      { x: 9, y: 14 },
      { x: 9, y: 13 },
      { x: 9, y: 12 },
      { x: 9, y: 11 },
      { x: 8, y: 11 },
      { x: 7, y: 11 },
      { x: 6, y: 11 },
      { x: 6, y: 12 },
      { x: 6, y: 13 },
      { x: 6, y: 14 },
      { x: 7, y: 14 },
      { x: 8, y: 14 },
      { x: 9, y: 14 },
      { x: 10, y: 14 },
      { x: 11, y: 14 },
      { x: 12, y: 14 },
      { x: 13, y: 14 },
      { x: 14, y: 14 },
      { x: 15, y: 14 },
      { x: 16, y: 14 },
      { x: 17, y: 14 },
      { x: 18, y: 14 },
      { x: 19, y: 14 },
      { x: 20, y: 14 },
      { x: 20, y: 13 },
      { x: 20, y: 12 },
      { x: 20, y: 11 },
      { x: 20, y: 10 },
      { x: 20, y: 9 },
      { x: 20, y: 8 },
      { x: 20, y: 7 },
      { x: 19, y: 7 },
      { x: 18, y: 7 },
      { x: 17, y: 7 },
      { x: 16, y: 7 },
      { x: 15, y: 7 },
      { x: 15, y: 8 },
      { x: 15, y: 9 },
      { x: 15, y: 10 },
      { x: 15, y: 11 },
      { x: 15, y: 12 },
      { x: 16, y: 12 },
      { x: 17, y: 12 },
      { x: 18, y: 12 },
      { x: 19, y: 12 },
      { x: 20, y: 12 },
      { x: 21, y: 12 },
      { x: 22, y: 12 },
      { x: 23, y: 12 },
      { x: 24, y: 12 },
      { x: 25, y: 12 },
      { x: 26, y: 12 },
      { x: 27, y: 12 },
      { x: 28, y: 12 },
      { x: 29, y: 12 },
      { x: 30, y: 12 },
      { x: 31, y: 12 },
      { x: 32, y: 12 },
      { x: 33, y: 12 },
      { x: 33, y: 11 },
      { x: 33, y: 10 },
      { x: 33, y: 9 },
      { x: 33, y: 8 },
      { x: 33, y: 7 },
      { x: 33, y: 6 },
      { x: 33, y: 5 },
      { x: 33, y: 4 },
      { x: 33, y: 3 },
      { x: 33, y: 2 },
      { x: 33, y: 1 },
      { x: 33, y: 0 },
    ],
    waves: [
      [
        {
          type: "BlueTriangle",
          count: 10,
          cooldown: 1000,
        },{
          type: "GreenCircle",
          count: 5,
          cooldown: 1000,
        }     
      ],
      [
        {
          type: "GreenCircle",
          count: 10,
          cooldown: 2000,
        }     
      ],
      [
        {
          type: "PurpleSquare",
          count: 1,
          cooldown: 1500,
        }      
      ],
      [
        {
          type: "RedSquare",
          count: 1,
          cooldown: 1500,
        }      
      ],
      [
        {
          type: "BlueTriangle",
          count: 10,
          cooldown: 1000,
        }     
      ],
      [
        {
          type: "BlueTriangle",
          count: 5,
          cooldown: 400,
        }
      ],
      [
        {
          type: "BlueTriangle",
          count: 100,
          cooldown: 250,
        }
      ]
    ],
  },
];
try {
  module.exports = LEVELS;
} catch (err) {}
