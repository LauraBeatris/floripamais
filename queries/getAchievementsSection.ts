import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetAchievementsSectionQuery } from "generated/graphql";

const achievementsSectionQuery = gql`
  query GetAchievementsSection {
    achievementsSection {
      id
      title
      achievements {
        id
        label
        value
      }
    }
  }
`;

const getAchievementsSection = async () => {
  const result = await graphQLClient.request(
    achievementsSectionQuery,
  ) as GetAchievementsSectionQuery;

  return result.achievementsSection;
};

export default getAchievementsSection;
