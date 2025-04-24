import { Demo } from "./pages/demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Topics } from "./pages/topics";
import { SplashScreen } from "./pages/splashScreen";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/" element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
