import Head from "next/head";

import IntroductionSection from "components/Sections/Introduction";
import MissionSection from "components/Sections/Mission";
import AchievementsSection from "components/Sections/Achievements";
import DonationsSection from "components/Sections/Donations";
import ActionsSection from "components/Sections/Actions";
import MembersSection from "components/Sections/Members";

const App: React.FC = () => (
  <>
    <Head>
      <title>Floripa+ | Torne a ilha em um lugar melhor</title>
    </Head>
    <main id="page-wrapper" className="pt-header-mobile md:pt-header-desktop flex flex-col justify-start bg-white-shade">
      <IntroductionSection />
      <AchievementsSection />
      <ActionsSection />
      <DonationsSection />
      <MissionSection />
      <MembersSection />
    </main>
  </>
);

export default App;
