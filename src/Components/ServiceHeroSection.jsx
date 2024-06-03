import { Typewriter } from "react-simple-typewriter";
import BG from "../assets/servicesHero.png";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

const ServiceHeroSection = () => {
  return (
    <div
      className=" h-full md:h-screen bg-cover  bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] md:flex items-start justify-between mt-[100px]   max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className="max-w-[700px] ">
            <p className="font-Satoshi text-[48px] 2xl:text-[64px] text-white md:leading-[60px]">
              <Typewriter
                words={[" Your destination for game-changing experiences. "]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={300}
                delaySpeed={1000}
              />
            </p>
            <p className="max-w-[600px] font-Satoshi-regular  text-[20px] text-white my-[32px]">
              We have helped 600+ companies accelerate their business with
              top-notch technology solutions.
            </p>
            <a className=" hidden md:inline-block px-[28px] py-[16px] rounded-[8px] bg-white text-[#141414] font-IBM text-[18px] font-[500]">
              Partner with us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
