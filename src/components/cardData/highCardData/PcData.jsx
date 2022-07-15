import React from 'react'
import { Card, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import RedDBack from '../../../assets/cards/plain/2B.svg'
import DarkDBack from '../../../assets/cards/plain/1B.svg'

const PlayerCardData = ({ playerCard, nextdeck, ...cardsize }) => {
  const rotationPortrait = keyframes({
    from: { transform: 'rotateX(90deg)' },
    to: { transform: 'rotateX(360deg)' },
  })
  const backsidePortrait = keyframes({
    from: { transform: 'rotateX(270deg)' },
    to: { transform: 'rotateX(540deg)' },
  })
  const rotationLandscape = keyframes({
    from: { transform: 'rotateY(90deg)' },
    to: { transform: 'rotateY(360deg)' },
  })
  const backsideLandscape = keyframes({
    from: { transform: 'rotateY(270deg)' },
    to: { transform: 'rotateY(540deg)' },
  })

  return (
    <>
      <Card
        elevation={24}
        sx={{
          '@media (orientation: portrait)': {
            '@media (max-height: 739px)': {
              maxWidth: cardsize.cardWidthPsm,
            },
            '@media (min-height: 740px) and (max-height: 915px)': {
              maxWidth: cardsize.cardWidthP,
            },
            '@media (min-height: 916px)': {
              maxWidth: cardsize.cardWidthPmd,
            },
            maxHeight: '100%',
            borderRadius: cardsize.radius,
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
            animation: `${backsidePortrait} .5s 1 linear`,
            backfaceVisibility: 'hidden',
          },
          '@media (orientation: landscape)': {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            animation: `${backsideLandscape} .5s 1 linear`,
            backfaceVisibility: 'hidden',
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
          },
        }}
      >
        <CardMedia
          component="img"
          src={nextdeck ? RedDBack : DarkDBack}
          alt="card"
        />
      </Card>
      <Card
        elevation={24}
        sx={{
          '@media (orientation: portrait)': {
            '@media (max-height: 739px)': {
              maxWidth: cardsize.cardWidthPsm,
            },
            '@media (min-height: 740px) and (max-height: 915px)': {
              maxWidth: cardsize.cardWidthP,
            },
            '@media (min-height: 916px)': {
              maxWidth: cardsize.cardWidthPmd,
            },
            maxHeight: '100%',
            borderRadius: cardsize.radius,
            position: 'relative',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
            animation: `${rotationPortrait} .5s 1 linear`,
            backfaceVisibility: 'hidden',
          },
          '@media (orientation: landscape)': {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            animation: `${rotationLandscape} .5s 1 linear`,
            backfaceVisibility: 'hidden',
            position: 'relative',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            margin: 'auto',
          },
        }}
      >
        <CardMedia component="img" src={playerCard} alt="card" />
      </Card>
    </>
  )
}

export default PlayerCardData
