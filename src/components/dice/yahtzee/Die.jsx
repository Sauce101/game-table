// Yahtzee Die
const rollTo = [
  // 3 front
  'translateZ(-50px) rotateY(0deg)',
  // 5 right
  'translateZ(-50px) rotateY(-90deg)',
  // 4 back
  'translateZ(-50px) rotateY(-180deg)',
  // 2 left
  'translateZ(-50px) rotateY(90deg)',
  // 1 top
  'translateZ(-50px) rotateX(-90deg) ',
  // 6 bottom
  'translateZ(-50px) rotateX(90deg)',
]

export default rollTo

// const rollTo = [
//   'translateZ(-50px) rotateY(0deg) rotateX(90deg)',
//   'translateZ(-50px) rotateY(-180deg) rotateX(90deg)',
//   'translateZ(-50px) rotateY(-90deg) rotateX(90deg)',
//   'translateZ(-50px) rotateY(90deg) rotateX(90deg)',
//   'translateZ(-50px) rotateX(-90deg) rotateY(90deg)',
//   'translateZ(-50px) rotateX(90deg) rotateY(90deg)',
// ]
