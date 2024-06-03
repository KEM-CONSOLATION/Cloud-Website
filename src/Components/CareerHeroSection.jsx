import { Typewriter } from "react-simple-typewriter";
import HeroImage from "../assets/handshake.png";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

const CareerHeroSection = () => {
  return (
    <div className=" h-full md:h-screen bg-cover  bg-center bg-[#020406]">
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] md:flex items-center justify-between   max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className=" md:max-w-[500px] 2xl:max-w-[700px] mt-[60px] md:mt-0">
            <p className="font-Satoshi text-[48px] 2xl:text-[64px] text-[#FFFFFF]  md:leading-[60px]">
              <Typewriter
                words={["How our clients are leading the change."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={300}
                delaySpeed={1000}
              />
            </p>
            <p className="max-w-[600px] font-Satoshi-regular  text-[20px] text-[#FFFFFF] my-[32px]">
              We have helped 600+ companies accelerate their business with
              top-notch technology solutions.
            </p>
            <a className=" hidden md:inline-block px-[28px] py-[16px] rounded-[8px] text-[#141414] bg-[#ffffff] font-IBM text-[18px] font-[500]">
              Partner with us
            </a>
          </div>

          <div className=" max-w-[600px] my-[40px] md:my-0">
            <img src={HeroImage} alt="" className=" w-full mb-[24px] md:mb-0" />
            <a className=" md:hidden text-center block mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-[#0E42E4] text-[#ffffff] md:text-[#141414] font-IBM text-[18px] font-[500]">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
