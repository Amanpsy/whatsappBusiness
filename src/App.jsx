import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingpage";
import ThankYou from "./components/thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
