import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetFooterQuery } from "generated/graphql";

const FooterQuery = gql`
  query GetFooter {
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

const getFooter = async () => {
  const result = await graphQLClient.request(
    FooterQuery,
  ) as GetFooterQuery;

  return result.footer;
};

export default getFooter;
