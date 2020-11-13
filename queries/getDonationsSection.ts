
import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetDonationsSectionQuery } from "generated/graphql";

const donationsSectionQuery = gql`
  query GetDonationsSection {
    donationsSection {
      id
      text
      title
      sheetLink
      buttonText
      emojiSymbol
    }
  }
`;

const getDonationsSection = async () => {
  const result = await graphQLClient.request(
    donationsSectionQuery,
  ) as GetDonationsSectionQuery;

  return result.donationsSection;
};

export default getDonationsSection;
