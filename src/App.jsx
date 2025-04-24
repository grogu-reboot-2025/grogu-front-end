import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SavedCardsProvider } from "./context/SavedCardsContext";
import { GlobalStyles } from "./components/GlobalStyles";
import { AppWrapper } from "./components/AppWrapper";
import { Swipe } from "./pages/Swipe";
import { Topics } from "./pages/topics";
import { ChatScreen } from "./pages/chatScreen";
import { ChatList } from "./pages/chatList";
import { SplashScreen } from "./pages/splashScreen";
import { ProductsContextProvider } from "./context/ProductsContext";
import { User } from "./pages/UserInfo";

const App = () => {
  return (
    <Router>
      <ProductsContextProvider>
        <SavedCardsProvider>
          <GlobalStyles />
          <AppWrapper>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/user" element={<User />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/swipe" element={<Swipe />} />
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/chatList" element={<ChatList />} />
            </Routes>
          </AppWrapper>
        </SavedCardsProvider>
      </ProductsContextProvider>
    </Router>
  );
};

export default App;
