
import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetActionsSectionQuery } from "generated/graphql";

const actionsFieldsFragment = gql`
  fragment ActionFields on Actions {
    id
    name
    date
    description
    actionLink
  }
`;

const actionsSectionQuery = gql`
  ${actionsFieldsFragment}

  query GetActionsSection {
    actionsSection {
      id
      text
      title
      nextActions {
        ...ActionFields
      }
      previousActions {
        ...ActionFields
      }
      actionButtonText
      nextActionsSubtitle
      noActionsFoundText
      previousActionsSubtitle
    }
  }
`;

const getActionsSection = async () => {
  const result = await graphQLClient.request(
    actionsSectionQuery,
  ) as GetActionsSectionQuery;

  return result.actionsSection;
};

export default getActionsSection;
