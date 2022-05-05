import React from 'react'
import { Card, CardActionArea, CardMedia } from '@mui/material'
import RedDBack from '../../assets/cards/plain/2B.svg'
import DarkDBack from '../../assets/cards/plain/1B.svg'

const DeckCardData = ({ flipCards, nextdeck, ...cardsize }) => {
  return (
    <Card
      sx={{
        '@media (orientation: portrait)': {
          maxWidth: cardsize.cardWidthP,
          borderRadius: cardsize.radius,
          mx: 'auto',
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
          alt="red diamond back"
        />
      </CardActionArea>
    </Card>
  )
}

export default DeckCardData
