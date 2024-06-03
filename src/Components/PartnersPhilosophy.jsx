import Cloud from "../assets/partner1.png";

const PartnersPhilosophy = () => {
  return (
    <div className=" bg-[#ffffff    ]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <div className=" grid gap-[32px] max-w-[600px] my-[60px] 2xl:my-[120px]">
          <p className=" text-[#061C60] font-Inter font-[600] text-[30px]  md:text-[48px]">
            Our partnership philosophy
          </p>
          <p className=" text-[#56575C] font-SatoshiRegular text-[20px]">
            We excel at turning vision into reality, prioritizing support
            throughout the business side of product development. With our
            partnership philosophy, we ensure agility, productivity, and no
            budget burnout.
          </p>
        </div>
        <div className=" grid gap-[20px] md:flex items-start justify-between">
          <div className="">
            <img src={Cloud} alt="" />
          </div>
          <div className=" max-w-[550px] 2xl:max-w-[600px] grid md:gap-[32px]">
            <p className=" text-[28px] md:text-[30px] font-Inter font-[600]  text-[#061C60] md:leading-[38px]">
              {" "}
              Delivering high-quality digital solutions is our commitment. Our
              dedication to quality and service standards for our partners
              remains unwavering.
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[16px] md:text-[20px] mt-[32px]">
              Our purpose at Cloud Integrated is to make informed and
              enthusiastic partners who feel a strong connection to Cloud
              Integrate’s exceptional team and are confident in reaching their
              digital goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPhilosophy;
