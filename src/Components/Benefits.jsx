import Balance from "../assets/balance.svg";
import Box from "../assets/box.svg";
import Development from "../assets/development.svg";
import Growth from "../assets/growth.svg";
import Idea from "../assets/idea.svg";
import MoneyBag from "../assets/moneyBag.svg";
import Social from "../assets/social.svg";
import Teamwork from "../assets/teamwork.svg";

const Benefits = () => {
  return (
    <div className=" bg-[#FAFAFA] ">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" text-[#061C60] font-[700] text-[36px]">
          Benefits of working with us
        </p>

        <div className=" mt-[48px] grid  place-items-center md:grid-cols-2 lg:grid-cols-4 gap-[24px] items-start ">
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={MoneyBag} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Competitive Compensation
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              Our organization offers competitive salaries and performance-based
              bonuses to reward your hard work and dedication.
            </p>
          </div>
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Growth} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Professional Development
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We invest in our employees&apos; growth by offering continuous
              learning opportunities, professional development programs.
            </p>
          </div>
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Balance} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Work-Life Balance
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We offer flexible schedules and remote work options to support a
              healthy work-life balance.
            </p>
          </div>
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Social} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Community Engagement
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We&apos;re committed to community impact, offering opportunities
              for volunteerism and social initiatives.
            </p>
          </div>
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Teamwork} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Collaborative Culture
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We foster a collaborative, inclusive culture where everyone&apos;s
              ideas are valued, and you&apos;ll work in a supportive,
              team-oriented environment.
            </p>
          </div>{" "}
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Idea} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Innovative Projects
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              You&apos;ll have the opportunity to work on cutting-edge projects
              that push the boundaries of our industry, keeping your work
              exciting and impactful.
            </p>
          </div>{" "}
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Development} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Career Advancement
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We promote from within, offering clear paths for career
              advancement and recognizing your achievements with new
              opportunities.
            </p>
          </div>{" "}
          <div className=" grid gap-[16px] mb-[50px] ">
            <img src={Box} alt="" />
            <p className=" text-[#061C60] text-[20px] md:text-[23px] font-Satoshi">
              Robust Benefits Package
            </p>
            <p className=" font-SatoshiRegular text-[#575B5E] text-[14px] md:text-[18px]">
              We provide a comprehensive benefits package, including health,
              dental, and vision insurance, retirement plans, and generous paid
              time off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
