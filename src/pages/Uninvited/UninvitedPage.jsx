import HeroSection from "./components/HeroSection/HeroSection";
import ChapterSection from "./components/ChapterSection/ChapterSection";
import GameplaySection from "./components/GameplaySection/GameplaySection";
import ScreenshotSection from "./components/ScreenshotSection/ScreenshotSection";

import "./style.css";

const UninvitedPage = () => {
  return (
    <section section="uninvited-page">
      <HeroSection />
      <GameplaySection />
      <ChapterSection />
      <ScreenshotSection />
    </section>
  );
};

export default UninvitedPage;
