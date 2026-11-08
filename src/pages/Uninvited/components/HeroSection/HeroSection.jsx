import { Link } from "react-router-dom";
import "./style/style.css";

import uninvitedNominee from "../../../../assets/images/uninvited/IGA2026_uninvited.webp";

const HeroSection = () => {
  return (
    <section className="ui-section">
      <div className="eyebro">
        <p className="text">Break in. Keep your cool. Find your way out.</p>
      </div>
      <div className="content">
        <h1 className="title">UNINVITED</h1>
        <p className="subtitle">
          You thought this would be an easy job. You were wrong.
        </p>
        <p className="dec">Every house tells a different story.</p>
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
      </div>
      <div className="nominee-cnt">
        <img src={uninvitedNominee} alt="uninvited" />
      </div>
    </section>
  );
};

export default HeroSection;
