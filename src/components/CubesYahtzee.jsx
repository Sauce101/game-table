import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardMedia, Button } from '@mui/material'
import Deck from './dice/yahtzee/Die'
import D1 from '../assets/dice/white/one.svg'
import D2 from '../assets/dice/white/two.svg'
import D3 from '../assets/dice/white/three.svg'
import D4 from '../assets/dice/white/four.svg'
import D5 from '../assets/dice/white/five.svg'
import D6 from '../assets/dice/white/six.svg'
import CasinoIcon from '@mui/icons-material/Casino'

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
  const deck = new Deck()
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

  const cubeface = {
    background: 'hsla(0, 100%, 100%, 1.0)',
    position: 'absolute',
    width: '100px',
    height: '100px',
  }

  const DICE = [playerCard, playerCardB, playerCardC, playerCardD, playerCardE]

  const POSITION = [
    {
      transform: 'rotateY(0deg) translateZ(50px)',
      src: D3,
      alt: 'three front',
    },
    {
      transform: 'rotateY(180deg) translateZ(50px)',
      src: D4,
      alt: 'four back',
    },
    {
      transform: 'rotateY(90deg) translateZ(50px)',
      src: D5,
      alt: 'five right',
    },
    {
      transform: 'rotateY(-90deg) translateZ(50px)',
      src: D2,
      alt: 'two left',
    },
    { transform: 'rotateX(90deg) translateZ(50px)', src: D1, alt: 'one top' },
    {
      transform: 'rotateX(-90deg) translateZ(50px)',
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
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            justifyContent: 'space-evenly',
            gap: 2,
            mb: 'auto',
            mx: '16px',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: 2,
            mb: 'auto',
            mx: '10%',
            justifyContent: 'space-evenly',
          },
        }}
      >
        {DICE.map((die, index) => (
          <Grid
            item
            className="scenes"
            // onClick={rollDice}
            key={index}
            sx={{
              height: '100px',
              width: '100px',
              perspective: '400px',
              margin: 'auto',
            }}
          >
            <Box
              // cube
              sx={{
                transform: `${die}`,
                width: '100px',
                height: '100px',
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
                    height="100"
                    width="100"
                  />
                </Card>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid
          item
          onClick={rollDice}
          sx={{
            height: '100px',
            width: '100px',
            margin: 'auto',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CasinoIcon />}
            sx={{
              height: 100,
              width: 100,
              backgroundColor: '#1b0000',
            }}
          >
            Roll
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
