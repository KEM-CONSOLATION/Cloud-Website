import Navbar from "./Navbar";
import "aos/dist/aos.css";
import Career1 from "../assets/career1.png";
import Career2 from "../assets/career2.png";
import Career3 from "../assets/career3.png";
const CareerHeroSection = () => {
  return (
    <div className=" h-full md:h-screen bg-cover  bg-center bg-[#FFFFFF]">
      <div className=" ">
        <Navbar />

        <div
          className=" grid gap-[28px] md:flex items-center justify-between   max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40"
          data-aos="fade-up"
        >
          <div className="">
            <p className=" text-center font-Satoshi text-[#061C60] text-[48px] 2xl:text-[64px]">
              Come work with us
            </p>

            <div className=" mt-[54px] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]">
              <div className=" bg-[#141414] rounded-[12px] p-[24px] max-w-[352px] h-[480px] relative">
                <p className=" text-center font-SatoshiMedium text-[#EEEEEE] text-[25px] md:text-[30px]">
                  Innovative Projects
                </p>
                <p className="  left-[24px] right-[24px] absolute bottom-[24px] font-SatoshiRegular text-[#EEEEEE] text-[18px]">
                  You&apos;ll have the chance to engage in groundbreaking
                  projects that advance the frontiers of our industry, ensuring
                  your work is both thrilling and meaningful.
                </p>
              </div>

              <div className="rounded-[12px]  max-w-[352px] h-[480px]">
                <img src={Career1} alt="" className=" h-full w-full" />
              </div>

              <div className=" grid gap-[24px]">
                <div className=" bg-[#0E42E4] rounded-[12px] p-[24px] ">
                  <p className=" text-center font-SatoshiMedium text-[#EEEEEE] text-[25px] md:text-[30px]">
                    Professional Growth
                  </p>
                </div>
                <img src={Career2} alt="" className=" h-full w-full" />
              </div>

              <div className=" grid gap-[24px]">
                <div className=" bg-[#66E6C1] rounded-[12px] p-[24px] max-w-[352px] h-[336px] relative">
                  <p className=" font-SatoshiMedium text-[#0E42E4] text-[25px] md:text-[30px]">
                    Collaborative Culture
                  </p>
                  <p className=" absolute bottom-[24px] left-[24px] right-[24px] font-SatoshiRegular text-[#0E42E4] text-[18px]">
                    We cultivate a cooperative and inclusive environment where
                    all ideas are respected, and you&apos;ll thrive in a
                    supportive, team-based setting.
                  </p>
                </div>
                <img src={Career3} alt="" className=" " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
