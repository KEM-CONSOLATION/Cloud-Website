import Vas from "../assets/vas.svg";
import Games from "../assets/games.svg";
import Lottery from "../assets/lottery.svg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=" bg-[#ffffff]">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 md:py-[69px]"
        data-aos="fade-up"
      >
        <div className=" max-w-[852px] mx-auto md:text-center">
          <p className=" py-[8px] px-[12px] inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
            Services
          </p>
          <p className=" text-[#061C60] font-Satoshi text-[25px] md:text-[36px] 2xl:text-[64px] 2xl:leading-[72px]">
            Discover our product offerings
          </p>
        </div>

        <div className=" grid gap-[100px]">
          <div className=" flex flex-col-reverse gap-[20px] md:flex-row items-center justify-between">
            <div className=" max-w-[477px]">
              <p className=" hidden mb-[24px] py-[8px] px-[12px] md:inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
                Services
              </p>
              <p className=" font-Inter font-[600] text-[#061C60] text-[30px] md:text-[36px]">
                VAS
              </p>
              <p className=" font-SatoshiRegular text-[20px] text-[#575B5E]  leading-[30px] py-[32px]">
                With enhanced user experiences and optimized functionality, our
                VAS offerings are rich enough to cater to every aspect of your
                online presence, ensuring maximum engagement and satisfaction
                for your audience.Sub; Caller Ring back tune, Airtime & Data
                solutions, Billing solutions, USSD integration
              </p>

              <div className=" max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
                <div className="">
                  <Link to="/services">
                    <p className=" text-center py-[16px] px-[28px] md:inline-block border border-[#0E42E4] rounded-[8px] font-IBM text-[14px] text-[#0E42E4]">
                      See more
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" ">
              <img src={Vas} alt="" className=" " />
            </div>
          </div>

          <div className="grid gap-[20px] md:flex items-center justify-between">
            <div className="">
              <img src={Games} alt="" />
            </div>
            <div className="max-w-[477px] ">
              <p className="hidden mb-[24px] py-[8px] px-[12px] md:inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
                Services
              </p>
              <p className="font-Inter font-[600] text-[#061C60] text-[30px] md:text-[36px]">
                Games
              </p>
              <p className="font-SatoshiRegular text-[20px] text-[#575B5E] leading-[30px] py-[32px]">
                Create a thrilling experience with our top-tier game development
                solutions! From concept to launch, we&apos;ll bring your vision
                to life, creating immersive worlds and gameplay that keeps all
                your players coming back.
              </p>
              <div className="max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
                <div>
                  <Link to="/services">
                    <p className="text-center py-[16px] px-[28px] md:inline-block border border-[#0E42E4] rounded-[8px] font-IBM text-[14px] text-[#0E42E4]">
                      See more
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col-reverse gap-[20px] md:flex-row items-center justify-between">
            <div className=" max-w-[477px]">
              <p className=" hidden mb-[24px] py-[8px] px-[12px] md:inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
                Services
              </p>
              <p className=" font-Inter font-[600] text-[#061C60] text-[30px] md:text-[36px]">
                Lottery & Trivia games
              </p>
              <p className=" font-SatoshiRegular text-[20px] text-[#575B5E]  leading-[30px] py-[32px]">
                Ready to have your audience play and win? Provide them with the
                ultimate excitement of lottery gaming with our setup service and
                turn dreams into reality with each lucky draw. Let the games
                begin!
              </p>

              <div className=" max-w-[500px] 2xl:max-w-[644px] grid gap-[24px]">
                <div className="">
                  <Link to="/services">
                    <p className=" text-center py-[16px] px-[28px] md:inline-block border border-[#0E42E4] rounded-[8px] font-IBM text-[14px] text-[#0E42E4]">
                      See more
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" ">
              <img src={Lottery} alt="" className=" " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
