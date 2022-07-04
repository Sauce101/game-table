import useMediaQuery from '@mui/material/useMediaQuery'

const Match = () => useMediaQuery('(min-width:920px)')
// const DevicePortrait = () => useMediaQuery('(orientation: portrait)')
// const Matchesb = () => useMediaQuery('(min-width:800px)')
// const Matchesc = () => useMediaQuery('(min-height:1000px)')

export const rollTo = Match
  ? [
      // 3 front
      'translateZ(-100px) rotateY(0deg)',
      // 5 right
      'translateZ(-100px) rotateY(-90deg)',
      // 4 back
      'translateZ(-100px) rotateY(-180deg)',
      // 2 left
      'translateZ(-100px) rotateY(90deg)',
      // 1 top
      'translateZ(-100px) rotateX(-90deg) ',
      // 6 bottom
      'translateZ(-100px) rotateX(90deg)',
    ]
  : [
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

// export const portal =
//   Matchesb && Matchesc
//     ? [
//         // 3 front
//         'translateZ(-100px) rotateY(0deg)',
//         // 5 right
//         'translateZ(-100px) rotateY(-90deg)',
//         // 4 back
//         'translateZ(-100px) rotateY(-180deg)',
//         // 2 left
//         'translateZ(-100px) rotateY(90deg)',
//         // 1 top
//         'translateZ(-100px) rotateX(-90deg) ',
//         // 6 bottom
//         'translateZ(-100px) rotateX(90deg)',
//       ]
//     : [
//         // 3 front
//         'translateZ(-50px) rotateY(0deg)',
//         // 5 right
//         'translateZ(-50px) rotateY(-90deg)',
//         // 4 back
//         'translateZ(-50px) rotateY(-180deg)',
//         // 2 left
//         'translateZ(-50px) rotateY(90deg)',
//         // 1 top
//         'translateZ(-50px) rotateX(-90deg) ',
//         // 6 bottom
//         'translateZ(-50px) rotateX(90deg)',
//       ]

// export const buildDice = () => {
//   if (Matches) {
//     return [
//       {
//         transform: 'rotateY(0deg) translateZ(100px)',
//         src: D3,
//         alt: 'three front',
//       },
//       {
//         transform: 'rotateY(90deg) translateZ(100px)',
//         src: D5,
//         alt: 'five right',
//       },
//       {
//         transform: 'rotateY(180deg) translateZ(100px)',
//         src: D4,
//         alt: 'four back',
//       },
//       {
//         transform: 'rotateY(-90deg) translateZ(100px)',
//         src: D2,
//         alt: 'two left',
//       },
//       {
//         transform: 'rotateX(90deg) translateZ(100px)',
//         src: D1,
//         alt: 'one up top',
//       },
//       {
//         transform: 'rotateX(-90deg) translateZ(100px)',
//         src: D6,
//         alt: 'six bottom',
//       },
//     ]
//   } else {
//     return [
//       {
//         transform: 'rotateY(0deg) translateZ(50px)',
//         src: D3,
//         alt: 'three front',
//       },
//       {
//         transform: 'rotateY(90deg) translateZ(50px)',
//         src: D5,
//         alt: 'five right',
//       },
//       {
//         transform: 'rotateY(180deg) translateZ(50px)',
//         src: D4,
//         alt: 'four back',
//       },
//       {
//         transform: 'rotateY(-90deg) translateZ(50px)',
//         src: D2,
//         alt: 'two left',
//       },
//       {
//         transform: 'rotateX(90deg) translateZ(50px)',
//         src: D1,
//         alt: 'one up top',
//       },
//       {
//         transform: 'rotateX(-90deg) translateZ(50px)',
//         src: D6,
//         alt: 'six bottom',
//       },
//     ]
//   }
// }

// Matches
//   ? [
//       {
//         transform: 'rotateY(0deg) translateZ(100px)',
//         src: D3,
//         alt: 'three front',
//       },
//       {
//         transform: 'rotateY(90deg) translateZ(100px)',
//         src: D5,
//         alt: 'five right',
//       },
//       {
//         transform: 'rotateY(180deg) translateZ(100px)',
//         src: D4,
//         alt: 'four back',
//       },
//       {
//         transform: 'rotateY(-90deg) translateZ(100px)',
//         src: D2,
//         alt: 'two left',
//       },
//       {
//         transform: 'rotateX(90deg) translateZ(100px)',
//         src: D1,
//         alt: 'one up top',
//       },
//       {
//         transform: 'rotateX(-90deg) translateZ(100px)',
//         src: D6,
//         alt: 'six bottom',
//       },
//     ]
//   : [
//       {
//         transform: 'rotateY(0deg) translateZ(50px)',
//         src: D3,
//         alt: 'three front',
//       },
//       {
//         transform: 'rotateY(90deg) translateZ(50px)',
//         src: D5,
//         alt: 'five right',
//       },
//       {
//         transform: 'rotateY(180deg) translateZ(50px)',
//         src: D4,
//         alt: 'four back',
//       },
//       {
//         transform: 'rotateY(-90deg) translateZ(50px)',
//         src: D2,
//         alt: 'two left',
//       },
//       {
//         transform: 'rotateX(90deg) translateZ(50px)',
//         src: D1,
//         alt: 'one up top',
//       },
//       {
//         transform: 'rotateX(-90deg) translateZ(50px)',
//         src: D6,
//         alt: 'six bottom',
//       },
//     ]
