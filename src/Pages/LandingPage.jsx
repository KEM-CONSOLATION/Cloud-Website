import { useEffect, useState } from "react";
import About from "../Components/About";
import HeroSection from "../Components/HeroSection";
import Numbers from "../Components/Numbers";
import Partners from "../Components/Partners";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Launch from "../Components/Launch";
import Footer from "../Components/Footer";
const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <Partners />
      <About />
      <Services />
      <Portfolio />
      <Numbers />
      <Testimonials />
      <Launch />
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#ffffff] text-[#0E42E4] px-4 py-4 rounded-full shadow-lg hover:bg-[#0E42E4] hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
        >
          <RiArrowUpDoubleLine className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default LandingPage;
