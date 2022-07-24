import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardMedia, Button } from '@mui/material'

import {
  buildMd,
  buildSm,
  rotateMd,
  rotateSm,
} from '../components/dice/yahtzee/Die'

let rollTo, diceStart, die1, die2, die3, die4, die5
const medW = window.matchMedia('(min-width: 1000px)')
const medH = window.matchMedia('(min-height: 1000px)')

// Move Dice after roll
if (medW.matches || medH.matches) {
  rollTo = rotateMd
} else {
  rollTo = rotateSm
}

// Dice responsive
const diceResponsive = medW.matches || medH.matches ? '200px' : '100px'

const random_shake = () => rollTo[Math.floor(Math.random() * rollTo.length)]

// Build Dice
if (medH.matches || medW.matches) {
  diceStart = buildMd
} else {
  diceStart = buildSm
}

StartGame()
function StartGame() {
  die1 = rollTo[4]
  die2 = rollTo[4]
  die3 = rollTo[4]
  die4 = rollTo[4]
  die5 = rollTo[4]
}

const Yahtzee = () => {
  const [topface, setTopface] = useState(() => {
    return true
  })

  useEffect(() => {
    die1 = random_shake()
    die2 = random_shake()
    die3 = random_shake()
    die4 = random_shake()
    die5 = random_shake()
  }, [topface])

  const rollDice = () => {
    setTopface(!topface)
  }

  const DICE = [die1, die2, die3, die4, die5]

  return (
    <>
      <Grid
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
            rowGap: 10,
            px: 4,
            justifyContent: 'center',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            direction: 'row',
            gridTemplate: 'repeat(2, 1fr) / repeat(3, 1fr)',
            rowGap: 6,
            px: 10,
            justifyContent: 'center',
          },
        }}
      >
        {DICE.map((roll, index) => (
          <Grid
            item
            // sceen
            key={index}
            sx={{
              width: diceResponsive,
              height: diceResponsive,
              perspective: '400px',
              margin: 'auto',
            }}
          >
            <Box
              // cube
              sx={{
                transform: `${roll}`,
                width: diceResponsive,
                height: diceResponsive,
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.2s',
              }}
            >
              {diceStart.map((spot, index) => (
                <Card
                  // dieFace
                  elevation={0}
                  square
                  key={index}
                  sx={{
                    transform: `${spot.transform}`,
                    background: 'hsla(0, 100%, 100%, 1.0)',
                    position: 'absolute',
                    width: diceResponsive,
                    height: diceResponsive,
                  }}
                >
                  <CardMedia
                    component="img"
                    src={spot.src}
                    alt={spot.alt}
                    sx={{
                      width: diceResponsive,
                      height: diceResponsive,
                    }}
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
            width: diceResponsive,
            height: diceResponsive,
            margin: 'auto',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: '100%',
              height: '100%',
              backgroundColor: '#1b0000',
              fontSize: medW.matches || medH.matches ? 24 : 16,
            }}
          >
            Roll
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default Yahtzee
