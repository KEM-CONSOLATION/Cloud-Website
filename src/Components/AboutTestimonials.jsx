import { useState, useEffect } from "react";
import Testimonial1 from "../assets/1.png";
import Iphones from "../assets/iphones.svg";
import Quote from "../assets/quote.svg";
import LeftArrow from "../assets/ArrowLeft.svg";
import RightArrow from "../assets/ArrowRight.svg";

const AboutTestimonials = () => {
  const testimonials = [
    {
      name: "Olushola",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
    {
      name: "Shola",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
    {
      name: "Akin",
      content:
        "My experience with Cloud Integration was nothing short of exceptional. They not only crafted a flawless design and integration but also offered invaluable support in product management. It's like having a complete package with their team—truly remarkable!",
      company: "Video Berekete",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-7xl md:mx-10 mx-[10px] 2xl:max-w-full  py-[60px]">
        <div className="" data-aos="fade-up">
          <div className="flex items-center justify-between">
            <img
              src={LeftArrow}
              alt="Left Arrow"
              className="w-[48px] h-[48px] md:block hidden cursor-pointer"
              onClick={prevSlide}
            />

            <div className="overflow-hidden flex-grow">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex w-full flex-col md:flex-row md:justify-between"
                  >
                    <div className="max-w-[500px]">
                      <img
                        src={Iphones}
                        alt="iPhones"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between max-w-[540px] px-4 md:px-0">
                      <p className="text-[#061C60] font-SatoshiMedium md:font-Inter font-[600] mb-4 text-[30px]">
                        Over the last decade, we’ve helped our clients ship
                        products for multiple platforms
                      </p>
                      <div className="">
                        <img src={Quote} alt="" />
                      </div>
                      <div className="">
                        <p className="text-[#575B5E] font-SatoshiRegular text-[18px] md:text-[20px]">
                          {testimonial.content}
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-[24px] max-w-[530px]">
                        <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
                          <img
                            src={Testimonial1}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center md:text-left">
                          <p className="font-SatoshiMedium text-[20px] text-[#141414]">
                            {testimonial.name}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className=" mt-4">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            className={`h-2 w-2 mx-1 rounded-full ${
                              index === currentIndex
                                ? "bg-[#020406]"
                                : "bg-[#E6E7E7]"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={RightArrow}
              alt="Right Arrow"
              className=" w-[48px] h-[48px]  md:block hidden cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonials;
