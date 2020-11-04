import Head from "next/head";

import IntroductionSection from "components/Sections/Introduction";
import MissionSection from "components/Sections/Mission";

const App: React.FC = () => (
  <>
    <Head>
      <title>Floripa+ | Torne a ilha em um lugar melhor</title>
    </Head>
    <main id="page-wrapper" className="pt-header-mobile md:pt-header-desktop flex flex-col justify-start bg-background-light">
      <IntroductionSection />
      <MissionSection />
    </main>
  </>
);

export default App;
