import React, { useState, useEffect } from 'react'
import { Box, Grid, Card, CardMedia, Button } from '@mui/material'
import D1 from '../assets/dice/white/one.svg'
import D2 from '../assets/dice/white/two.svg'
import D3 from '../assets/dice/white/three.svg'
import D4 from '../assets/dice/white/four.svg'
import D5 from '../assets/dice/white/five.svg'
import D6 from '../assets/dice/white/six.svg'
import CasinoIcon from '@mui/icons-material/Casino'
import { rollTo } from './dice/yahtzee/Die'
import useMediaQuery from '@mui/material/useMediaQuery'

let die1, die2, die3, die4, die5
const random_shake = () => rollTo[Math.floor(Math.random() * rollTo.length)]

StartGame()
function StartGame() {
  die1 = rollTo[4]
  die2 = rollTo[4]
  die3 = rollTo[4]
  die4 = rollTo[4]
  die5 = rollTo[4]
}

const DiceYahtzee = () => {
  const matches = useMediaQuery('(min-width:920px)')
  // const matchesb = useMediaQuery('(min-height:1000px)')
  // const devicePortrait = useMediaQuery('(orientation: portrait)')
  const [topface, setTopface] = useState(() => {
    return true
  })

  useEffect(() => {
    die1 = random_shake(rollTo)
    die2 = random_shake(rollTo)
    die3 = random_shake(rollTo)
    die4 = random_shake(rollTo)
    die5 = random_shake(rollTo)
  }, [topface])

  const rollDice = () => {
    setTopface(!topface)
  }

  const DICE = [die1, die2, die3, die4, die5]

  const buildDice = matches
    ? [
        {
          transform: 'rotateY(0deg) translateZ(100px)',
          src: D3,
          alt: 'three front',
        },
        {
          transform: 'rotateY(90deg) translateZ(100px)',
          src: D5,
          alt: 'five right',
        },
        {
          transform: 'rotateY(180deg) translateZ(100px)',
          src: D4,
          alt: 'four back',
        },
        {
          transform: 'rotateY(-90deg) translateZ(100px)',
          src: D2,
          alt: 'two left',
        },
        {
          transform: 'rotateX(90deg) translateZ(100px)',
          src: D1,
          alt: 'one up top',
        },
        {
          transform: 'rotateX(-90deg) translateZ(100px)',
          src: D6,
          alt: 'six bottom',
        },
      ]
    : [
        {
          transform: 'rotateY(0deg) translateZ(50px)',
          src: D3,
          alt: 'three front',
        },
        {
          transform: 'rotateY(90deg) translateZ(50px)',
          src: D5,
          alt: 'five right',
        },
        {
          transform: 'rotateY(180deg) translateZ(50px)',
          src: D4,
          alt: 'four back',
        },
        {
          transform: 'rotateY(-90deg) translateZ(50px)',
          src: D2,
          alt: 'two left',
        },
        {
          transform: 'rotateX(90deg) translateZ(50px)',
          src: D1,
          alt: 'one up top',
        },
        {
          transform: 'rotateX(-90deg) translateZ(50px)',
          src: D6,
          alt: 'six bottom',
        },
      ]

  return (
    <>
      <Grid
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplate: 'repeat(3, 1fr) / repeat(2, 1fr)',
            gap: 4,
            px: 4,
            // gridTemplateColumns: 'repeat(2, 1fr)',
            // gridTemplateRows: 'repeat(3, 1fr)',
            // justifyContent: 'space-evenly',
            // gap: 2,
            // mb: 'auto',
            // mx: '16px',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            direction: 'row',
            gridTemplate: 'repeat(2, 1fr) / repeat(3, 1fr)',
            gap: 5,
            px: 15,
            //
            // display: 'grid',
            // gridTemplateColumns: 'repeat(3, 1fr)',
            // gridTemplateRows: 'repeat(2, 1fr)',
            // gap: 2,
            // mb: 'auto',
            // mx: '10%',
            justifyContent: 'space-evenly',
          },
        }}
      >
        {DICE.map((roll, index) => (
          <Grid
            item
            // sceen
            key={index}
            sx={{
              width: matches ? '200px' : '100px',
              height: matches ? '200px' : '100px',
              perspective: '400px',
              margin: 'auto',
            }}
          >
            <Box
              // cube
              sx={{
                transform: `${roll}`,
                width: matches ? '200px' : '100px',
                height: matches ? '200px' : '100px',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'transform 1.2s',
              }}
            >
              {buildDice.map((spot, index) => (
                <Card
                  // dieFace
                  key={index}
                  sx={{
                    transform: `${spot.transform}`,
                    background: 'hsla(0, 100%, 100%, 1.0)',
                    position: 'absolute',
                    width: matches ? '200px' : '100px',
                    height: matches ? '200px' : '100px',
                  }}
                >
                  <CardMedia
                    component="img"
                    src={spot.src}
                    alt={spot.alt}
                    sx={{
                      width: matches ? '200px' : '100px',
                      height: matches ? '200px' : '100px',
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
            width: matches ? '200px' : '90px',
            height: matches ? '200px' : '90px',
            margin: 'auto',
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            endIcon={<CasinoIcon />}
            sx={{
              width: '100%',
              height: '100%',
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

export default DiceYahtzee
