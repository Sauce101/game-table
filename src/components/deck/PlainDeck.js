// SPADES
import S2 from '../../assets/cards/plain/2S.svg'
import S3 from '../../assets/cards/plain/3S.svg'
import S4 from '../../assets/cards/plain/4S.svg'
import S5 from '../../assets/cards/plain/5S.svg'
import S6 from '../../assets/cards/plain/6S.svg'
import S7 from '../../assets/cards/plain/7S.svg'
import S8 from '../../assets/cards/plain/8S.svg'
import S9 from '../../assets/cards/plain/9S.svg'
import ST from '../../assets/cards/plain/TS.svg'
import SJ from '../../assets/cards/plain/JS.svg'
import SQ from '../../assets/cards/plain/QS.svg'
import SK from '../../assets/cards/plain/KS.svg'
import SA from '../../assets/cards/plain/AS.svg'
// DIAMONDS
import D2 from '../../assets/cards/plain/2D.svg'
import D3 from '../../assets/cards/plain/3D.svg'
import D4 from '../../assets/cards/plain/4D.svg'
import D5 from '../../assets/cards/plain/5D.svg'
import D6 from '../../assets/cards/plain/6D.svg'
import D7 from '../../assets/cards/plain/7D.svg'
import D8 from '../../assets/cards/plain/8D.svg'
import D9 from '../../assets/cards/plain/9D.svg'
import DT from '../../assets/cards/plain/TD.svg'
import DJ from '../../assets/cards/plain/JD.svg'
import DQ from '../../assets/cards/plain/QD.svg'
import DK from '../../assets/cards/plain/KD.svg'
import DA from '../../assets/cards/plain/AD.svg'
// HEARTS
import H2 from '../../assets/cards/plain/2H.svg'
import H3 from '../../assets/cards/plain/3H.svg'
import H4 from '../../assets/cards/plain/4H.svg'
import H5 from '../../assets/cards/plain/5H.svg'
import H6 from '../../assets/cards/plain/6H.svg'
import H7 from '../../assets/cards/plain/7H.svg'
import H8 from '../../assets/cards/plain/8H.svg'
import H9 from '../../assets/cards/plain/9H.svg'
import HJ from '../../assets/cards/plain/JH.svg'
import HT from '../../assets/cards/plain/TH.svg'
import HQ from '../../assets/cards/plain/QH.svg'
import HK from '../../assets/cards/plain/KH.svg'
import HA from '../../assets/cards/plain/AH.svg'
// CLUBS
import C2 from '../../assets/cards/plain/2C.svg'
import C3 from '../../assets/cards/plain/3C.svg'
import C4 from '../../assets/cards/plain/4C.svg'
import C5 from '../../assets/cards/plain/5C.svg'
import C6 from '../../assets/cards/plain/6C.svg'
import C7 from '../../assets/cards/plain/7C.svg'
import C8 from '../../assets/cards/plain/8C.svg'
import C9 from '../../assets/cards/plain/9C.svg'
import CJ from '../../assets/cards/plain/JC.svg'
import CT from '../../assets/cards/plain/TC.svg'
import CQ from '../../assets/cards/plain/QC.svg'
import CK from '../../assets/cards/plain/KC.svg'
import CA from '../../assets/cards/plain/AC.svg'

const SPADES = [S2, S3, S4, S5, S6, S7, S8, S9, ST, SJ, SQ, SK, SA]
const DIAMONDS = [D2, D3, D4, D5, D6, D7, D8, D9, DT, DJ, DQ, DK, DA]
const HEARTS = [H2, H3, H4, H5, H6, H7, H8, H9, HT, HJ, HQ, HK, HA]
const CLUBS = [C2, C3, C4, C5, C6, C7, C8, C9, CT, CJ, CQ, CK, CA]

const freshDeck = SPADES.concat(DIAMONDS, HEARTS, CLUBS)
// let cards = freshDeck
// try this
// const Deck =  {
//   cards: freshDeck,

//   numberOfCards: function() {
//     return cards.length
//   },

//   pop: function() {
//     return cards.shift()
//   },

//   shuffle: function() {
//     for (let i = numberOfCards - 1; i > 0; i--) {
//       const newIndex = Math.floor(Math.random() * (i + 1))
//       const oldValue = cards[newIndex]
//       cards[newIndex] = cards[i]
//       cards[i] = oldValue
//     }
//   }
// }

// OG
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
