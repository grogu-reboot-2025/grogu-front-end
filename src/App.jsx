import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SavedCardsProvider } from "./context/SavedCardsContext";
import { AppWrapper } from "./components/AppWrapper";
import { GlobalStyles } from "./components/GlobalStyles";
import { Swipe } from "./pages/Swipe";
import { Topics } from "./pages/topics";
import { ChatScreen } from "./pages/chatScreen";
import { SplashScreen } from "./pages/splashScreen";

const App = () => {
  return (
    <Router>
      <SavedCardsProvider>
        <GlobalStyles />
        <AppWrapper>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/swipe" element={<Swipe />} />
            <Route path="/chat" element={<ChatScreen />} />            
          </Routes>
        </AppWrapper>
      </SavedCardsProvider>
    </Router>
  );
};

export default App;
