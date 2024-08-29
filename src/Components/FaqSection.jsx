import { useState } from "react";
import Arrow from "../assets/ChevronRight.svg";
import Arrow2 from "../assets/chevron.svg";
const FaqSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What services does Cloud Integrated Inc. offer?",
      answer:
        "Cloud Integrated Inc. provides a comprehensive suite of cloud-based solutions,including cloud migration, cloud security, infrastructure management, and data analytics. We also specialize in custom software development, IT consulting, and managed IT services to help businesses optimize their operations and leverage the power of cloud technology. ",
    },
    {
      id: 2,
      question:
        "How does Cloud Integrated Inc. ensure the security of my data? ",
      answer:
        " We prioritize the security of your data by implementing advanced encryption protocols, multi-factor authentication, and continuous monitoring. Our cloud security solutions are designed to protect your data from unauthorized access, cyber threats, and data breaches. We also adhere to industry standards and compliance regulations to ensure the highest level of security for your business.",
    },
    {
      id: 3,
      question: "What industries does Cloud Integrated Inc. serve?",
      answer:
        "Cloud Integrated Inc. serves a wide range of industries, including finance, healthcare, retail, manufacturing, and technology. Our cloud solutions are tailored to meet the unique needs of each industry, helping businesses of all sizes to streamline their operations, reduce costs, and enhance productivity. ",
    },
    {
      id: 4,
      question: "Can Cloud Integrated Inc. help with cloud migration?",
      answer:
        " Yes, we specialize in cloud migration services. Our team of experts will assess your current IT infrastructure, develop a customized migration plan, and execute the migration with minimal disruption to your business. We ensure a smooth transition to the cloud, enabling you to take advantage of the scalability, flexibility, and cost-efficiency of cloud technology.",
    },
    {
      id: 5,
      question:
        " What makes Cloud Integrated Inc. different from other cloud service providers?",
      answer:
        "Cloud Integrated Inc. stands out due to our personalized approach, deep technical expertise, and commitment to customer satisfaction. We work closely with our clients to understand their unique needs and deliver tailored solutions that drive business growth. Our team is dedicated to providing ongoing support and ensuring that our clients maximize the value of their cloud investments.",
    },
    {
      id: 6,
      question:
        " How does Cloud Integrated Inc. support businesses in their digital transformation journey? ",
      answer:
        "We assist businesses in their digital transformation by providing end-to-end solutions that include cloud strategy development, implementation, and ongoing management. Our services help businesses modernize their IT infrastructure, enhance customer experiences, and improve operational efficiency through the adoption of cutting-edge cloud technologies.",
    },

    {
      id: 7,
      question:
        "What is the process for getting started with Cloud Integrated Inc.?",
      answer:
        " Getting started with Cloud Integrated Inc. is easy. Simply contact us via our website or phone, and our team will schedule a consultation to understand your business needs. We will then provide a customized proposal outlining the recommended services and solutions. Once the proposal is accepted, our team will begin the implementation process, ensuring a seamless integration of our services into your existing operations. ",
    },

    {
      id: 8,
      question:
        " Does Cloud Integrated Inc. offer support and maintenance services? ",
      answer:
        " Yes, we offer comprehensive support and maintenance services to ensure the ongoing performance and reliability of your cloud infrastructure. Our support services include 24/7 monitoring, troubleshooting, software updates, and regular system maintenance. We are committed to providing prompt and effective support to keep your business running smoothly.",
    },
    {
      id: 9,
      question:
        "Can Cloud Integrated Inc. help with compliance and regulatory requirements?",
      answer:
        "Absolutely. We understand the importance of compliance in various industries and offer solutions that help businesses meet regulatory requirements. Our team stays up-to-date with industry standards and compliance regulations to ensure that your cloud environment is secure, compliant, and ready to meet any audit requirements. ",
    },
    {
      id: 10,
      question:
        "What are the costs associated with Cloud Integrated Inc.’s services?",
      answer:
        "The cost of our services varies depending on the specific needs of your business and the complexity of the solutions required. We offer flexible pricing models, including pay-as-you-go, subscription-based, and custom pricing options. During your initial consultation, we will provide a detailed cost estimate based on your unique requirements and budget.",
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
