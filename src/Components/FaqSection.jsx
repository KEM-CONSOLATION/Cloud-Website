import { useState } from "react";
import Arrow from "../assets/ChevronRight.svg";
import Arrow2 from "../assets/chevron.svg";
const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Can you create custom products on demand?",
      answer:
        "Yes, we specialize in creating custom products tailored to your specifications and requirements.",
    },
    {
      id: 2,
      question: "Do you provide technical and customer support?",
      answer:
        "Yes, we offer comprehensive technical and customer support to ensure all your needs are met.",
    },
    {
      id: 3,
      question: "What's the financial structure of your business?",
      answer:
        "Our financial structure is robust, allowing us to invest in cutting-edge technology and top talent to deliver exceptional services.",
    },
    {
      id: 4,
      question:
        "Are there employment opportunities in Cloud Integrated Limited?",
      answer:
        "Yes, we are always looking for talented individuals to join our team. Please visit our careers page for current openings.",
    },
    {
      id: 5,
      question: "Can you develop my product in other languages?",
      answer:
        "Absolutely! We have expertise in developing products in multiple languages to cater to a global audience.",
    },
  ];

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className=" bg-[#FFFFFF] ">
      <div
        className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[120px]"
        data-aos="fade-up"
      >
        <p className=" text-[#061C60] font-IBM font-[700] text-[36px] text-center">
          Frequently Asked Questions
        </p>
        <div className=" mt-[24px]">
          {questions.map((item) => (
            <div key={item.id} className="mb-4 border-b">
              <div
                className="flex justify-between items-center cursor-pointer py-4"
                onClick={() => toggleQuestion(item.id)}
              >
                <p className="  font-IBM md:font-Manrope font-[600] text-[18px] lg:text-[24px] text-[#061C60]">
                  {item.question}
                </p>
                <div
                  className={`transform transition-transform ${
                    openQuestion === item.id ? " rotate-180" : "rotate-0"
                  }`}
                >
                  <img src={Arrow} alt="" className=" hidden md:block" />
                  <img src={Arrow2} alt="" className=" block md:hidden" />
                </div>
              </div>
              {openQuestion === item.id && (
                <div className="py-2">
                  <p className=" text-[16px] text-[#061C60]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
