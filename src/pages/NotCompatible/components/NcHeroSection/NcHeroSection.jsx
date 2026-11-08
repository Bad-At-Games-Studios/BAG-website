import { Link } from "react-router-dom";
import "./style/style.css";

const NcHeroSection = () => {
  return (
    <section className="nc-hero-section">
      <div className="eyebro">
        <p className="text">INITIALIZING SYSTEM…</p>
        <p className="brand">A BAD AT GAMES EXPERIMENT</p>
      </div>
      <div className="content">
        <h1 className="title">
          NOT <span>COMPATIBLE</span>
        </h1>
        <p className="subtitle">A minimalist rule-based reaction experiment.</p>
        <div className="btn-wrapper">
          <Link
            target="_blank"
            to={"https://not-compatible.netlify.app/#"}
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

export default NcHeroSection;
