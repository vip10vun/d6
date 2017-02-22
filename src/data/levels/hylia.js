const level = {
  title: 'The Lake of Hylia',
  tileset: 'grass',
  entrance: { 'face': 0, 'row': 2, 'col': 3 },
  pickups: [{
    type: 'boat',
    location: { 'face': 0, 'row': 5, 'col': 2 },
  }],
  enemies: [{
    type: 'sea-serpent',
    location: { 'face': 0, 'row': 5, 'col': 5 },
    direction: 'left',
    behavior: 'sentry'
  }],
  faces: [
    [
      ['V','V','X','|','X','X','X'],
      ['X','X','X','|','X','X','X'],
      ['X','X',' ',' ','Y','X','X'],
      ['X','X',' ','●','Y','X','X'],
      ['V','V',' ','Y','Y','X','X'],
      ['X','X','X','X','X','X','X'],
      ['X','X','X','X','X','V','X']
    ],
    [
      ['A','A','X','X','A','A','X'],
      ['A','Y','X','X','Y','●','A'],
      ['X','X','X','X',' ','A','A'],
      ['X','X','V','X','X','X','X'],
      ['V','V','V','V','X','X','X'],
      ['X','▪','V','X','X','X','X'],
      ['X','V','X','X','V','X','X']
    ],
    [
      ['X','X','X','X','X','X','X'],
      ['V','V','X','X','X','●','Y'],
      ['V','X','X','X','Y','Y',' '],
      ['X','A','X','▪','X','A','A'],
      ['Y','A','X','X','X','A','X'],
      ['Y','●','X','V','X','X','X'],
      [' ','A','A','X','X','X','X']
    ],
    [
      ['A','A','A','A','Y','A','Y'],
      ['A','▪','X','X','Y','●','A'],
      ['X','V','V','X','X','A','A'],
      ['X','X','V','X','X','V','X'],
      ['X','V','V','X','A',' ','X'],
      ['V','▪','V','X','Y','●','X'],
      ['X','X','V','X','V','V','V']
    ],
    [
      ['X','X','X','A',' ',' ','X'],
      ['X','●',' ','A',' ','●','X'],
      ['X','Y','A','Y',' ','X','X'],
      ['V','A','Y','●',' ','-','-'],
      ['X','Y',' ','Y','X','X','X'],
      ['X','●',' ','X','X','▪','V'],
      ['A','A','A','X','X','X','V']
    ],
    [
      [' ','A','Y','X','X','X','A'],
      ['Y','●','Y','X','X','▪',' '],
      ['Y',' ','Y','X','V','A','A'],
      ['Y','●','Y','X',' ','●','Y'],
      ['Y','Y','Y','X','V','Y','A'],
      ['Y','●','X','X','V','▪','A'],
      [' ','X','X','V','V','X','X']
    ]
  ]
}

export default level