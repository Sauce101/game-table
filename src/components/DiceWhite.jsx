import React, { useState, useEffect } from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import Deck from './dice/white/Die'

let playerDeck,
  playerCard,
  playerDeckB,
  playerCardB,
  playerDeckC,
  playerCardC,
  playerDeckD,
  playerCardD,
  playerDeckE,
  playerCardE

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
StartGameC()
function StartGameC() {
  const deck = new Deck()
  deck.shuffle()

  const allSides = Math.ceil(deck.numberOfCards)
  playerDeckC = new Deck(deck.cards.slice(0, allSides))

  playerCardC = playerDeckC.pop()
}
StartGameD()
function StartGameD() {
  let deck = new Deck()
  deck.shuffle()
  const allSides = Math.ceil(deck.numberOfCards)
  playerDeckD = new Deck(deck.cards.slice(0, allSides))

  playerCardD = playerDeckD.pop()
}
StartGameE()
function StartGameE() {
  const deck = new Deck()
  deck.shuffle()
  const allSides = Math.ceil(deck.numberOfCards)
  playerDeckE = new Deck(deck.cards.slice(0, allSides))

  playerCardE = playerDeckE.pop()
}

// Die size
let cardsize = {
  radius: '20%',
  cardWidthL: '55%',
  cardWidthP: '20%',
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
    playerCardC = playerDeckC.pop()
    playerCardD = playerDeckD.pop()
    playerCardE = playerDeckE.pop()
    if (playerDeck.numberOfCards === 3) {
      StartGame()
      StartGameB()
      StartGameC()
      StartGameD()
      StartGameE()
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

  const POSITION = [
    playerCard,
    playerCardB,
    playerCardC,
    playerCardD,
    playerCardE,
  ]

  return (
    <>
      <Grid
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: 5,
            mb: 'auto',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            mb: 'auto',
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
