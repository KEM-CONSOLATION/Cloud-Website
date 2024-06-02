import Mtn from "../assets/mtn.svg";
import Airtel from "../assets/airtel.svg";
import Huawei from "../assets/huawei.svg";
import Nitro from "../assets/nitro.svg";
const Partners = () => {
  return (
    <div className=" py-[29px] bg-[#B9F4E2]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 place-items-center grid md:flex items-center gap-[20px]">
        <div className=" ">
          <p className=" font-SatoshiMedium text-[18px] md:text-[30px]">
            Working with world class partners
          </p>
        </div>

        <div className="">
          <marquee direction="left">
            <div className=" flex items-center gap-[40px]">
              <img src={Nitro} alt="" />
              <img src={Mtn} alt="" />
              <img src={Airtel} alt="" />
              <img src={Huawei} alt="" />
            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Partners;
