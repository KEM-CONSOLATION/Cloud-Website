import { useState, useEffect } from "react";
import Portfolio2 from "../assets/portfolio2.svg";
import Portfolio3 from "../assets/portfolio3.svg";
import Portfolio4 from "../assets/portfolio4.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";

const Portfolio = () => {
  const images = [Portfolio2, Portfolio3, Portfolio4, Portfolio4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      setTouchStartX(touch.clientX);
    };

    const handleTouchMove = (e) => {
      if (!touchStartX) return;
      const touch = e.touches[0];
      const touchEndX = touch.clientX;
      if (touchStartX - touchEndX > 75) {
        nextSlide();
        setTouchStartX(null);
      }
      if (touchStartX - touchEndX < -75) {
        prevSlide();
        setTouchStartX(null);
      }
    };

    const slider = document.getElementById("slider");

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const sliderContainerStyles = {
    display: "flex",
    overflow: "hidden",
    transition: "transform 0.8s ease-in-out",
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
          <div id="slider" style={sliderContainerStyles}>
            {images
              .slice(
                currentIndex,
                currentIndex + (window.innerWidth < 768 ? 1 : 3)
              )
              .map((image, index) => (
                <div key={index} className="min-w-[100%] md:min-w-[33.33%]">
                  <img
                    src={image}
                    alt={`Portfolio ${index + 1}`}
                    className="mx-auto"
                  />
                </div>
              ))}
          </div>
          <div className="flex items-center gap-[24px] mt-4">
            <img src={ArrowLeft} alt="Previous" onClick={prevSlide} />
            <img src={ArrowRight} alt="Next" onClick={nextSlide} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
