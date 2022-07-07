import React, { useState, useEffect } from 'react'
import { Grid, Card, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import { PokerDieFaces } from '../components/dice/poker/PokerDie'

let die1, die2, die3, die4, die5
const medW = window.matchMedia('(min-width: 1000px)')
const medH = window.matchMedia('(min-height: 1000px)')

const random_shake = () =>
  PokerDieFaces[Math.floor(Math.random() * PokerDieFaces.length)]

StartGame()
function StartGame() {
  die1 = PokerDieFaces[0]
  die2 = PokerDieFaces[0]
  die3 = PokerDieFaces[0]
  die4 = PokerDieFaces[0]
  die5 = PokerDieFaces[0]
}

const PokerDice = () => {
  const [topface, setTopface] = useState(() => {
    return true
  })

  const diespin = keyframes({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  })

  useEffect(() => {
    die1 = random_shake(PokerDieFaces)
    die2 = random_shake(PokerDieFaces)
    die3 = random_shake(PokerDieFaces)
    die4 = random_shake(PokerDieFaces)
    die5 = random_shake(PokerDieFaces)
  }, [topface])

  const rollDice = () => {
    setTopface(!topface)
  }

  const dieSize = medW.matches || medH.matches ? '150px' : '75px'

  const POSITION = [
    { play: die1, spinrate: '0.5s', spin: diespin },
    { play: die2, spinrate: '0.6s', spin: diespin },
    { play: die3, spinrate: '0.6s', spin: diespin },
    { play: die4, spinrate: '0.7s', spin: diespin },
    { play: die5, spinrate: '0.7s', spin: diespin },
  ]
  return (
    <>
      <Grid
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplate: 'repeat(5, 1fr) / 1fr',
            rowGap: 5,
            px: 4,
            justifyContent: 'center',
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            direction: 'row',
            gridTemplate: 'repeat(1, 1fr) / repeat(5, 1fr)',
            px: 10,
            justifyContent: 'center',
          },
        }}
      >
        {POSITION.map((spot, index) => (
          <Grid item key={index}>
            {topface && (
              <Card
                sx={{
                  '@media (orientation: portrait)': {
                    width: dieSize,
                    height: dieSize,
                    borderRadius: '20%',
                    margin: 'auto',
                    animation: `${spot.spin} ${spot.spinrate} 1 ease-out`,
                  },
                  '@media (orientation: landscape)': {
                    width: dieSize,
                    height: dieSize,
                    borderRadius: '20%',
                    margin: 'auto',
                    animation: `${spot.spin} ${spot.spinrate} 1 ease-out`,
                  },
                }}
              >
                <CardMedia component="img" src={spot.play} onClick={rollDice} />
              </Card>
            )}
            {!topface && (
              <Card
                sx={{
                  '@media (orientation: portrait)': {
                    width: dieSize,
                    height: dieSize,
                    borderRadius: '20%',
                    margin: 'auto',
                    animation: `${spot.spin} ${spot.spinrate} 1 ease-out`,
                  },
                  '@media (orientation: landscape)': {
                    width: dieSize,
                    height: dieSize,
                    borderRadius: '20%',
                    margin: 'auto',
                    animation: `${spot.spin} ${spot.spinrate} 1 ease-out`,
                  },
                }}
              >
                <CardMedia component="img" src={spot.play} onClick={rollDice} />
              </Card>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PokerDice
