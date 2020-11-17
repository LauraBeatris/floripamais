import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import IntroductionSection from "components/Sections/Introduction";
import MissionSection from "components/Sections/OrgInfo";
import AchievementsSection from "components/Sections/Achievements";
import DonationsSection from "components/Sections/Donations";
import ActionsSection from "components/Sections/Actions";
import TeamMembersSection from "components/Sections/TeamMembers";
import Footer from "components/Footer";
import getMainPageContent from "queries/getMainPageContentQuery";

export const getStaticProps = async () => {
  try {
    const {
      footer,
      orgInfos,
      actionsSection,
      donationsSection,
      teamMembersSection,
      introductionSection,
      achievementsSection,
    } = await getMainPageContent();

    return {
      props: {
        footer,
        orgInfos,
        actionsSection,
        donationsSection,
        teamMembersSection,
        introductionSection,
        achievementsSection,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return {
      props: {},
    };
  }
};

const MainPage: React.FC< InferGetStaticPropsType<typeof getStaticProps>> = ({
  footer,
  orgInfos,
  actionsSection,
  donationsSection,
  teamMembersSection,
  introductionSection,
  achievementsSection,
}) => (
  <>
    <Head>
      <title>Floripa+ | Torne a ilha em um lugar melhor</title>
    </Head>
    <main id="page-wrapper" className="pt-header-mobile md:pt-header-desktop flex flex-col justify-start bg-white-shade">
      <IntroductionSection {...introductionSection} />
      <AchievementsSection {...achievementsSection} />
      <ActionsSection {...actionsSection} />
      <DonationsSection {...donationsSection} />
      <MissionSection orgInfos={orgInfos} />
      <TeamMembersSection {...teamMembersSection} />
    </main>
    <Footer {...footer} />
  </>
);

export default MainPage;
