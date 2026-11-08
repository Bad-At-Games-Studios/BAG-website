import "./style/WhatWeSectionResStyle.css";

const WhatWeAreSection = () => {
  return (
    <section className="what-we-section" id="aboutId">
      <div className="what-we-left">
        <p className="eyebrow">WHO WE ARE</p>
        <h1 className="big-text">SMALL TEAM. BIG SWINGS. ZERO FILLER.</h1>
      </div>
      <div className="what-we-right">
        <h2 className="title">
          Bad At Games is an independent development studio obsessed with
          character, feel and player-first fun.
        </h2>
        <p className="dec">
          From first sketch to final build, our multidisciplinary crew works as
          one. We partner early, communicate clearly and aren’t afraid to kill a
          good idea to find a great one.
        </p>
      </div>
    </section>
  );
};

export default WhatWeAreSection;
