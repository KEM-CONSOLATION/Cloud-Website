import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import Footer from "../Components/Footer";

import ContactHeroSection from "../Components/ContactHeroSection";
import FaqSection from "../Components/FaqSection";

const ContactPage = () => {
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
      <ContactHeroSection />
      <FaqSection />
      <div className=" bg-[#B9F4E2] py-[16px]  px-[16px]">
        <p className=" text-[#040A0F] text-[16px] font-SatoshiMedium text-center md:text-center ">
          We are dedicated to improving your digital experience. Our goal is to
          optimize your investment opportunities and strive to provide you with
          the best possible returns.
        </p>
      </div>
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

export default ContactPage;
