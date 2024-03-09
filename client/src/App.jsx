import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingpage";
import CreateTestPage from "./pages/CreateTestPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
