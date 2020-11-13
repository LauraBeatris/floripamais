import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetIntroductionSectionQuery } from "generated/graphql";

const IntroductionSectionQuery = gql`
  query GetIntroductionSection {
    introductionSection {
      id
      title
      buttonText
      backgroundImageLink
    }
  }
`;

const getIntroductionSection = async () => {
  const result = await graphQLClient.request(
    IntroductionSectionQuery,
  ) as GetIntroductionSectionQuery;

  return result.introductionSection;
};

export default getIntroductionSection;
