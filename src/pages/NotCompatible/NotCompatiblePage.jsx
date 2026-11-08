import NcHeroSection from "./components/NcHeroSection/NcHeroSection";
import NcGamePlaySection from "./components/NcGamePlaySection/NcGamePlaySection";
import NcScreenshotsSection from "./components/NcScreenshotsSection/NcScreenshotsSection";

import "./style.css";

const NotCompatiblePage = () => {
  return (
    <section className="notcompatible-section">
      <NcHeroSection />
      <NcGamePlaySection />
      <NcScreenshotsSection />
    </section>
  );
};

export default NotCompatiblePage;
