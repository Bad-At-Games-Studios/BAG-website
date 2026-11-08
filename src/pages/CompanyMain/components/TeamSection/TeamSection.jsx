import { Link } from "react-router-dom";
import { teamData } from "../../../../data/team";

import TeamCards from "../../../../components/TeamCards/TeamCards";

import "./style/TeamSectionResStyle.css";

const TeamSection = () => {
  const data = teamData;

  const filteredData = data?.slice(0, 4);

  return (
    <section className="team-section" id="teamId">
      <div className="team-section-top">
        <p className="eyebrow">THE CREW</p>
        <div className="title-wrapper">
          <h1 className="title">MEET THE TROUBLEMAKERS</h1>
          <p className="dec">
            Designers, developers and professional overthinkers united by play.
          </p>
        </div>
      </div>
      <div className="team-section-bottom">
        {filteredData?.map((each) => (
          <TeamCards teamData={each} />
        ))}
      </div>
      {data?.length > 4 && (
        <div className="team-all-btn">
          <Link to={"/team"} className="view-all">
            View all <span>&rarr;</span>
          </Link>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
