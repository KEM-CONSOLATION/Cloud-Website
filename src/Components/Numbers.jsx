import Circle from "../assets/circle.svg";
import Border from "../assets/border.svg";
import { Typewriter } from "react-simple-typewriter";
import Counter from "./Counter";

const Numbers = () => {
  return (
    <div className=" bg-[#061C60]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <div className=" md:flex items-center justify-between">
          <div className=" max-w-[600px]">
            <p className=" text-[30px] md:text-[64px] font-SatoshiMedium text-white md:leading-[72px]">
              {" "}
              <Typewriter
                words={["Our numbers speak for themselves "]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={300}
                delaySpeed={1000}
              />
            </p>
          </div>

          <div className=" hidden md:block">
            <img src={Circle} alt="" />
          </div>
        </div>

        <div className=" text-white grid md:grid-cols-2 md:place-items-start lg:flex items-center justify-between">
          <div className=" flex items-center gap-[50px]">
            <img src={Border} alt="" />
            <div className=" grid gap-[32px]">
              <Counter
                initialValue={0}
                interval={1}
                targetValue={6}
                value={""}
              />
              <p className=" text-[#E7ECFC] font-SatoshiMedium text-[18px] md:text-[20px]">
                Hubs Around the world
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-[50px]">
            <img src={Border} alt="" />
            <div className=" grid gap-[32px]">
              <Counter
                initialValue={0}
                interval={5}
                targetValue={300}
                value={"+"}
              />
              <p className=" text-[#E7ECFC] font-SatoshiMedium text-[18px] md:text-[20px]">
                Startups Supported
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center gap-[50px]">
            <img src={Border} alt="" />
            <div className=" grid gap-[32px]">
              <Counter
                initialValue={0}
                interval={1}
                targetValue={20}
                value={""}
              />
              <p className=" text-[#E7ECFC] font-SatoshiMedium text-[18px] md:text-[20px]">
                Corporate Partners
              </p>
            </div>
          </div>{" "}
          <div className=" flex items-center gap-[50px]">
            <img src={Border} alt="" />
            <div className=" grid gap-[32px]">
              <Counter
                initialValue={0}
                interval={5}
                targetValue={235}
                value={"M"}
                currency={"$"}
              />
              <p className=" text-[#E7ECFC] font-SatoshiMedium text-[18px] md:text-[20px]">
                Total raised since 2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
