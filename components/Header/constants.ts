import { donationsSectionId } from "components/Sections/Donations/constants";
import { missionSectionId } from "components/Sections/Mission/constants";

/**
 * Defines the links to be show on the header navbar
 *
 * TODO -> Get the section ids from constants stored on the sections structure
 */
export const headerNavbarLinks = [
  {
    label: "Ações",
    sectionId: "actions-section",
  },
  {
    label: "Doações",
    sectionId: donationsSectionId,
  },
  {
    label: "Missão",
    sectionId: missionSectionId,
  },
  {
    label: "Equipe",
    sectionId: "team-section",
  },
  {
    label: "Contato",
    sectionId: "contact-section",
  },
];
