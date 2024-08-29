import { Link } from "react-router-dom";
import HeroImage from "../assets/handshake.png";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
const PartnerHeroSection = () => {
  return (
    <div className=" h-full md:h-screen bg-cover  bg-center bg-[#020406]">
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] md:flex items-center justify-between   max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className=" md:max-w-[500px] 2xl:max-w-[726px]  md:mt-0 ">
            <p className="font-Satoshi text-[64px]  text-[#FFFFFF]  md:leading-[64px] leading-[72px]">
              How our clients <br className=" hidden md:block" /> are leading
              the change.
            </p>
            <p className="max-w-[600px] font-Satoshi-regular  text-[20px] text-[#FFFFFF] my-[32px]">
              We have helped 600+ companies accelerate their business with
              top-notch technology solutions.
            </p>
            <Link to="/contact">
              <a className=" hidden md:inline-block px-[28px] py-[16px] rounded-[8px] text-[#141414] bg-[#ffffff] font-IBM text-[18px] font-[500]">
                Partner with us
              </a>
            </Link>
          </div>

          <div className=" my-[40px] md:my-0">
            <div className="  max-w-[867px] ">
              <img
                src={HeroImage}
                alt=""
                className=" w-full mb-[24px] md:mb-0"
              />
            </div>
            <Link to="/contact">
              <a className=" md:hidden text-center block mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-[#ffffff] text-[#061C60] md:text-[#141414] font-IBM text-[18px] font-[500]">
                Partner with us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerHeroSection;
