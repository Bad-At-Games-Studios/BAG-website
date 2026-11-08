import HeroSection from "./components/HeroSection/HeroSection";
import CountSection from "./components/CountSection/CountSection";
import WhatWeAreSection from "./components/WhatWeAreSection/WhatWeAreSection";
import WhatWeDoSection from "./components/WhatWeDoSection/WhatWeDoSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import TeamSection from "./components/TeamSection/TeamSection";
import NewsSection from "./components/NewsSection/NewsSection";

const CompanyMain = () => {
  return (
    <>
      <HeroSection />
      <WhatWeAreSection />
      <CountSection />
      <WhatWeDoSection />
      <ProjectSection />
      <TeamSection />
      <NewsSection />
    </>
  );
};

export default CompanyMain;
