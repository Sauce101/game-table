import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Deck from './deck/PlainDeck'
import PlayerCardData from './cardData/PlayerCardData'
import ComputerCardData from './cardData/ComputerCardData'
import DeckCardData from './cardData/DeckCardData'

let playerDeck, computerDeck, playerCard, computerCard

function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

  playerCard = playerDeck.pop()
  computerCard = computerDeck.pop()
}
StartGame()

export default function DeckTwo() {
  const [topcard, setTopcard] = useState(() => {
    return true
  })
  const [nextdeck, setNextdeck] = useState(() => {
    return true
  })

  useEffect(() => {
    playerCard = playerDeck.pop()
    computerCard = computerDeck.pop()
    if (playerDeck.numberOfCards === 0) {
      StartGame()
      setNextdeck(!nextdeck)
    }
  }, [topcard, nextdeck])

  const flipCards = () => setTopcard(!topcard)

  // Card size
  let cardsize = {
    radius: '14px',
    cardWidthL: '55%',
    cardWidthP: '27%',
  }

  return (
    <>
      <Grid
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 5,
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
          mb: 'auto',
        }}
      >
        <Grid item xs={12} sm={4} sx={{ perspective: '1000px' }}>
          {topcard && (
            <PlayerCardData
              playerCard={playerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
          {!topcard && (
            <PlayerCardData
              playerCard={playerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
        </Grid>

        <Grid item xs={12} sm={4} sx={{ perspective: '1000px' }}>
          <DeckCardData
            flipCards={flipCards}
            nextdeck={nextdeck}
            {...cardsize}
          />
        </Grid>

        <Grid item xs={12} sm={4} sx={{ perspective: '1000px' }}>
          {topcard && (
            <ComputerCardData
              computerCard={computerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
          {!topcard && (
            <ComputerCardData
              computerCard={computerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
        </Grid>
      </Grid>
    </>
  )
}
