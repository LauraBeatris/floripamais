import { footerId } from "components/Footer/constants";
import { actionsSectionId } from "components/Sections/Actions/constants";
import { donationsSectionId } from "components/Sections/Donations/constants";
import { teamSectionId } from "components/Sections/Team/constants";
import { missionSectionId } from "components/Sections/Mission/constants";

/**
 * Defines the links to be show on the header navbar
 *
 * TODO -> Get the section ids from constants stored on the sections structure
 */
export const headerNavbarLinks = [
  {
    label: "Ações",
    sectionId: actionsSectionId,
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
    sectionId: teamSectionId,
  },
  {
    label: "Contato",
    sectionId: footerId,
  },
];

export const headerId = "main-page-header";
