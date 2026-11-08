import { useNavigate } from "react-router-dom";
import ProjectCards from "../../components/ProjectCards/ProjectCards";

import { useGetBagGamesQuery } from "../../redux/slices/websiteApiSlice/websiteApiSlice";

import "./AllGameStyle.css";

const AllGame = () => {
  const { data } = useGetBagGamesQuery();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="all-game-section">
      <div className="back-cnt">
        <h2 onClick={handleBackClick}>Back</h2>
      </div>
      <div className="all-game-grid">
        {data?.map((each) => (
          <ProjectCards cardDetail={each} />
        ))}
      </div>
    </section>
  );
};

export default AllGame;
