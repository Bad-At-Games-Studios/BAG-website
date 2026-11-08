import { useNavigate } from "react-router-dom";

import { useGetBagNewsQuery } from "../../redux/slices/websiteApiSlice/websiteApiSlice";

import NewsCards from "../../components/NewsCards/NewsCards";

import "./AllNewsStyle.css";

const AllNews = () => {
  const { data } = useGetBagNewsQuery();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="allnews-section">
      <div className="back-cnt">
        <h2 onClick={handleBackClick}>Back</h2>
      </div>
      <div className="allnews-bottom">
        {data?.map((each) => (
          <NewsCards cardDetail={each} />
        ))}
      </div>
    </section>
  );
};
export default AllNews;
