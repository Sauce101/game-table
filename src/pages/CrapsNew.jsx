import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardMedia } from '@mui/material'
import {
  buildMd,
  buildSm,
  rotateMd,
  rotateSm,
} from '../components/dice/craps/CrapsDie'

let rollTo, diceStart, die1, die2
const medW = window.matchMedia('(min-width: 1000px)')
const medH = window.matchMedia('(min-height: 1000px)')

// Move Dice after roll
if (medW.matches || medH.matches) {
  rollTo = rotateMd
} else {
  rollTo = rotateSm
}

const random_shake = () => rollTo[Math.floor(Math.random() * rollTo.length)]

StartGame()
function StartGame() {
  die1 = rollTo[4]
  die2 = rollTo[4]
}

export default function CrapsNew() {
  const [topface, setTopface] = useState(() => {
    return true
  })

  useEffect(() => {
    die1 = random_shake(rollTo)
    die2 = random_shake(rollTo)
  }, [topface])

  const rollDice = () => {
    setTopface(!topface)
  }

  const DICE = [die1, die2]

  // Build Dice
  if (medH.matches || medW.matches) {
    diceStart = buildMd
  } else {
    diceStart = buildSm
  }

  return (
    <>
      <Grid
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplate: 'repeat(2, 1fr) / 1fr',
            rowGap: 10,
            px: 4,
            justifyContent: 'center',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            direction: 'row',
            gridTemplate: '1fr / repeat(2, 1fr)',
            rowGap: 6,
            px: 10,
            justifyContent: 'center',
          },
        }}
      >
        {DICE.map((roll, index) => (
          <Grid
            item
            onClick={rollDice}
            // sceen
            key={index}
            sx={{
              width: medW.matches || medH.matches ? '200px' : '100px',
              height: medW.matches || medH.matches ? '200px' : '100px',
              perspective: '400px',
              margin: 'auto',
            }}
          >
            <Box
              // cube

              sx={{
                transform: `${roll}`,
                width: medW.matches || medH.matches ? '200px' : '100px',
                height: medW.matches || medH.matches ? '200px' : '100px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.2s',
              }}
            >
              {diceStart.map((spot, index) => (
                <Card
                  // dieFace
                  key={index}
                  sx={{
                    transform: `${spot.transform}`,
                    background: 'hsla(0, 90%, 50%, 0.7)',
                    position: 'absolute',
                    width: medW.matches || medH.matches ? '200px' : '100px',
                    height: medW.matches || medH.matches ? '200px' : '100px',
                  }}
                >
                  <CardMedia
                    component="img"
                    src={spot.src}
                    alt={spot.alt}
                    sx={{
                      width: medW.matches || medH.matches ? '200px' : '100px',
                      height: medW.matches || medH.matches ? '200px' : '100px',
                    }}
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
