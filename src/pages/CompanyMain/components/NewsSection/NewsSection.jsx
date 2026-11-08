import { Link } from "react-router-dom";

import { useGetBagNewsQuery } from "../../../../redux/slices/websiteApiSlice/websiteApiSlice";

import NewsCards from "../../../../components/NewsCards/NewsCards";

import "./style/NewsSectionResStyle.css";

const NewsSection = () => {
  const { data } = useGetBagNewsQuery();

  return (
    <section className="news-section" id="newsId">
      <div className="news-section-top">
        <p className="eyebrow">LATEST</p>
        <div className="title-wrapper">
          <h1 className="title">From The studio</h1>
        </div>
      </div>
      <div className="project-section-bottom">
        {data?.slice(0, 4).map((each) => (
          <NewsCards cardDetail={each} />
        ))}
      </div>
      {data?.length < 4 && (
        <div className="view-all">
          <Link to={"/news"}>
            ALL NEWS<span>↗</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
