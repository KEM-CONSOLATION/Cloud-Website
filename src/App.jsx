import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import ScrollToTop from "./Components/ScrollToTop";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import PartnerPage from "./Pages/PartnerPage";
import CareersPage from "./Pages/CareersPage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  return (
    <div className=" max-w-[1920px] mx-auto ">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partners" element={<PartnerPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}
