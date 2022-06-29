import React from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import RedDBack from '../../../assets/cards/plain/2B.svg'
import DarkDBack from '../../../assets/cards/plain/1B.svg'

const DeckCardData = ({ flipCards, nextdeck, ...cardsize }) => {
  return (
    <Card
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
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          // mx: 'auto',
        },
        '@media (orientation: landscape)': {
          maxWidth: cardsize.cardWidthL,
          borderRadius: cardsize.radius,
          mx: 'auto',
        },
      }}
    >
      <CardActionArea
        onClick={flipCards}
        sx={{
          color: 'red',
          ...(nextdeck === false && { color: 'black' }),
        }}
      >
        <CardMedia
          component="img"
          src={nextdeck ? RedDBack : DarkDBack}
          alt="diamond back"
        />
      </CardActionArea>
    </Card>
  )
}

export default DeckCardData
