import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardMedia } from '@mui/material'
import Deck from './dice/craps/Die'
import D1 from '../assets/dice/craps/one.svg'
import D2 from '../assets/dice/craps/two.svg'
import D3 from '../assets/dice/craps/three.svg'
import D4 from '../assets/dice/craps/four.svg'
import D5 from '../assets/dice/craps/five.svg'
import D6 from '../assets/dice/craps/six.svg'

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

export default function CubesCraps() {
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

  const cubeface = {
    background: 'hsla(0, 90%, 50%, 0.7)',
    position: 'absolute',
    width: '200px',
    height: '200px',
  }

  const DICE = [playerCard, playerCardB]

  const POSITION = [
    {
      transform: 'rotateY(0deg) translateZ(100px)',
      src: D3,
      alt: 'three front',
    },
    {
      transform: 'rotateY(180deg) translateZ(100px)',
      src: D4,
      alt: 'four back',
    },
    {
      transform: 'rotateY(90deg) translateZ(100px)',
      src: D5,
      alt: 'five right',
    },
    {
      transform: 'rotateY(-90deg) translateZ(100px)',
      src: D2,
      alt: 'two left',
    },
    { transform: 'rotateX(90deg) translateZ(100px)', src: D1, alt: 'one top' },
    {
      transform: 'rotateX(-90deg) translateZ(100px)',
      src: D6,
      alt: 'six bottom',
    },
  ]

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
        {DICE.map((die, index) => (
          <Grid
            item
            className="scenes"
            onClick={rollDice}
            key={index}
            sx={{
              height: '200px',
              width: '200px',
              perspective: '400px',
              margin: 'auto',
            }}
          >
            <Box
              // cube
              sx={{
                transform: `${die}`,
                width: '200px',
                height: '200px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 0.8s',
              }}
            >
              {POSITION.map((spot, index) => (
                <Card
                  key={index}
                  sx={{
                    transform: `${spot.transform}`,
                    background: cubeface.background,
                    position: cubeface.position,
                    width: cubeface.width,
                    height: cubeface.height,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={spot.src}
                    alt={spot.alt}
                    height="200"
                    width="200"
                  />
                </Card>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
