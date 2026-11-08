import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import ssOne from "../../../../assets/images/stayahead/ss/screenshot-01.webp";
import ssTwo from "../../../../assets/images/stayahead/ss/screenshot-02.webp";
import ssThree from "../../../../assets/images/stayahead/ss/screenshot-03.webp";
import ssFour from "../../../../assets/images/stayahead/ss/screenshot-04.webp";
import ssFive from "../../../../assets/images/stayahead/ss/screenshot-05.webp";

import "./style/style.css";

const swiperImages = [
  {
    name: "RESPONSE VERIFICATION",
    image: ssOne,
  },
  {
    name: "PROFILE INCONCLUSIVE",
    image: ssTwo,
  },
  {
    name: "SCREENSHOT THREE",
    image: ssThree,
  },
  {
    name: "SCREENSHOT FOUR",
    image: ssFour,
  },
  {
    name: "SCREENSHOT FIVE",
    image: ssFive,
  },
];

const ScreenshotSection = () => {
  return (
    <section className="sa-screenshots-section">
      <div className="eyebro">
        <div className="line"></div>
        <p>IN THE RUN</p>
      </div>
      <div className="header">
        <h1>GAMEPLAY</h1>
        <div className="right">
          <p>
            Balance speed, manage risk, <br /> and push your run further.
          </p>
        </div>
      </div>
      <div className="screenshot-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={26}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 26,
            },
          }}
        >
          {swiperImages.map((each) => (
            <SwiperSlide>
              <div className="screenshot-cnt">
                <div className="image">
                  <img src={each.image} alt="Screenshot" />
                </div>
                <div className="content">
                  <p className="image-name">{each.name}</p>
                  <p className="line"></p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ScreenshotSection;
