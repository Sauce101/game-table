import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import HighCard from './pages/HighCard'
import FiveCard from './pages/FiveCard'
import Craps from './pages/Craps'
import PokerDice from './pages/PokerDice'
import Yahtzee from './pages/Yahtzee'
import Error from './pages/Error'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="highcard" element={<HighCard />} />
            <Route path="fivecard" element={<FiveCard />} />
            <Route path="craps" element={<Craps />} />
            <Route path="pokerdice" element={<PokerDice />} />
            <Route path="yahtzee" element={<Yahtzee />} />
            <Route path="lobby" element={<Navigate to="/" />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}
