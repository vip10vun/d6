
const level = {
  title: 'The Sands of Figaro (WIP)',
  tileset: 'desert',
  entrance: { 'face': 0, 'row': 1, 'col': 4 },
  pickups: [],
  enemies: [{
    type: 'skeleton-archer',
    location: { 'face': 0, 'row': 3, 'col': 6 },
    direction: 'left'
  }],
  faces: [
    [
      [' ',' ','A',' ','A','Q','A'],
      ['A','Y',' ',' ',' ','A',' '], // ONE
      ['A','A','A','A','A','A',' '], // ↑ right edge of 5
      ['Y','A','A','●','Q',' ',' '], // → top edge of 3
      [' ','Q','A','A','A',' ',' '], // ↓ right edge of 2
      ['A','A','A',' ',' ',' ',' '], // ← bottom edge of 4
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ',' ',' ',' ',' ','Q'],
      [' ',' ',' ',' ',' ','●',' '], // TWO
      [' ',' ',' ','H',' ',' ',' '], // ↑ left edge of 4
      [' ',' ','H','W','H',' ',' '], // → bottom edge of 1
      [' ',' ','Q','H',' ',' ',' '], // ↓ left edge of 3
      [' ','●',' ',' ',' ',' ',' '], // ← top edge of 6
      [' ',' ',' ',' ',' ',' ',' ']
    ],
    [
      [' ',' ','A',' ','A','Q',' '],
      [' ','A',' ',' ','Q','●',' '], // THREE
      [' ','A','H','A',' ',' ',' '], // ↑ right edge of 1
      [' ',' ',' ','●','A','A','A'], // → top edge of 5
      [' ',' ',' ',' ',' ',' ',' '], // ↓ right edge of 6
      [' ','●',' ',' ',' ',' ',' '], // ← bottom edge of 2
      [' ',' ',' ','Q',' ',' ',' ']
    ],
    [
      [' ',' ',' ','Q',' ',' ',' '],
      [' ','●',' ',' ',' ','●',' '], // FOUR
      [' ',' ',' ',' ',' ',' ',' '], // ↑ left edge of 6
      [' ',' ','A','A','A',' ',' '], // → bottom edge of 5
      [' ','A',' ','H',' ','A',' '], // ↓ left edge of 1
      ['A','●',' ','A','Q','●','A'], // ← top edge of 2
      [' ','A',' ','F','A','Q',' ']
    ],
    [
      [' ',' ',' ',' ','A','A','A'],
      [' ','●',' ',' ',' ','●',' '], // FIVE
      [' ',' ','Q',' ',' ',' ',' '], // ↑ right edge of 3
      [' ',' ',' ','●',' ',' ',' '], // → top edge of 1
      [' ',' ',' ',' ',' ',' ','A'], // ↓ right edge of 4
      [' ','●',' ',' ',' ','●','A'], // ← bottom edge of 6
      [' ',' ',' ',' ',' ','A','Q']
    ],
    [
      [' ',' ',' ',' ',' ',' ',' '],
      [' ','●','A','A','A','●',' '], // SIX
      [' ','Q',' ',' ',' ','A',' '], // ↑ left edge of 2
      [' ','●','A','A','Q','●',' '], // → bottom edge of 3
      [' ',' ',' ',' ','A',' ',' '], // ↓ left edge of 5
      [' ','●',' ',' ',' ','●',' '], // ← top edge of 4
      [' ',' ',' ',' ',' ','Q',' ']
    ]
  ]
}

export default level