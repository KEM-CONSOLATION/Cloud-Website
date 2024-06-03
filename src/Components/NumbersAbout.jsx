import { Typewriter } from "react-simple-typewriter";
import Counter from "./Counter";
import { useLocation } from "react-router-dom";

const NumbersAbout = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <div className=" bg-[#ffffff    ]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        {pathName !== "/partners" && (
          <div className=" max-w-[600px] mx-auto">
            <p className=" text-[30px] md:text-[36px] font-Inter font-[600] text-[#061C60] md:leading-[72px]">
              {" "}
              <Typewriter
                words={["Our Numbers speak for themselves "]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={300}
                delaySpeed={1000}
              />
            </p>
          </div>
        )}

        <div className=" text-[#061C60] grid gap-[20px] items-start md:grid-cols-2 md:place-items-start lg:flex lg:items-center lg:justify-between">
          <div className=" grid gap-[32px] text-center">
            <Counter initialValue={0} interval={1} targetValue={6} value={""} />
            <p className=" text-[#061C60] font-SatoshiMedium text-[18px] md:text-[20px]">
              Hubs Around the world
            </p>
          </div>
          <div className=" grid gap-[32px] text-center">
            <Counter
              initialValue={0}
              interval={5}
              targetValue={300}
              value={"+"}
            />
            <p className=" text-[#061C60] font-SatoshiMedium text-[18px] md:text-[20px]">
              Startups Supported
            </p>
          </div>{" "}
          <div className=" grid gap-[32px] text-center">
            <Counter
              initialValue={0}
              interval={1}
              targetValue={20}
              value={""}
            />
            <p className=" text-[#061C60] font-SatoshiMedium text-[18px] md:text-[20px]">
              Corporate Partners
            </p>
          </div>{" "}
          <div className=" grid gap-[32px] text-center">
            <Counter
              initialValue={0}
              interval={5}
              targetValue={235}
              value={"M"}
              currency={"$"}
            />
            <p className=" text-[#061C60] font-SatoshiMedium text-[18px] md:text-[20px]">
              Total raised since 2018
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumbersAbout;
