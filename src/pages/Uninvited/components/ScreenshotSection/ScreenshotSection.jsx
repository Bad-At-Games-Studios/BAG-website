import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import ssFour from "../../../../assets/images/uninvited/hero.webp";
import ssOne from "../../../../assets/images/uninvited/ss/gallery-1.webp";
import ssTwo from "../../../../assets/images/uninvited/ss/gallery-2.webp";
import ssThree from "../../../../assets/images/uninvited/ss/gallery-3.webp";
import ssFive from "../../../../assets/images/uninvited/PosterUninvited.webp";

import "./style/style.css";

const swiperImages = [
  {
    name: "A closer look around the room",
    image: ssOne,
  },
  {
    name: "Something worth investigating",
    image: ssTwo,
  },
  {
    name: "Clues hiding in plain sight",
    image: ssThree,
  },
  {
    name: "Clues hiding in plain sight",
    image: ssFour,
  },
  {
    name: "Clues hiding in plain sight",
    image: ssFive,
  },
];

const ScreenshotSection = () => {
  return (
    <section className="ui-screenshots-section">
      <div className="eyebro">
        <div className="line"></div>
        <p>GALLERY</p>
      </div>
      <div className="header">
        <h1>Behind the scenes</h1>
        <div className="right">
          <p>
            Take a closer look at the rooms, objects and <br /> curious details
            of Uninvited.
          </p>
        </div>
      </div>
      <div className="screenshot-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
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
