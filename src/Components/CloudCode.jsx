import Layer from "../assets/Layer_1.svg";
import Best from "../assets/BestforBest1.svg";
import Collaboration from "../assets/Collaboration.svg";
import DistantGoalinView from "../assets/DistantGoalinView.svg";

const CloudCode = () => {
  return (
    <div className=" bg-[#FAFAFA]">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" text-[#061C60] font-[700] text-[36px]">The Cloud code</p>

        <div className=" mt-[48px] grid place-items-center md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start ">
          <div className=" grid gap-[32px]">
            <img src={Layer} alt="" />
            <p className=" text-[#061C60] text-[28px] md:text-[30px] font-Inter font-[600]">
              All for you
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              At Cloud Integrated, you gain access to a team of experts spanning
              various fields. We&apos;ve brought together individuals with
              diverse backgrounds, fostering an environment of innovation and
              inclusivity, all for your advantage.
            </p>
          </div>
          <div className=" grid gap-[32px]">
            <img src={Best} alt="" />
            <p className=" text-[#061C60] text-[28px] md:text-[30px] font-Inter font-[600]">
              Better for best
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We&apos;re ambitious, aiming for outstanding products and
              exceptional service, yet constantly seeking ways to enhance our
              offerings.
            </p>
          </div>{" "}
          <div className=" grid gap-[32px]">
            <img src={Collaboration} alt="" />
            <p className=" text-[#061C60] text-[28px] md:text-[30px] font-Inter font-[600]">
              Collaboration
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We collaborate through clear communication and attentive
              listening. Our goal is to make understanding easy and enjoyable,
              leveraging our expertise in the process.
            </p>
          </div>{" "}
          <div className=" grid gap-[32px]">
            <img src={DistantGoalinView} alt="" />
            <p className=" text-[#061C60] text-[28px] md:text-[30px] font-Inter font-[600]">
              Distant goal in view
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We adopt a strategic investing mindset for the long term, yet
              remain flexible and adaptable. Our actions are decisive, guided by
              clear objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCode;
