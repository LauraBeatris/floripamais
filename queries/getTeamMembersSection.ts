
import { gql } from "graphql-request";

import graphQLClient from "config/graphQLClient";
import { GetTeamMembersSectionQuery } from "generated/graphql";

const teamMembersSectionQuery = gql`
  query GetTeamMembersSection {
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
  }
`;

const geTeamMembersSection = async () => {
  const result = await graphQLClient.request(
    teamMembersSectionQuery,
  ) as GetTeamMembersSectionQuery;

  console.log(result);

  return result.teamMembersSection;
};

export default geTeamMembersSection;
