import Cloud from "../assets/cloudInt.png";

const Experts = () => {
  return (
    <div className=" bg-[#ffffff    ]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <div className=" grid gap-[20px] md:flex items-center justify-between">
          <div className=" max-w-[718px] ">
            <p className=" text-[28px] md:text-[36px] font-Inter font-[600] text-[#061C60] md:leading-[44px]">
              {" "}
              Cloud Integrated brings together experts with diverse skillsets,{" "}
              who seek to challenge the status quo.
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[20px] mt-[32px]">
              With our extensive experience in public and private markets,
              top-notch tech engineers, and unique content producers, we&apos;re
              dedicated to making Cloud Integrated stand out for investors,
              regardless of their goals.
            </p>
          </div>

          <div className=" max-w-[447px]">
            <img src={Cloud} alt="" className=" w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experts;
