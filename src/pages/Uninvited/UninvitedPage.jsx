import HeroSection from "./components/HeroSection/HeroSection";
import ChapterSection from "./components/ChapterSection/ChapterSection";
import GameplaySection from "./components/GameplaySection/GameplaySection";
import ScreenshotSection from "./components/ScreenshotSection/ScreenshotSection";

import "./style.css";
import SEO from "../../components/SEOComp/SEO";

const UninvitedPage = () => {
  return (
    <>
      <SEO
        title="Uninvited – Mystery Puzzle & Escape Game"
        description="Step into Uninvited, a mystery puzzle game by BAD AT Games. Explore unfamiliar houses, find hidden clues, solve puzzles, uncover stories and escape before getting caught."
        keywords={[
          "Uninvited",
          "Uninvited game",
          "mystery puzzle game",
          "escape game",
          "exploration game",
          "hidden clues game",
          "puzzle adventure",
          "mystery adventure game",
          "house exploration game",
          "BAD AT Games",
        ]}
        image="https://www.badatgames.net/assets/images/uninvited/PosterUninvited.webp"
        imageAlt="Uninvited - Mystery exploration and puzzle game by BAD AT Games"
        url="https://www.badatgames.net/uninvited"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "@id": "https://www.badatgames.net/uninvited#game",
          name: "Uninvited",
          description:
            "Uninvited is a mystery exploration and puzzle game where players enter unfamiliar houses, search rooms for useful items and hidden clues, solve puzzles, complete objectives, uncover unexpected stories, and escape before getting caught.",
          url: "https://www.badatgames.net/uninvited",
          image:
            "https://www.badatgames.net/assets/images/uninvited/PosterUninvited.webp",

          genre: ["Puzzle", "Adventure", "Mystery", "Exploration"],
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
            "https://play.google.com/store/apps/details?id=com.badatgames.uninvited",
          isAccessibleForFree: true,
          inLanguage: "en",
        }}
      />
      <section section="uninvited-page">
        <HeroSection />
        <GameplaySection />
        <ChapterSection />
        <ScreenshotSection />
      </section>
    </>
  );
};

export default UninvitedPage;
