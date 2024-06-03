import React, { useState } from "react";
import ArrowDown from "../assets/arrowDown.png";
import Line2 from "../assets/line2.svg";
import Services from "../assets/services.png";

const ServicesPageComponent = () => {
  const [isOpen, setIsOpen] = useState([false, false, false]);

  const toggleOpen = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const cardContent = [
    {
      title: "Communication services",
      sections: [
        {
          title: "Messaging services",
          items: [
            "SMS, MMS, and RCS (Rich Communication Services)",
            "Bulk messaging for businesses",
            "SMS-based marketing campaigns",
          ],
        },
        {
          title: "Voice services",
          items: [
            "VoIP (Voice over IP) services",
            "IVR (Interactive Voice Response) systems",
            "Call forwarding and conferencing services",
          ],
        },
      ],
    },
    {
      title: "IT services",
      sections: [
        {
          title: "Cloud services",
          items: [
            "Cloud storage solutions",
            "Cloud infrastructure management",
            "Cloud security services",
          ],
        },
        {
          title: "Technical support",
          items: [
            "24/7 IT support",
            "Remote troubleshooting",
            "On-site technical assistance",
          ],
        },
      ],
    },
    {
      title: "Marketing services",
      sections: [
        {
          title: "Digital marketing",
          items: [
            "Search Engine Optimization (SEO)",
            "Pay-Per-Click (PPC) advertising",
            "Social media marketing",
          ],
        },
        {
          title: "Content creation",
          items: ["Blog writing", "Video production", "Graphic design"],
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 md:py-[69px]"
        data-aos="fade-up"
      >
        <div className="max-w-[852px] mx-auto md:text-center">
          <p className="text-[#061C60] font-Satoshi text-[25px] md:text-[36px] 2xl:text-[64px] 2xl:leading-[72px]">
            Digital acceleration services for{" "}
            <span className="text-[#66E6C1]">business growth</span>
          </p>
        </div>

        <div className="grid gap-[24px] md:flex items-start justify-between">
          {cardContent.map((card, index) => (
            <div
              key={index}
              className="p-[24px] bg-white mt-[80px] max-w-[477px] rounded-[16px]"
            >
              <img src={Services} alt="" className=" " />
              <div className="flex items-center justify-between">
                <p className="font-SatoshiMedium text-[25px] py-[13px] text-[#061C60] flex items-center gap-[10px]">
                  <span>
                    <img src={Line2} alt="" />
                  </span>
                  {card.title}
                </p>
                <img
                  src={ArrowDown}
                  alt=""
                  className={`cursor-pointer transition-transform duration-300 ${
                    isOpen[index] ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleOpen(index)}
                />
              </div>

              {isOpen[index] && (
                <>
                  {card.sections.map((section, secIndex) => (
                    <div key={secIndex} className="mt-[32px]">
                      <p className="font-SatoshiMedium text-[18px] text-[#061C60] py-[8px] border-b border-b-[#E6E7E7] mb-[12px]">
                        {section.title}
                      </p>
                      <div className="grid gap-[16px] ml-[20px]">
                        {section.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="font-SatoshiMedium text-[16px] text-[#575B5E]"
                          >
                            {item}
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPageComponent;
