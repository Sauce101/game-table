// Poker Dice
import Ace from '../../../assets/dice/poker/ace.svg'
import King from '../../../assets/dice/poker/king.svg'
import Queen from '../../../assets/dice/poker/queen.svg'
import Jack from '../../../assets/dice/poker/jack.svg'
import Ten from '../../../assets/dice/poker/ten.svg'
import Nine from '../../../assets/dice/poker/nine.svg'

const SPADES = [Ace, King, Queen, Jack, Ten, Nine]

const freshDeck = SPADES

export default class Deck {
  constructor(cards = freshDeck) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
