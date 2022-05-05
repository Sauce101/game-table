// Yahtzee Die
const SHOW = [
  'translateZ(-50px) rotateY(0deg)',
  'translateZ(-50px) rotateY(-90deg)',
  'translateZ(-50px) rotateY(-180deg)',
  'translateZ(-50px) rotateY(90deg)',
  'translateZ(-50px) rotateX(-90deg)',
  'translateZ(-50px) rotateX(90deg)',
]

const freshDeck = SHOW

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

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
