import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutMePage from './components/AboutMePage';
import InterestsPage from './components/InterestsPage';
import FreshmanExperiencePage from './components/FreshmanExperiencePage';
import GoalsPage from './components/GoalsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/freshman" element={<FreshmanExperiencePage />} />
        <Route path="/goals" element={<GoalsPage />} />
      </Routes>
    </Router>
  );
}
