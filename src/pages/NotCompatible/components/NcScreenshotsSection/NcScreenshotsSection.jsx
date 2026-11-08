import ssOne from "../../../../assets/images/notcompatible/ss/screenshot1.webp";
import ssTwo from "../../../../assets/images/notcompatible/ss/screenshot2.webp";

import "./style/style.css";

const NcScreenshotsSection = () => {
  return (
    <section className="nc-screenshots-section">
      <div className="eyebro">
        <p>02 / OBSERVED BEHAVIOR</p>
      </div>
      <div className="header">
        <h1>SCREENSHOTS</h1>
        <div className="right">
          <p>TWO FRAMES. ONE EXPERIMENT.</p>
          <p>CAPTURED DIRECTLY IN-GAME.</p>
        </div>
      </div>
      <div className="screenshot-wrapper">
        <div className="screenshot-cnt">
          <div className="image">
            <img src={ssOne} alt="Screenshot" />
          </div>
          <div className="content">
            <p className="image-name">RESPONSE VERIFICATION</p>
            <p className="nos">[01]</p>
          </div>
        </div>
        <div className="screenshot-cnt">
          <div className="image">
            <img src={ssTwo} alt="Screenshot" />
          </div>
          <div className="content">
            <p className="image-name">PROFILE INCONCLUSIVE</p>
            <p className="nos">[02]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NcScreenshotsSection;
