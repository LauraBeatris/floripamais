import { footerId } from "components/Footer/constants";
import { teamMembersSectionId } from "components/Sections/TeamMembers/constants";
import { actionsSectionId } from "components/Sections/Actions/constants";
import { orgInfoId } from "components/Sections/OrgInfo/constants";
import { donationsSectionId } from "components/Sections/Donations/constants";

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
    sectionId: orgInfoId,
  },
  {
    label: "Equipe",
    sectionId: teamMembersSectionId,
  },
  {
    label: "Contato",
    sectionId: footerId,
  },
];

export const headerId = "main-page-header";
