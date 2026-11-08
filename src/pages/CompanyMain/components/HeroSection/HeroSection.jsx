import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import { heroBannerData } from "../../../../data/herobanner";

import "swiper/css";
import "swiper/css/effect-fade";
import "./style/HeroSectionResStyle.css";

const HeroSection = () => {
  const navigation = useNavigate();

  function handleNavigation() {
    navigation("/game");
  }

  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-left-wrapper">
          <div className="hero-eyebrow">
            <div className="line"></div>
            <p>PROBABLY A GAME STUDIO</p>
          </div>
          <div className="hero-title">
            <h1>
              WE MAKE GOOD <br /> <span>GAMES. BADLY.</span>
            </h1>
          </div>
          <div className="hero-dec">
            <p>
              A fiercely collaborative studio building memorable worlds, punchy
              mechanics and the kind of games people keep talking about.
            </p>
          </div>
          <div className="hero-btn">
            <button onClick={handleNavigation}>EXPLORE OUR GAMES</button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="hero-slider"
        >
          {heroBannerData.map((each) => (
            <SwiperSlide>
              <div className="badass-game-img">
                <img src={each} alt="Game Poster" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
