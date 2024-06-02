import BG from "../assets/partner.png";
import MobileBG from "../assets/LaunchMobile.png";

const Launch = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      {" "}
      <div
        className="h-[604px]  bg-cover bg-center"
        style={{ backgroundImage: `url(${isMobile ? MobileBG : BG})` }}
      >
        <div className="text-center text-white py-[200px] mx-[40px] md:mx-0">
          <p className="text-[30px] 2xl:text-[64px] font-SatoshiMedium mb-[66px]">
            Launch your product with Cloud integrated
          </p>
          <p className="text-center py-[16px] px-[28px] md:inline-block bg-[#0E42E4] rounded-[8px] font-IBM text-[14px] md:text-[18px] text-[#ffffff]">
            Partner with us
          </p>
        </div>
      </div>
      <div className=" bg-[#B9F4E2] py-[16px]  ">
        <p className=" text-[#040A0F] text-[16px] font-SatoshiMedium text-center">
          We are dedicated to improving your digital experience. Our goal is to
          optimize your investment opportunities and strive to provide you with
          the best possible returns.
        </p>
      </div>
    </>
  );
};

export default Launch;
