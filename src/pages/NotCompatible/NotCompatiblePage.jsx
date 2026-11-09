import SEO from "../../components/Seo/SEO";
import NcHeroSection from "./components/NcHeroSection/NcHeroSection";
import NcGamePlaySection from "./components/NcGamePlaySection/NcGamePlaySection";
import NcScreenshotsSection from "./components/NcScreenshotsSection/NcScreenshotsSection";

import "./style.css";

const NotCompatiblePage = () => {
  return (
    <>
      <SEO
        title="Not Compatible – Minimalist Reaction Game"
        description="Test your logic and reflexes in Not Compatible, a minimalist reaction game by BAD AT Games. Read the rules, recognize patterns, make quick decisions and question your results."
        keywords={[
          "Not Compatible",
          "Not Compatible game",
          "reaction game",
          "logic game",
          "pattern recognition game",
          "rule-based game",
          "brain challenge game",
          "minimalist game",
          "reflex game",
          "BAD AT Games",
        ]}
        image="https://www.badatgames.net/assets/images/notcompatible/PosterNotcompatible.webp"
        imageAlt="Not Compatible - A minimalist reaction experiment by BAD AT Games"
        url="https://www.badatgames.net/notcompatible"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "@id": "https://www.badatgames.net/notcompatible#game",
          name: "Not Compatible",
          description:
            "Not Compatible is a minimalist rule-based reaction experiment built around simple rules, fast decisions, and pattern recognition. Read the rule, make the call, and question the result.",
          url: "https://www.badatgames.net/notcompatible",
          image:
            "https://www.badatgames.net/assets/images/notcompatible/PosterNotcompatible.webp",
          genre: ["Puzzle", "Logic Game", "Reaction Game"],
          gamePlatform: "Web browser",
          applicationCategory: "GameApplication",
          publisher: {
            "@type": "Organization",
            "@id": "https://www.badatgames.net/#organization",
            name: "BAD AT Games",
            url: "https://www.badatgames.net/",
          },
          inLanguage: "en",
        }}
      />
      <section className="notcompatible-section">
        <NcHeroSection />
        <NcGamePlaySection />
        <NcScreenshotsSection />
      </section>
    </>
  );
};

export default NotCompatiblePage;
