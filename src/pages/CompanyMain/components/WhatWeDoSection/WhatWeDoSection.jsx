import gamepadImg from "../../../../assets/images/gamepad.png";
import handImg from "../../../../assets/images/hand.png";
import flagImg from "../../../../assets/images/flag.png";

import "./style/WhatWeDoResSection.css";

const cardDetails = [
  {
    id: "01",
    title: "ORIGINAL IP",
    dec: "We develop and design games in-house—from strange first sketches to polished, launch-ready worlds.",
    image: gamepadImg,
  },
  {
    id: "02",
    title: "CO-DEVELOPMENT",
    dec: "Need an embedded strike team? We bring design, engineering and production muscle to your project.",
    image: handImg,
  },
  {
    id: "03",
    title: "FULL ACQUISITION",
    dec: "We acquire promising games, fund the finish and help teams turn strong prototypes into lasting releases.",
    image: flagImg,
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="what-we-do-section" id="servicesId">
      <div className="what-we-do-top">
        <p className="eyebrow">WHAT WE DO</p>
        <div className="title-wrapper">
          <h1 className="title">THREE WAYS TO PLAY</h1>
          <p className="dec">
            Flexible partnerships, one standard: make the game better than
            anyone thought possible.
          </p>
        </div>
      </div>
      <div className="what-we-do-bottom">
        {cardDetails.map((each) => (
          <div className="card-cnt" key={`card-${each.id}`}>
            <div className="card-count">
              <p className="count">{each.id}</p>
              <div className="image">
                <img src={each.image} alt={each.image} />
              </div>
            </div>
            <h1 className="title">{each.title}</h1>
            <p className="dec">{each.dec}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDoSection;
