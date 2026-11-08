import { Link, useNavigate } from "react-router-dom";

import android from "../../assets/images/playstore.png";
import web from "../../assets/images/web.png";
import pc from "../../assets/images/steam.png";
import apple from "../../assets/images/ios.png";

import "./ProjectCardsStyle.css";

const platformImages = {
  android: android,
  web: web,
  pc: pc,
  ios: apple,
};

const ProjectCards = ({ cardDetail }) => {
  const navigate = useNavigate();

  const handleProjectCard = (e, path) => {
    e.stopPropagation();
    navigate(`/${path}`);
  };

  return (
    <div
      className="card-cnt"
      key={cardDetail.id}
      onClick={(e) => handleProjectCard(e, cardDetail.urlpath)}
    >
      <div className="image">
        <img src={cardDetail.image} alt={cardDetail.name} />
      </div>
      <div className="status">
        <ul className="genres">
          {cardDetail.genres.map((name, index) => (
            <li key={`game-genres-${index}`}>
              <span></span>
              {name}
            </li>
          ))}
        </ul>
        <ul className="platform">
          {cardDetail.plathform.map((name, index) => (
            <li key={`game-platform-${index}`}>
              <img src={platformImages[name]} alt={name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="info">
        <h1 className="title">{cardDetail.name}</h1>
        {/* <p className="dec">{each.dec}</p> */}
      </div>
      <div className="project-btn">
        {cardDetail.link === null ? (
          <Link className="coming-soon-btn">Coming Soon</Link>
        ) : (
          <>
            <Link
              to={cardDetail.link}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className={`play-btn ${cardDetail.ytlink === null ? "full-width" : ""}`}
            >
              Play Now
            </Link>
            {cardDetail.ytlink === null ? (
              ""
            ) : (
              <Link
                to={cardDetail.ytlink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="video-btn"
              >
                Video
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
