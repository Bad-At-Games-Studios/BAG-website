import { Link } from "react-router-dom";

import "./NotfoundSectionStyle.css";

const NotfoundSection = () => {
  return (
    <section className="notfound-section">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to={"/"}>Back</Link>
    </section>
  );
};

export default NotfoundSection;
