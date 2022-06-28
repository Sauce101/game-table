import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Deck from './deck/PlainDeck'
import FiveDataNew from './cardData/FiveDataNew'

let playerDeck, playerCardA, playerCardB, playerCardC, playerCardD, playerCardE

function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const fulldeck = Math.ceil(deck.numberOfCards)
  playerDeck = new Deck(deck.cards.slice(0, fulldeck))

  playerCardA = playerDeck.pop()
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
    playerCardA = playerDeck.pop()
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
    cardWidthL: '100%',
    cardWidthPsm: '18%',
    cardWidthP: '24%',
    cardWidthPmd: '16%',
  }

  let POSITION = [
    { play: playerCardA, spin: '.4s' },
    { play: playerCardB, spin: '.5s' },
    { play: playerCardC, spin: '.6s' },
    { play: playerCardD, spin: '.7s' },
    { play: playerCardE, spin: '.8s' },
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
            gridTemplate: '1fr / repeat(5, 1fr)',
            gap: 5,
            px: 5,
          },
        }}
      >
        {POSITION.map(spot => (
          <Grid
            item
            sx={{
              perspective: '1000px',
            }}
            key={spot.play}
          >
            {(topcard || !topcard) && (
              <FiveDataNew
                flipCards={flipCards}
                playerCard={spot.play}
                spin={spot.spin}
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
