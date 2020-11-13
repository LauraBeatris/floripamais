import Head from "next/head";
import { InferGetStaticPropsType } from "next";

import IntroductionSection from "components/Sections/Introduction";
import MissionSection from "components/Sections/OrgInfo";
import AchievementsSection from "components/Sections/Achievements";
import DonationsSection from "components/Sections/Donations";
import ActionsSection from "components/Sections/Actions";
import TeamMembersSection from "components/Sections/TeamMembers";
import Footer from "components/Footer";
import getIntroductionSection from "queries/getIntroductionSection";
import getAchievementsSection from "queries/getAchievementsSection";
import getDonationsSection from "queries/getDonationsSection";
import getActionsSection from "queries/getActionsSection";
import getTeamMembersSection from "queries/getTeamMembersSection";
import getOrgInfo from "queries/getOrgInfo";
import getFooter from "queries/getFooter";

export const getStaticProps = async () => {
  const introductionSection = (
    await getIntroductionSection()
  );

  const achievementsSection = (
    await getAchievementsSection()
  );

  const donationsSection = (
    await getDonationsSection()
  );

  const actionsSection = (
    await getActionsSection()
  );

  const teamMembersSection = (
    await getTeamMembersSection()
  );

  const orgInfos = (
    await getOrgInfo()
  );

  const footer = (
    await getFooter()
  );

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
      <MissionSection {...orgInfos} />
      <TeamMembersSection {...teamMembersSection} />
    </main>
    <Footer {...footer} />
  </>
);

export default MainPage;
