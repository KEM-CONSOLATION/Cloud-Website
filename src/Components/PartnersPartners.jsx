import Mtn from "../assets/mtn.svg";
import Airtel from "../assets/airtel.svg";
import Huawei from "../assets/huawei.svg";
import Nitro from "../assets/nitro.svg";
const PartnersPartners = () => {
  return (
    <div className=" bg-[#FAFAFA    ]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-[1229] 2xl:mx-auto py-[60px]">
        <p className=" text-center text-[25px] md:text-[30px] font-Inter font-[600] text-[#061C60]  ">
          Partners that trust us{" "}
        </p>

        <div className=" justify-center flex-col place-items-center flex sm:flex-row items-center gap-[40px] mt-[40px] 2xl:mt-[80px] sm:justify-between">
          <img src={Nitro} alt="" />
          <img src={Mtn} alt="" />
          <img src={Airtel} alt="" />
          <img src={Huawei} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnersPartners;
