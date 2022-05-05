import { Card, CardMedia } from '@mui/material'
import { keyframes } from '@emotion/react'
import RedDBack from '../../assets/cards/plain/2B.svg'
import DarkDBack from '../../assets/cards/plain/1B.svg'

const ComputerCardData = ({ computerCard, nextdeck, ...cardsize }) => {
  const rotationPortrait = keyframes({
    from: { transform: 'rotateX(0deg)' },
    to: { transform: 'rotateX(360deg)' },
  })
  const backsidePortrait = keyframes({
    from: { transform: 'rotateX(180deg)' },
    to: { transform: 'rotateX(540deg)' },
  })
  const rotationLandscape = keyframes({
    from: { transform: 'rotateY(0deg)' },
    to: { transform: 'rotateY(360deg)' },
  })
  const backsideLandscape = keyframes({
    from: { transform: 'rotateY(180deg)' },
    to: { transform: 'rotateY(540deg)' },
  })

  return (
    <>
      <Card
        sx={{
          '@media (orientation: portrait)': {
            maxWidth: cardsize.cardWidthP,
            borderRadius: cardsize.radius,
            position: 'absolute',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
            animation: `${backsidePortrait} .3s 1 linear`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          },
          '@media (orientation: landscape)': {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            marginLeft: '15%',
            animation: `${backsideLandscape} .3s 1 linear`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
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
        sx={{
          '@media (orientation: portrait)': {
            maxWidth: cardsize.cardWidthP,
            borderRadius: cardsize.radius,
            position: 'relative',
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
            margin: 'auto',
            animation: `${rotationPortrait} .3s 1 linear`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          },
          '@media (orientation: landscape)': {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            marginLeft: '15%',
            animation: `${rotationLandscape} .3s 1 linear`,
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            position: 'relative',
            width: '100%',
          },
        }}
      >
        <CardMedia component="img" src={computerCard} alt="card" />
      </Card>
    </>
  )
}

export default ComputerCardData
