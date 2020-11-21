
import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetMainPageSectionQuery } from "generated/graphql";

const donationsSectionQuery = gql`
  query GetMainPageSection {
    introductionSection {
      id
      title
      buttonText
      backgroundImageLink
    }
    achievementsSection {
      id
      title
      achievements {
        id
        label
        value
      }
    }
    donationsSection {
      id
      text
      title
      sheetLink
      buttonText
      emojiSymbol
    }
    actionsSection {
      id
      text
      title
      actions {
        id
        name
        date
        description
        actionLink
      }
      actionButtonText
      nextActionsSubtitle
      previousActionsSubtitle
    }
    donationsSection {
      id
      text
      title
      sheetLink
      buttonText
      emojiSymbol
    }
    orgInfos(sort: "id") {
      id
      text
      title
      emojiSymbol
    }
    teamMembersSection {
      id
      text
      title
      teamMembers {
        id
        name
        photoUrl
      }
    }
    footer {
      id
      contactEmail
      socialMedias {
        id
        label
        href
      }
      socialMediasTitle
      contactEmailTitle
    }
  }
`;

const getMainPageContent = async () => {
  const result = await graphQLClient.request(
    donationsSectionQuery,
  ) as GetMainPageSectionQuery;

  return result;
};

export default getMainPageContent;
