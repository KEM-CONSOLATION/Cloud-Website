import Arrow from "../assets/arrowLink.svg";

const Openings = () => {
  return (
    <div className=" bg-[#FFFFFF] ">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" text-[#061C60] font-Manrope font-[700] text-[36px]">
          Current openings
        </p>
        <div className=" grid items-center">
          <div className="mt-[48px] grid grid-cols-3 items-center gap-[16px] bg-[#FAFAFA] md:bg-transparent py-[60px] md:py-[10px] md:border-b px-[16px] md:px-0">
            <p className="font-SatoshiMedium text-[30px] text-[#061C60]">
              UX{" "}
              <span className="md:hidden">
                {" "}
                <br />
              </span>{" "}
              Designer
            </p>{" "}
            <p className="font-SatoshiMedium text-[20px] text-[#575B5E] text-end md:text-center">
              Remote
            </p>
            <div className=" flex items-center justify-end">
              <img src={Arrow} alt="" />
            </div>
          </div>

          <div className="mt-[48px] grid grid-cols-3 items-center gap-[16px] bg-[#FAFAFA] md:bg-transparent py-[60px] md:py-[10px] md:border-b px-[16px] md:px-0">
            <p className="font-SatoshiMedium text-[30px] text-[#061C60]">
              Site{" "}
              <span className="md:hidden">
                {" "}
                <br />
              </span>{" "}
              engineer
            </p>{" "}
            <p className="font-SatoshiMedium text-[20px] text-[#575B5E] text-end md:text-center">
              Remote
            </p>
            <div className=" flex items-center justify-end">
              <img src={Arrow} alt="" />
            </div>
          </div>

          <div className="mt-[48px] grid grid-cols-3 items-center gap-[16px] bg-[#FAFAFA] md:bg-transparent py-[60px] md:py-[10px] md:border-b px-[16px] md:px-0">
            <p className="font-SatoshiMedium text-[30px] text-[#061C60]">
              Cloud{" "}
              <span className="md:hidden">
                {" "}
                <br />
              </span>{" "}
              engineer
            </p>{" "}
            <p className="font-SatoshiMedium text-[20px] text-[#575B5E] text-end md:text-center">
              Remote
            </p>
            <div className=" flex items-center justify-end">
              <img src={Arrow} alt="" />
            </div>
          </div>

          <div className="mt-[48px] grid grid-cols-3 items-center gap-[16px] bg-[#FAFAFA] md:bg-transparent py-[60px] md:py-[10px] md:border-b px-[16px] md:px-0">
            <p className="font-SatoshiMedium text-[30px] text-[#061C60]">
              Copy{" "}
              <span className="md:hidden">
                {" "}
                <br />
              </span>{" "}
              writer
            </p>{" "}
            <p className="font-SatoshiMedium text-[20px] text-[#575B5E] text-end md:text-center">
              Remote
            </p>
            <div className=" flex items-center justify-end">
              <img src={Arrow} alt="" />
            </div>
          </div>

          <div className="mt-[48px] grid grid-cols-3 items-center gap-[16px] bg-[#FAFAFA] md:bg-transparent py-[60px] md:py-[10px] md:border-b px-[16px] md:px-0">
            <p className="font-SatoshiMedium text-[30px] text-[#061C60]">
              Project{" "}
              <span className="md:hidden">
                {" "}
                <br />
              </span>{" "}
              manager
            </p>{" "}
            <p className="font-SatoshiMedium text-[20px] text-[#575B5E] text-end md:text-center">
              Remote
            </p>
            <div className=" flex items-center justify-end">
              <img src={Arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#B9F4E2] py-[16px] ">
        <p className=" text-[#040A0F] text-[16px] font-SatoshiMedium  md:text-center px-[16px] text-justify">
          We are dedicated to improving your digital experience. Our goal is to
          optimize your investment opportunities and strive to provide you with
          the best possible returns.
        </p>
      </div>
    </div>
  );
};

export default Openings;
