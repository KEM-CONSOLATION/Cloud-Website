import AboutImage from "../assets/mission.png";

const AboutServices = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" py-[8px] px-[12px] inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
          Services
        </p>
        <p className=" text-[#061C60] font-[700] text-[36px]">Our mission</p>
        <div className=" grid place-items-center lg:flex lg:items-start lg:justify-between gap-[20px]">
          <div className=" mt-[24px]">
            <img src={AboutImage} alt="" />
          </div>

          <div className=" max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
            <div className="">
              <p className=" text-[#061C60] font-Satoshi text-[25px] 2xl:text-[36px]">
                Our goal is to empower investors, connecting them with our
                exceptional team at Cloud Integrated Limted and instilling
                confidence in achieving their digital objectives.
              </p>
            </div>

            <p className=" text-[#575B5E] font-SatoshiRegular text-[18px] 2xl:text-[20px]">
              Transform your digital journey with advanced IT services and
              dynamic marketing strategies. Consult with our experts or access
              tailored market insights on our app anytime, anywhere.
            </p>

            <div className="">
              <p className=" py-[16px] px-[28px] inline-block border border-[#0E42E4] rounded-[8px] font-IBM text-[14px] text-[#0E42E4]">
                Partner with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutServices;
