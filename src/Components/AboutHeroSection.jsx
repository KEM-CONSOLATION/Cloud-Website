import { Link } from "react-router-dom";
import HeroImage from "../assets/mechanical.png";
import Navbar from "./Navbar";
import "aos/dist/aos.css";
const AboutHeroSection = () => {
  return (
    <div className=" h-full md:h-full pb-[20px] bg-cover  bg-center bg-[#F1EDE8]">
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] lg:flex items-start justify-between  lg:mt-[100px]   max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className="max-w-[765px]">
            <p className="font-Satoshi text-[60px] 2xl:text-[64px] text-[#061C60] md:leading-[72px]  ">
              A creative engine providing bespoke solutions for all your digital
              demands.
            </p>
            <p className="max-w-[587px] font-Satoshi-regular  text-[20px] text-[#575B5E] my-[32px]">
              Our professionals are dedicated to providing innovative solutions
              and strategic insights that drive success for our clients. With
              diverse backgrounds and a passion for excellence, our team
              collaborates closely to tackle complex challenges and deliver
              exceptional results.
            </p>
            <Link to="/contact">
              <a className=" hidden md:inline-block px-[28px] py-[16px] rounded-[8px] bg-[#0E42E4] text-[#ffffff] font-IBM text-[18px] font-[500]">
                Partner with us
              </a>
            </Link>
          </div>

          <div className=" max-w-[653px] my-[40px] md:my-0 ">
            <img src={HeroImage} alt="" className=" w-full mb-[24px] md:mb-0" />
            <Link to="/contact">
              <a className=" md:hidden text-center block mt-[24px] px-[28px] py-[16px] rounded-[8px] bg-[#0E42E4] text-[#ffffff] md:text-[#141414] font-IBM text-[18px] font-[500]">
                Find out more
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
