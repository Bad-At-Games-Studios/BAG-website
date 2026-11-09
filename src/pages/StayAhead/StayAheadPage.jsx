import SEO from "../../components/Seo/SEO";
import CoreSection from "./components/CoreSection/CoreSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ZoneSection from "./components/ZoneSection/ZoneSection";
import ScreenshotSection from "./components/ScreenshotSection/ScreenshotSection";

import "./style.css";

const StayAheadPage = () => {
  return (
    <>
      {/* seo */}
      <SEO
        title="Stay Ahead – Endless Runner Reaction Game"
        description="Test your reflexes in Stay Ahead, a minimalist endless runner by BAD AT Games. Recognize patterns, balance speed and risk, and push your run further."
        keywords={[
          "Stay Ahead",
          "Stay Ahead game",
          "endless runner game",
          "reaction game",
          "reflex game",
          "pattern recognition game",
          "minimalist mobile game",
          "speed challenge game",
          "Android endless runner",
          "BAD AT Games",
        ]}
        image="https://www.badatgames.net/assets/images/stayahead/bg.webp"
        imageAlt="Stay Ahead - Minimalist Endless Runner by BAD AT Games"
        url="https://www.badatgames.net/stayahead"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "@id": "https://www.badatgames.net/stayahead#game",
          name: "Stay Ahead",
          description:
            "Stay Ahead is a minimalist rule-based endless runner that challenges players to balance speed, recognize patterns, make quick decisions, and manage risk. Switch between the Comfort Zone to slow down and recover, and the Rage Zone to push your speed, earn more, and risk everything.",
          url: "https://www.badatgames.net/stayahead",
          image: "https://www.badatgames.net/assets/images/stayahead/bg.webp",
          genre: ["Endless Runner", "Reaction Game", "Casual Game"],
          gamePlatform: "Android",
          applicationCategory: "GameApplication",
          operatingSystem: "Android",
          publisher: {
            "@type": "Organization",
            "@id": "https://www.badatgames.net/#organization",
            name: "BAD AT Games",
            url: "https://www.badatgames.net/",
          },
          installUrl:
            "https://play.google.com/store/apps/details?id=com.badatgames.stayahead",
          isAccessibleForFree: true,
          inLanguage: "en",
        }}
      />

      <section className="stayahead-section">
        <HeroSection />
        <CoreSection />
        <ZoneSection />
        <ScreenshotSection />
      </section>
    </>
  );
};

export default StayAheadPage;
