import CoreSection from "./components/CoreSection/CoreSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ZoneSection from "./components/ZoneSection/ZoneSection";
import ScreenshotSection from "./components/ScreenshotSection/ScreenshotSection";

import "./style.css";

const StayAheadPage = () => {
  return (
    <section className="stayahead-section">
      <HeroSection />
      <CoreSection />
      <ZoneSection />
      <ScreenshotSection />
    </section>
  );
};

export default StayAheadPage;
