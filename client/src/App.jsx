import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingpage";
import { DashBoard } from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
