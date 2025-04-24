import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SavedCardsProvider } from "./context/SavedCardsContext";
import { GlobalStyles } from "./components/GlobalStyles";
import { AppWrapper } from "./components/AppWrapper";
import { Swipe } from "./pages/Swipe";
import { Topics } from "./pages/topics";
import { ChatList } from "./pages/chatList";
import { SplashScreen } from "./pages/splashScreen";
import { ProductsContextProvider } from "./context/ProductsContext";

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
          </Routes>
        </AppWrapper>
      </SavedCardsProvider>
    </Router>
  );
};

export default App;
