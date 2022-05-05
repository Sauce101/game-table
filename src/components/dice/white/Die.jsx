// White Dice
import One from '../../../assets/dice/white/one.svg'
import Two from '../../../assets/dice/white/two.svg'
import Three from '../../../assets/dice/white/three.svg'
import Four from '../../../assets/dice/white/four.svg'
import Five from '../../../assets/dice/white/five.svg'
import Six from '../../../assets/dice/white/six.svg'

const FACES = [One, Two, Three, Four, Five, Six]

const freshDeck = FACES

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
