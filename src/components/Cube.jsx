import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
// import { Grid, Card, CardMedia } from '@mui/material'
// import { keyframes } from '@emotion/react'
import Deck from './dice/craps/Die'
import D1 from '../assets/dice/craps/one.svg'
import D2 from '../assets/dice/craps/two.svg'
import D3 from '../assets/dice/craps/three.svg'
import D4 from '../assets/dice/craps/four.svg'
import D5 from '../assets/dice/craps/five.svg'
import D6 from '../assets/dice/craps/six.svg'
import '../assets/css/craps.css'

let playerDeck, playerCard, playerDeckB, playerCardB

StartGame()
function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const allSides = Math.ceil(deck.numberOfCards)
  playerDeck = new Deck(deck.cards.slice(0, allSides))

  playerCard = playerDeck.pop()
}

StartGameB()
function StartGameB() {
  const deck = new Deck()
  deck.shuffle()

  const allSides = Math.ceil(deck.numberOfCards)
  playerDeckB = new Deck(deck.cards.slice(0, allSides))

  playerCardB = playerDeckB.pop()
}

// Die size
// let cardsize = {
//   radius: '20%',
//   cardWidthL: '40%',
//   cardWidthP: '35%',
// }

export default function Setone() {
  // const [face, setFace] = useState('show-top')
  const [topface, setTopface] = useState(() => {
    return true
  })
  const [nextdice, setNextdice] = useState(() => {
    return true
  })

  useEffect(() => {
    playerCard = playerDeck.pop()
    playerCardB = playerDeckB.pop()
    if (playerDeck.numberOfCards === 3) {
      StartGame()
      StartGameB()
      setNextdice(!nextdice)
    }
  }, [topface, nextdice])

  // const rollDice = () => {
  //   setTopface(!topface)
  // }
  const rollDice = () => {
    setTopface(!topface)
  }

  // const diespin = keyframes({
  //   from: { transform: 'rotate(0deg)' },
  //   to: { transform: 'rotate(360deg)' },
  // })

  // const POSITION = [playerCard, playerCardB]

  return (
    <>
      <Grid
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateRows: 'repeat(4, 1fr)',
            gap: 8,
            mb: 'auto',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            mb: 'auto',
            mx: '10%',
          },
        }}
      >
        <div></div>
        <div className="scene">
          <div className={`cube ${playerCard}`} onClick={rollDice}>
            <div className="cube__face cube__face--front">
              <img src={D3} alt="one" className="faces" />
            </div>
            <div className="cube__face cube__face--back">
              <img src={D4} alt="six" className="faces" />
            </div>
            <div className="cube__face cube__face--right">
              <img src={D2} alt="two" className="faces" />
            </div>
            <div className="cube__face cube__face--left">
              <img src={D5} alt="five" className="faces" />
            </div>
            <div className="cube__face cube__face--top">
              <img src={D1} alt="four" className="faces" />
            </div>
            <div className="cube__face cube__face--bottom">
              <img src={D6} alt="three" className="faces" />
            </div>
          </div>
        </div>

        <div className="scene">
          <div className={`cube ${playerCardB}`}>
            <div className="cube__face cube__face--front">
              <img src={D3} alt="one" className="faces" />
            </div>
            <div className="cube__face cube__face--back">
              <img src={D4} alt="six" className="faces" />
            </div>
            <div className="cube__face cube__face--right">
              <img src={D2} alt="two" className="faces" />
            </div>
            <div className="cube__face cube__face--left">
              <img src={D5} alt="five" className="faces" />
            </div>
            <div className="cube__face cube__face--top">
              <img src={D1} alt="four" className="faces" />
            </div>
            <div className="cube__face cube__face--bottom">
              <img src={D6} alt="three" className="faces" />
            </div>
          </div>
        </div>
        <div></div>
      </Grid>
    </>
  )
}

// {
//   POSITION.map((spot, index) => (
//     <Grid item key={index}>
//       {topface && (
//         <Card
//           sx={{
//             '@media (orientation: portrait)': {
//               maxWidth: cardsize.cardWidthP,
//               borderRadius: cardsize.radius,
//               margin: 'auto',
//               animation: `${diespin} .3s 1 ease-out`,
//             },
//             '@media (orientation: landscape)': {
//               maxWidth: cardsize.cardWidthL,
//               borderRadius: cardsize.radius,
//               margin: 'auto',
//               animation: `${diespin} .3s 1 ease-out`,
//             },
//           }}
//         >
//           <CardMedia component="img" src={spot} onClick={rollDice} />
//         </Card>
//       )}
//       {!topface && (
//         <Card
//           sx={{
//             '@media (orientation: portrait)': {
//               maxWidth: cardsize.cardWidthP,
//               borderRadius: cardsize.radius,
//               margin: 'auto',
//               animation: `${diespin} .3s 1 ease-out`,
//             },
//             '@media (orientation: landscape)': {
//               maxWidth: cardsize.cardWidthL,
//               borderRadius: cardsize.radius,
//               margin: 'auto',
//               animation: `${diespin} .3s 1 ease-out`,
//             },
//           }}
//         >
//           <CardMedia component="img" src={spot} onClick={rollDice} />
//         </Card>
//       )}
//     </Grid>
//   ))
// }
