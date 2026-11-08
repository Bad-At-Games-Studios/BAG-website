import slowImg from "../../../../assets/images/slow.webp";
import fastImg from "../../../../assets/images/fast.webp";

import "./style/style.css";

const ZoneSection = () => {
  return (
    <section className="sa-zone-section">
      <div className="eyebro">
        <div className="line"></div>
        <p>COMFORT ZONE VS RAGE ZONE</p>
      </div>
      <div className="content-container">
        <div className="blue-content">
          <div className="image">
            <img src={slowImg} alt="Comfort Zone" />
          </div>
          <h1 className="title">
            COMFORT <br /> ZONE
          </h1>
          <p className="dec">Slow down. Recover. Stay in control.</p>
        </div>
        <div className="content-float">
          <h1>VS</h1>
        </div>
        <div className="red-content">
          <div className="image">
            <img src={fastImg} alt="Danger Zone" />
          </div>
          <h1 className="title">
            RAGE <br /> ZONE
          </h1>
          <p className="dec">Push your speed. Earn more. Risk everything.</p>
        </div>
      </div>
    </section>
  );
};

export default ZoneSection;
