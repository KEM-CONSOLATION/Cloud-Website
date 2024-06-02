import Logo from "../assets/Logo2.svg";

const Footer = () => {
  return (
    <div className=" bg-white text-white max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[40px]">
      <div className="  md:flex items-center justify-between">
        <div className=" border-b border-black md:border-none">
          <img src={Logo} alt="" />
          <div className=" py-[24px] grid md:flex gap-[24px] items-center text-[18px] md:text-[14px] font-IBM font-[600] md:font-SatoshiMedium text-[#061C60]">
            <p className=" ">About</p>
            <p className="">Services</p> <p className="">Partners</p>{" "}
            <p className="">Careers</p> <p className="">Contact</p>
          </div>
        </div>

        <div className="  border-b border-black md:border-none grid md:flex items-start gap-[34px] py-[24px]">
          <p className=" hidden md:block font-SatoshiMedium text-[14px] text-[#061C60]">
            Follow us
          </p>
          <div className="  grid gap-[24px] md:gap-[5px]  text-[18px] md:text-[14px] font-[600] text-[#061C60] font-IBM md:text-[#141414]">
            <p className=" ">Linkedin</p>
            <p className="">Twitter</p>
            <p className="">Instagram</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
