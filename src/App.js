import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import DeckTwoNew from './pages/DeckTwoNew'
import DeckFiveNew from './pages/DeckFiveNew'
import CrapsNew from './pages/CrapsNew'
import PokerDiceNew from './pages/PokerDiceNew'
import DiceYahtzee from './pages/DiceYahtzee'
import Error from './pages/Error'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="highcard" element={<DeckTwoNew />} />
            <Route path="fivecard" element={<DeckFiveNew />} />
            <Route path="craps" element={<CrapsNew />} />
            <Route path="pokerdice" element={<PokerDiceNew />} />
            <Route path="yahtzee" element={<DiceYahtzee />} />
            <Route path="lobby" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
