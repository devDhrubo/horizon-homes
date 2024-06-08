import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="min-w-full">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide1">
            <div className="lg:text-left text-center lg:mt-48 mt-20 space-y-5 lg:ml-32 text-white p-4">
              <h2 data-aos="fade-right" className="lg:text-5xl md:text-4xl text-2xl">Modern Apartment</h2>
              <p data-aos="fade-right" className="text-sm lg:w-1/2">
              Experience luxury living in our modern apartment, designed for comfort and style. With sleek finishes, open-concept spaces, and natural light.
              </p>
              <button data-aos="fade-right" className="px-4 py-2 border text-sm rounded-full">
                <a href="#homes">View More</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide2">
            <div className="lg:text-left text-center lg:mt-48 mt-20 space-y-5 lg:ml-32 text-white p-4">
              <h2 data-aos="fade-right" className="lg:text-5xl md:text-4xl text-2xl">
                Amazing Apartment for Family
              </h2>
              <p data-aos="fade-right" className="text-sm lg:w-1/2">
              Discover the perfect family-friendly haven in our amazing apartment. Spacious and bright, it offers a comfortable layout with generous living areas and cozy bedrooms.
              </p>
              <button data-aos="fade-right" className="px-4 py-2 border text-sm rounded-full">
              <a href="#homes">View More</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide3">
            <div className="lg:text-left text-center lg:mt-48 mt-20 space-y-5 lg:ml-32 text-white p-4">
              <h2 data-aos="fade-right" className="lg:text-5xl md:text-4xl text-2xl">
                Gorgeous Apartment Bay Front
              </h2>
              <p data-aos="fade-right" className="text-sm lg:w-1/2">
              This gorgeous home boasts modern finishes, an open layout, and expansive windows that fill every room with natural light. Enjoy private balcony, gourmet kitchen, and elegant amenities.
              </p>
              <button data-aos="fade-right" className="px-4 py-2 border text-sm rounded-full">
              <a href="#homes">View More</a>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
