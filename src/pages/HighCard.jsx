import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Deck from '../components/deck/PlainDeck'
import PcData from '../components/cardData/highCardData/PcData'
import CcData from '../components/cardData/highCardData/CcData'
import DeckData from '../components/cardData/highCardData/DeckData'

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

const HighCard = () => {
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
    cardWidthL: '70%',
    cardWidthPsm: '32%',
    cardWidthP: '40%',
    cardWidthPmd: '26%',
  }

  return (
    <>
      <Grid
        container
        sx={{
          '@media (orientation: portrait)': {
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 3,
          },
          '@media (orientation: landscape)': {
            display: 'grid',
            gridTemplate: '1fr / repeat(3, 1fr)',
            gap: 5,
            px: 5,
          },
        }}
      >
        <Grid item sx={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          {topcard && (
            <PcData playerCard={playerCard} nextdeck={nextdeck} {...cardsize} />
          )}
          {!topcard && (
            <PcData playerCard={playerCard} nextdeck={nextdeck} {...cardsize} />
          )}
        </Grid>

        <Grid item>
          <DeckData flipCards={flipCards} nextdeck={nextdeck} {...cardsize} />
        </Grid>

        <Grid item sx={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          {topcard && (
            <CcData
              computerCard={computerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
          {!topcard && (
            <CcData
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

export default HighCard
