import Head from "next/head";

import IntroductionSection from "components/Sections/Introduction";
import MissionSection from "components/Sections/Mission";
import AchievementsSection from "components/Sections/Achievements";
import Section from "components/Sections/Section";

const App: React.FC = () => (
  <>
    <Head>
      <title>Floripa+ | Torne a ilha em um lugar melhor</title>
    </Head>
    <main id="page-wrapper" className="pt-header-mobile md:pt-header-desktop flex flex-col justify-start bg-white-shade">
      <IntroductionSection />
      <AchievementsSection />

      <MissionSection />
    </main>
  </>
);

export default App;
