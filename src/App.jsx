import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SavedCardsProvider } from './context/SavedCardsContext';
import { AppWrapper } from './components/AppWrapper';
import { GlobalStyles } from './components/GlobalStyles';
import { Swipe } from './pages/Swipe';
import { Topics } from './pages/topics';

const App = () => {
  return (
    <Router>
      <SavedCardsProvider>
        <GlobalStyles />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Topics/>} />
            <Route path="/swipe" element={<Swipe />} />
          </Routes>
        </AppWrapper>
      </SavedCardsProvider>
    </Router>
  );
};

export default App;
