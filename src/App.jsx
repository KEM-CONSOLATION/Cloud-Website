import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollToTop";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";

export default function App() {
  return (
    <div className=" max-w-[1920px] mx-auto ">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>
    </div>
  );
}
