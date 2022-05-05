import React, { useState, useEffect } from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import Deck from './dice/red/Die'

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
let cardsize = {
  radius: '20%',
  cardWidthL: '40%',
  cardWidthP: '35%',
}

export default function Setone() {
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

  const rollDice = () => {
    setTopface(!topface)
  }

  const diespin = keyframes({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  })

  const POSITION = [playerCard, playerCardB]

  return (
    <>
      <Grid
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 8,
            mb: 'auto',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            mb: 'auto',
            mx: '10%',
          },
        }}
      >
        {POSITION.map((spot, index) => (
          <Grid item key={index}>
            {topface && (
              <Card
                sx={{
                  '@media (orientation: portrait)': {
                    maxWidth: cardsize.cardWidthP,
                    borderRadius: cardsize.radius,
                    margin: 'auto',
                    animation: `${diespin} .3s 1 ease-out`,
                  },
                  '@media (orientation: landscape)': {
                    maxWidth: cardsize.cardWidthL,
                    borderRadius: cardsize.radius,
                    margin: 'auto',
                    animation: `${diespin} .3s 1 ease-out`,
                  },
                }}
              >
                <CardMedia component="img" src={spot} onClick={rollDice} />
              </Card>
            )}
            {!topface && (
              <Card
                sx={{
                  '@media (orientation: portrait)': {
                    maxWidth: cardsize.cardWidthP,
                    borderRadius: cardsize.radius,
                    margin: 'auto',
                    animation: `${diespin} .3s 1 ease-out`,
                  },
                  '@media (orientation: landscape)': {
                    maxWidth: cardsize.cardWidthL,
                    borderRadius: cardsize.radius,
                    margin: 'auto',
                    animation: `${diespin} .3s 1 ease-out`,
                  },
                }}
              >
                <CardMedia component="img" src={spot} onClick={rollDice} />
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  )
}
