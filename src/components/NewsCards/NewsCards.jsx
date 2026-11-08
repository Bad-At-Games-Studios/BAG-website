import { Link } from "react-router-dom";
import "./NewsCards.css";

const NewsCards = ({ cardDetail }) => {
  return (
    <div className="news-card-cnt" key={cardDetail.id}>
      <div className="image">
        <img src={cardDetail.newsimage} alt={`news-${cardDetail.created_at}`} />
      </div>
      <div className="news-details">
        <div className="type-date">
          <p>{cardDetail.newstype}</p>
          <p>{cardDetail.created_at}</p>
        </div>
        <div className="news-dec">
          <h1 className="title">{cardDetail.newstitle}</h1>
          <p className="dec">{cardDetail.newsdec}</p>
        </div>
        <div className="news-links">
          {cardDetail.gamelink && (
            <Link to={cardDetail.gamelink} target="_blank">
              Game Link
            </Link>
          )}
          {cardDetail.newslink && (
            <Link to={cardDetail.newslink} target="_blank">
              News Article
            </Link>
          )}

          <Link to={`/aboutnews/${cardDetail.id}`}>Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
