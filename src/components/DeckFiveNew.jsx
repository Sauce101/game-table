import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Deck from './deck/PlainDeck'
import FiveDataNew from './cardData/FiveDataNew'

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

export default function DeckFiveNew() {
  const [topcard, setTopcard] = useState(() => {
    return true
  })
  const [nextdeck, setNextdeck] = useState(() => {
    return false
  })

  useEffect(() => {
    playerCard = playerDeck.pop()
    playerCardB = playerDeck.pop()
    playerCardC = playerDeck.pop()
    if (playerDeck.numberOfCards === 0) {
      StartGame()
      setNextdeck(!nextdeck)
    }
  }, [topcard, nextdeck])

  useEffect(() => {
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
    cardWidthPsm: '18%',
    cardWidthP: '24%',
    cardWidthPmd: '16%',
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
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 2,
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
          },
        }}
      >
        {POSITION.map(spot => (
          <Grid
            item
            sx={{
              perspective: '1000px',
            }}
            key={spot}
          >
            {(topcard || !topcard) && (
              <FiveDataNew
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
