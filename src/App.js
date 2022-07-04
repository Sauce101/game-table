import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import Home from './pages'
import HighCardNew from './pages/HighCardNew'
import Craps from './pages/Craps'
import Pokerdice from './pages/Pokerdice'
import YahtzeeNew from './pages/YahtzeeNew'
import FiveCardNew from './pages/FiveCardNew'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Navigate to="/" />} />
          <Route path="/highcard" element={<HighCardNew />} />
          <Route path="/fivecard" element={<FiveCardNew />} />
          <Route path="/craps" element={<Craps />} />
          <Route path="/pokerdice" element={<Pokerdice />} />
          <Route path="/yahtzee" element={<YahtzeeNew />} />
        </Routes>
      </Router>
    </>
  )
}
