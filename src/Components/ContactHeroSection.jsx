import Navbar from "./Navbar";
import "aos/dist/aos.css";
import Chat from "../assets/chatIcon.svg";
import Visit from "../assets/visitIcon.svg";
import Call from "../assets/callIcon.svg";
const ContactHeroSection = () => {
  return (
    <div className=" h-full  bg-cover  bg-center bg-[#FAFAFA]">
      <div className=" ">
        <Navbar />

        <div
          className="    max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[40px] lg:py-[80px]"
          data-aos="fade-up"
        >
          <div className="flex flex-col-reverse md:flex-row items-start justify-between">
            <div className=" grid gap-[24px]">
              <div className=" flex items-start gap-[24px]">
                <img src={Chat} alt="" />
                <div className="">
                  <p className=" font-SatoshiMedium text-[24px] text-[#061C60]">
                    Chat to us
                  </p>
                  <p className=" font-SatoshiRegular text-[18px] text-[#575B5E]">
                    Our friendly team is here to help.
                  </p>
                  <p className="  font-SatoshiMedium text-[16px] text-[#061C60]">
                    support@cloudintegratedinc.com
                  </p>
                </div>
              </div>
              <div className=" flex items-start gap-[24px]">
                <img src={Visit} alt="" />
                <div className=" max-w-[308px]">
                  <p className=" font-SatoshiMedium text-[24px] text-[#061C60]">
                    Visit us
                  </p>
                  <p className=" font-SatoshiRegular text-[18px] text-[#575B5E]">
                    Come say hello at our office HQ
                  </p>
                  <p className="  font-SatoshiMedium text-[16px] text-[#061C60]">
                    401 The Epicentre Lifestyle, 1 Zilly Aggrey Drive, Karmo
                    District, Abuja
                  </p>
                </div>
              </div>
              <div className=" flex items-start gap-[24px]">
                <img src={Call} alt="" />
                <div className="">
                  <p className=" font-SatoshiMedium text-[24px] text-[#061C60]">
                    Call us
                  </p>
                  <p className=" font-SatoshiRegular text-[18px] text-[#575B5E]">
                    Mon - Fri, 9am - 5pm
                  </p>
                  <p className="  font-SatoshiMedium text-[16px] text-[#061C60]">
                    +234703 610 8580
                  </p>
                </div>
              </div>
            </div>

            <div className=" px-[32px] py-[60px] bg-white rounded-[24px] max-w-[700px]">
              <p className=" text-[#061C60] text-[48px] lg:text-[64px] leading-[60px] lg:leading-[64px] font-Satoshi md:font-SatoshiMedium">
                Have any questions? Contact us{" "}
              </p>

              <div className=" mt-[24px] grid gap-[24px]">
                <div className="  grid md:grid-cols-2 gap-[24px]">
                  <div className=" grid gap-[8px]">
                    <label
                      htmlFor=""
                      className=" font-SatoshiMedium text-[14px] text-[#061C60]"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder=" First Name"
                      className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[320px]"
                    />
                  </div>
                  <div className=" grid gap-[8px]">
                    <label
                      htmlFor=""
                      className=" font-SatoshiMedium text-[14px] text-[#061C60]"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder=" Last Name"
                      className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full md:max-w-[320px]"
                    />
                  </div>
                </div>

                <div className=" grid gap-[8px]">
                  <label
                    htmlFor=""
                    className=" font-SatoshiMedium text-[14px] text-[#061C60]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full"
                  />
                </div>

                <div className="grid gap-[8px]">
                  <label
                    htmlFor=""
                    className=" font-SatoshiMedium text-[14px] text-[#061C60]"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter a description..."
                    id=""
                    className=" px-[14px] py-[10px] border border-[#EAECF0] rounded-[8px] w-full h-[128px]"
                  ></textarea>
                </div>

                <div className="">
                  <p className=" bg-[#0E42E4] text-center py-[12px] text-white rounded-[8px] font-SatoshiMedium text-[16px]">
                    Send message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
