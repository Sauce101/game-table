// Red Dice
import One from '../../../assets/dice/red/one.svg'
import Two from '../../../assets/dice/red/two.svg'
import Three from '../../../assets/dice/red/three.svg'
import Four from '../../../assets/dice/red/four.svg'
import Five from '../../../assets/dice/red/five.svg'
import Six from '../../../assets/dice/red/six.svg'

const SPADES = [One, Two, Three, Four, Five, Six]

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
