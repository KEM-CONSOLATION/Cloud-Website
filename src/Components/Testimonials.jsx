import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from "../assets/1.png";

const Testimonials = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-7xl md:mx-10 mx-5 2xl:max-w-full 2xl:mx-40 py-[60px]">
        <div className="text-center" data-aos="fade-up">
          <p className="text-[25px] md:text-[36px] font-Satoshi text-[#061C60]">
            In our client’s word
          </p>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="grid place-items-center items-center mt-[48px] gap-[48px] justify-center"
              >
                <div className=" flex flex-col md:flex-row items-center gap-[24px] justify-center">
                  <div className="h-[120px] w-[120px] rounded-full">
                    <img
                      src={Testimonial1}
                      alt=""
                      className="w-full object-fill"
                    />
                  </div>
                  <p className="font-SatoshiMedium text-[20px] text-[#141414]">
                    {testimonial.name}
                  </p>
                </div>
                <div>
                  <p className="text-[#141414] font-SatoshiMedium text-[18px] md:text-[36px]">
                    {testimonial.content}
                  </p>
                </div>
                <p className="text-[16px] md:text-[20px] text-[#141414] font-SatoshiMedium">
                  {testimonial.company}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
