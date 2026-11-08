import { Link, useNavigate, useParams } from "react-router-dom";

import { useGetBagNewsByIdQuery } from "../../redux/slices/websiteApiSlice/websiteApiSlice";

import "./AboutNewsStyle.css";

const AboutNews = () => {
  const { id } = useParams();
  const { data } = useGetBagNewsByIdQuery(id);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="brief-news-section">
      <div className="back-cnt">
        <h2 onClick={handleBackClick}>Back</h2>
      </div>
      <div className="news-wrapper">
        <div className="type-date">
          <p>{data?.newstype}</p>
          <p>{data?.created_at}</p>
        </div>
        <h1 className="title">{data?.newstitle}</h1>
        <div className="image">
          <img src={data?.newsimage} alt="news-image" />
        </div>
        <p className="dec">{data?.newsdec}</p>
        <div className="news-links">
          {data?.gamelink && (
            <Link to={data?.gamelink} target="_blank">
              Game Link
            </Link>
          )}
          {data?.newslink && (
            <Link to={data?.newslink} target="_blank">
              News Article
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutNews;
