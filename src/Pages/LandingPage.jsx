import About from "../Components/About";
import HeroSection from "../Components/HeroSection";
import Partners from "../Components/Partners";
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Partners />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
};

export default LandingPage;
