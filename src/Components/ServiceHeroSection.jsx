import { Link } from "react-router-dom";
import BG from "../assets/servicesHero.png";
import Navbar from "./Navbar";
import "aos/dist/aos.css";

const ServiceHeroSection = () => {
  return (
    <div
      className=" h-screen bg-cover  bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] md:flex items-start justify-between mt-[9px] md:mt-[154px]  max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className="max-w-[700px] ">
            <p className="font-Satoshi text-[48px] 2xl:text-[64px] text-white md:leading-[60px]">
              Your destination for game-changing experiences.
            </p>
            <p className="max-w-[600px] font-Satoshi-regular  text-[20px] text-white my-[32px]">
              We have helped 600+ companies accelerate their business with
              top-notch technology solutions.
            </p>
            <Link to="/contact">
              <a className=" block text-center md:inline-block px-[28px] py-[16px] rounded-[8px] bg-white text-[#061C60] md:text-[#141414] font-IBM text-[18px] font-[500]">
                Partner with us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
