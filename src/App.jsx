import { Demo } from "./pages/demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topics } from "./pages/topics";
import { ChatList } from "./pages/chatList";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/chatlist" element={<ChatList />} />
      </Routes>
    </BrowserRouter>
  );
};
