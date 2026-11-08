import "./style/style.css";

import videoSource from "../../../../assets/images/uninvited/StoryChapterArtwork.mp4";
import { useEffect, useRef } from "react";

const ChapterSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="ui-core-section">
      <div className="header-wrapper">
        <div className="eyebro">
          <div className="line"></div>
          <p>CHAPTERS</p>
        </div>
        <div className="content">
          <div className="left">
            <h1>
              Every Chapter. <br /> <span>A new story</span>
            </h1>
          </div>
          <div className="right">
            <p className="dec">
              The most ordinary places can hide the most unexpected stories.
            </p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="left">
          <h2>
            A room that feels familiar. A detail that doesn’t belong. Each
            chapter invites you to look closer, follow the strange little clues
            and discover what lies beneath the surface.
          </h2>
          <p>Notice the small things.</p>
        </div>
        <div className="right">
          <video
            ref={videoRef}
            src={videoSource}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ChapterSection;
