import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.svg";

const Footer = () => {
  return (
    <div className=" bg-white text-white max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]">
      <div className="  md:flex items-center justify-between">
        <div className=" border-b border-black md:border-none">
          <img src={Logo} alt="" />
          <div className=" py-[24px] grid md:flex gap-[24px] items-center text-[18px] md:text-[14px] font-IBM font-[600] md:font-SatoshiMedium text-[#061C60]">
            <Link to="/about">
              <p className=" ">About</p>
            </Link>
            <Link to="/services">
              <p className="">Services</p>
            </Link>
            <Link to="/partners">
              <p className="">Partners</p>
            </Link>
            <Link to="/careers">
              <p className="">Careers</p>
            </Link>
            <Link to="/contact">
              <p className="">Contact</p>
            </Link>
          </div>
        </div>

        <div className="  border-b border-black md:border-none grid md:flex items-start gap-[34px] py-[24px]">
          <p className=" hidden md:block font-SatoshiMedium text-[14px] text-[#061C60]">
            Follow us
          </p>
          <div className="  grid gap-[24px] md:gap-[5px]  text-[18px] md:text-[14px] font-[500] text-[#061C60] font-IBM md:font-SatoshiRegular md:text-[#141414]">
            <p className=" ">Linkedin</p>
            <p className="">Twitter</p>
            <p className="">Instagram</p>{" "}
          </div>
        </div>
      </div>

      <div className="font-SatoshiRegular text-[#141414] text-[12px] grid md:flex md:items-center md:justify-between mt-[24px] md:mt-0">
        <p className=" ">
          Copyright © 2024 Cloud Integrated Limited. All rights reserved.
        </p>
        <div className=" grid md:flex items-center gap-[24px] mt-[24px] md:mt-0 text-[18px] md:text-[12px] font-[600] md:font-SatoshiRegular md:font-normal text-[#061C60] md:text-[#141414] font-IBM">
          <Link to="/terms">
            <p className=" cursor-pointer">Terms of Service</p>
          </Link>
          <Link to="/privacy">
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
