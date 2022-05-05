// Craps Die
const SHOW = [
  'translateZ(-100px) rotateY(0deg)',
  'translateZ(-100px) rotateY(-90deg)',
  'translateZ(-100px) rotateY(-180deg)',
  'translateZ(-100px) rotateY(90deg)',
  'translateZ(-100px) rotateX(-90deg)',
  'translateZ(-100px) rotateX(90deg)',
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

  // push(card) {
  //   this.cards.push(card)
  // }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
