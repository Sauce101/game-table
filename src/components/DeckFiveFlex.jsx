import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Deck from './deck/PlainDeck'
import FiveData from './cardData/FiveData'

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

export default function DeckFiveFlex() {
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
    cardWidthP: '18%',
  }

  // Card Slots
  const POSITION = [
    playerCard,
    playerCardB,
    playerCardC,
    playerCardD,
    playerCardE,
  ]

  return (
    <>
      <Box
        sx={{
          '@media (orientation: portrait)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // alignItems: 'center',
            // gap: 3,
          },
          '@media (orientation: landscape)': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            // alignItems: 'center',
          },
          my: 'auto',
        }}
      >
        {POSITION.map(spot => (
          <Box
            sx={{
              perspective: '1000px',
            }}
            key={spot}
          >
            {topcard && (
              <FiveData
                flipCards={flipCards}
                playerCard={spot}
                nextdeck={nextdeck}
                {...cardsize}
              />
            )}
            {!topcard && (
              <FiveData
                flipCards={flipCards}
                playerCard={spot}
                nextdeck={nextdeck}
                {...cardsize}
              />
            )}
          </Box>
        ))}
        {/* Seperator */}
      </Box>
    </>
  )
}
