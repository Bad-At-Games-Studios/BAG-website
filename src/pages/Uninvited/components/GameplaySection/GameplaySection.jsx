import "./style/style.css";

import magImg from "../../../../assets/images/uninvited/mag.webp";
import keyImg from "../../../../assets/images/uninvited/key.webp";
import doorImg from "../../../../assets/images/uninvited/door.webp";
import puzzleImg from "../../../../assets/images/uninvited/puzzle.webp";

const cardObj = [
  {
    id: 1,
    image: magImg,
    title: "EXPLORE",
    subTitle: "Find Clues & Items",
    dec: "Search every corner. Gather useful items and follow the clues hiding in plain sight.",
  },
  {
    id: 2,
    image: keyImg,
    title: "SOLVE",
    subTitle: "Solve Puzzles",
    dec: "Connect the details. Use what you find to unravel the puzzles woven into each place.",
  },
  {
    id: 3,
    image: doorImg,
    title: "COMPLETE",
    subTitle: "Complete the Job",
    dec: "Finish your objectives and uncover the unexpected stories behind the things you came for.",
  },
  {
    id: 4,
    image: puzzleImg,
    title: "ESCAPE",
    subTitle: "Escape",
    dec: "Keep your cool. Find a way out before you get caught — and leave nothing to chance.",
  },
];

const GameplaySection = () => {
  return (
    <section className="ui-ganeplay-section">
      <div className="header-wrapper">
        <div className="eyebro">
          <div className="line"></div>
          <p>GAMEPLAY</p>
        </div>
        <div className="content">
          <div className="left">
            <h1>A simple job. Or is it?</h1>
          </div>
          <div className="right">
            <p className="dec">
              Trust your instincts. Question everything. <br /> There’s always
              more than meets the eye.
            </p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        {cardObj.map((each) => (
          <div className="content-card" key={each.id}>
            <div className="card-hearder">
              <h2>0{each.id}</h2>
              <div className="image">
                <img src={each.image} alt="iimage" />
              </div>
            </div>

            <h1 className="title">{each.title}</h1>
            <h3 className="subtitle">{each.subTitle}</h3>
            <p className="dec">{each.dec}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameplaySection;
