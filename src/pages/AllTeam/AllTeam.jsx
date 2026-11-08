import { teamData } from "../../data/team";
import { useNavigate } from "react-router-dom";
import TeamCards from "../../components/TeamCards/TeamCards";

import "./AllTeamStyle.css";

const AllTeam = () => {
  const data = teamData;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <section className="all-team-section">
      <div className="back-cnt">
        <h2 onClick={handleBackClick}>Back</h2>
      </div>
      <div className="all-team-grid">
        {data?.map((each) => (
          <TeamCards teamData={each} />
        ))}
      </div>
    </section>
  );
};

export default AllTeam;
