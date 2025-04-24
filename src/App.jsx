import { Demo } from "./pages/demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topics } from "./pages/topics";
import { ChatScreen } from "./pages/chatScreen";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/chatscreen" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
