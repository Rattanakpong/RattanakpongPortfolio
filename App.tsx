import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { PageRoute } from './types';
import { AnimatePresence } from 'framer-motion';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-off-white font-sans selection:bg-white selection:text-black">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.WORK} element={<Work />} />
            <Route path={PageRoute.PROFILE} element={<Profile />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;