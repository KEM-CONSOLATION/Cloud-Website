import { useState, useEffect } from "react";
import Portfolio2 from "../assets/portfolio2.svg";
import Portfolio3 from "../assets/portfolio3.svg";
import Portfolio4 from "../assets/portfolio4.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";

const Portfolio = () => {
  const images = [
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio2,
    Portfolio3,
    Portfolio4,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - (isMobile ? 1 : 3) : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (isMobile) {
        return (prevIndex + 1) % images.length;
      } else {
        if (prevIndex >= images.length - 3) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      }
    });
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[69px]">
        <div>
          <p className="py-[8px] px-[12px] inline-block bg-[#D0F7EC] rounded-[20px] font-SatoshiMedium text-[14px] text-[#2B6151]">
            Portfolio
          </p>
          <p className="text-[#061C60] font-Inter font-[600] text-[25px] md:text-[36px]">
            Some of our projects
          </p>
        </div>

        <div className="relative mt-[20px]">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isMobile ? 100 : 100 / 3)
                }%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${
                    isMobile ? "w-full" : "w-[calc(100%/3)]"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-4 items-center mt-[48px]">
            <img
              src={ArrowLeft}
              alt="Previous"
              className="w-[48px] h-[48px] cursor-pointer"
              onClick={prevSlide}
            />
            <img
              src={ArrowRight}
              alt="Next"
              className="w-[48px] h-[48px] cursor-pointer"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
