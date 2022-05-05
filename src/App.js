import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages'
import HighCard from './pages/HighCard'
import Craps from './pages/Craps'
import Pokerdice from './pages/Pokerdice'
import Yahtzee from './pages/Yahtzee'
import FiveCard from './pages/FiveCard'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Navigate to="/" />} />
          <Route path="/highcard" element={<HighCard />} />
          <Route path="/fivecard" element={<FiveCard />} />
          <Route path="/craps" element={<Craps />} />
          <Route path="/pokerdice" element={<Pokerdice />} />
          <Route path="/yahtzee" element={<Yahtzee />} />
        </Routes>
      </Router>
    </>
  )
}
