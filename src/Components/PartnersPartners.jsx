import Mtn from "../assets/mtn.svg";
import Airtel from "../assets/airtel.svg";
import Huawei from "../assets/huawei.svg";
import Nitro from "../assets/nitro.svg";
const PartnersPartners = () => {
  return (
    <div className=" bg-[#FAFAFA    ]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <p className=" text-center text-[25px] md:text-[30px] font-Inter font-[600] text-[#061C60]  ">
          Partners that trust us{" "}
        </p>

        <marquee direction="left">
          <div className=" flex items-center gap-[40px] mt-[40px] 2xl:mt-[80px] justify-center">
            <img src={Nitro} alt="" />
            <img src={Mtn} alt="" />
            <img src={Airtel} alt="" />
            <img src={Huawei} alt="" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default PartnersPartners;
