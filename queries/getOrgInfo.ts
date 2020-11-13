import { gql } from "graphql-request";

import { GetOrgInfosQuery } from "generated/graphql";
import graphQLClient from "config/graphQLClient";

const OrgInfosQuery = gql`
  query GetOrgInfos {
    orgInfos(sort: "id") {
      id
      text
      title
      emojiSymbol
    }
  }
`;

const getOrgInfos = async () => {
  const result = await graphQLClient.request(
    OrgInfosQuery,
  ) as GetOrgInfosQuery;

  return result;
};

export default getOrgInfos;
