import AboutImage from "../assets/aboutImage.svg";

const About = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" py-[8px] px-[12px] inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
          About us
        </p>
        <div className=" grid place-items-center lg:flex lg:items-start lg:justify-between gap-[20px]">
          <div className=" mt-[24px]">
            <img src={AboutImage} alt="" />
          </div>

          <div className=" max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
            <div className="">
              <p className=" text-[#061C60] font-Satoshi text-[25px] 2xl:text-[36px]">
                With experienced teams and an agile framework, we prioritize our
                clients&apos; commercial goals to deliver the highest business
                value.
              </p>
            </div>

            <div className=" grid md:flex items-start gap-[24px]">
              <p className=" text-[#575B5E] font-SatoshiRegular text-[18px] 2xl:text-[20px]">
                Our agile approach allows us to be flexible and responsive,
                adapting to changes quickly and efficiently to meet the evolving
                needs of our clients.
              </p>
              <p className=" text-[#575B5E] font-SatoshiRegular text-[18px] 2xl:text-[20px]">
                Through collaboration and continuous improvement, we align each
                project with our clients&apos; strategic goals, delivering
                tangible business results.
              </p>
            </div>
            <div className="">
              <p className=" py-[16px] px-[28px] inline-block border border-[#0E42E4] rounded-[8px] font-IBM text-[14px] text-[#0E42E4]">
                View more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
