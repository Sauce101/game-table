import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Deck from './deck/PlainDeck'
import FiveCardData from './cardData/FiveCardData'

let playerDeck, playerCard, playerCardB, playerCardC, playerCardD, playerCardE

function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const fulldeck = Math.ceil(deck.numberOfCards)
  playerDeck = new Deck(deck.cards.slice(0, fulldeck))

  playerCard = playerDeck.pop()
  playerCardB = playerDeck.pop()
  playerCardC = playerDeck.pop()
  playerCardD = playerDeck.pop()
  playerCardE = playerDeck.pop()
}
StartGame()

export default function DeckFive() {
  const [topcard, setTopcard] = useState(() => {
    return true
  })
  const [nextdeck, setNextdeck] = useState(() => {
    return true
  })

  useEffect(() => {
    playerCard = playerDeck.pop()
    playerCardB = playerDeck.pop()
    playerCardC = playerDeck.pop()
    playerCardD = playerDeck.pop()
    playerCardE = playerDeck.pop()
    if (playerDeck.numberOfCards === 0) {
      StartGame()
      setNextdeck(!nextdeck)
    }
  }, [topcard, nextdeck])

  const flipCards = () => setTopcard(!topcard)

  // Card size
  let cardsize = {
    radius: '12px',
    cardWidthL: '65%',
    cardWidthP: '22%',
  }

  const POSITION = [
    playerCard,
    playerCardB,
    playerCardC,
    playerCardD,
    playerCardE,
  ]

  return (
    <>
      <Grid
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateRows: 'repeat(5, 1fr)',
            gap: 3,
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
          },
          my: 'auto',
        }}
      >
        {POSITION.map(spot => (
          <Grid item xs={12} sm={4} sx={{ perspective: '1000px' }} key={spot}>
            {topcard && (
              <FiveCardData
                flipCards={flipCards}
                playerCard={spot}
                nextdeck={nextdeck}
                {...cardsize}
              />
            )}
            {!topcard && (
              <FiveCardData
                flipCards={flipCards}
                playerCard={spot}
                nextdeck={nextdeck}
                {...cardsize}
              />
            )}
          </Grid>
        ))}
      </Grid>
    </>
  )
}
