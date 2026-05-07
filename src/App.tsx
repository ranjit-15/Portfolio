import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import LandingPage from './components/LandingPage';
import AboutMePage from './components/AboutMePage';
import InterestsPage from './components/InterestsPage';
import GoalsPage from './components/GoalsPage';
import ProjectsPage from './components/ProjectsPage';
import FloatingShapes from './components/FloatingShapes';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/goals" element={<GoalsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <FloatingShapes />
      <div className="min-h-screen flex flex-col relative z-10">
        <Router>
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}
