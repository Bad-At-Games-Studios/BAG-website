import { Link } from "react-router-dom";
import "./style/style.css";

const HeroSection = () => {
  return (
    <section className="sa-hero-section">
      <div className="eyebro">
        <p className="text">BALANCE SPEED. SURVIVE CHAOS.</p>
        <p className="brand">AN ENDLESS RUNNER</p>
      </div>
      <div className="content">
        <h1 className="title">
          STAY <span>AHEAD</span>
        </h1>
        <p className="subtitle">A minimalist rule-based reaction experiment.</p>
        <div className="btn-wrapper">
          <Link
            target="_blank"
            to={
              "https://play.google.com/store/apps/details?id=com.badatgames.stayahead"
            }
            className="btn"
          >
            Play now
          </Link>
        </div>
        <div className="features">
          <p>SIMPLE RULES. FAST DECISIONS.</p>
          <p>PATTERN RECOGNITION REQUIRED.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
