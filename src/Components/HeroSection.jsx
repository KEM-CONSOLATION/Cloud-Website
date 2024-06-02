import { Typewriter } from "react-simple-typewriter";
import BG from "../assets/GradientDark.svg";
import HeroImage from "../assets/HeroMessage.svg";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
const HeroSection = () => {
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
          <div className="max-w-[758px] ">
            <p className="font-Satoshi text-[48px] text-white md:leading-[60px]">
              <Typewriter
                words={[
                  "       Customised Integration Solutions for Modern Businesses. ",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={300}
                delaySpeed={1000}
              />
            </p>
            <p className="max-w-[600px] font-Satoshi-regular  text-[20px] text-white my-[32px]">
              Enhance Productivity and Connectivity with Cloud Integration
              Services. We&apos;re all about levelling up your product journey.
            </p>
            <a className=" hidden md:inline-block px-[28px] py-[16px] rounded-[8px] bg-white text-[#141414] font-IBM text-[18px] font-[500]">
              Partner with us
            </a>
          </div>

          <div className=" max-w-[777px] my-[40px] md:my-0">
            <img src={HeroImage} alt="" className=" w-full mb-[24px] md:mb-0" />
            <a className=" md:hidden text-center block mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-white text-[#061C60] md:text-[#141414] font-IBM text-[18px] font-[500]">
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
