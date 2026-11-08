import { Link } from "react-router-dom";

import { useGetBagGamesQuery } from "../../../../redux/slices/websiteApiSlice/websiteApiSlice";

import ProjectCards from "../../../../components/ProjectCards/ProjectCards";

import "./style/ProjectSectionResStyle.css";

const ProjectSection = () => {
  const { data } = useGetBagGamesQuery();

  return (
    <section className="project-section" id="gamesId">
      <div className="project-section-top">
        <p className="eyebrow">OUR WORK</p>
        <div className="title-wrapper">
          <h1 className="title">
            Different ideas. Different worlds. One independent studio.
          </h1>
          {data?.length > 4 && (
            <Link to={"/game"} className="view-all">
              VIEW ALL PROJECTS<span>↗</span>
            </Link>
          )}
        </div>
      </div>
      <div className="project-section-bottom">
        {data?.slice(0, 4).map((each) => (
          <ProjectCards cardDetail={each} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
