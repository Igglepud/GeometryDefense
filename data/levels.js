const LEVELS = [
  {
    start: {x: 0, y: 8},
    end: {x: 10, y: 8},
    path: [{x: 0, y: 8}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 4, y: 9}, {x: 4, y: 10}, {x: 5, y: 10}, {x: 6, y: 10}, {x: 6, y: 9}, {x: 6, y: 8}, {x: 7, y: 8}, {x: 8, y: 8}, {x: 9, y: 8}, {x: 10, y: 8}],
    waves: [{
      triangles:{
        blue:1,
        red:0,
        green:0
      },
      squares:0,


    }]
  }
];
try {
  module.exports = LEVELS;
} catch (err) {}
