import { Demo } from "./pages/demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topics } from "./pages/topics";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
};
