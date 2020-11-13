import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(`${process.env.CMS_URL}/graphql`);

export default graphQLClient;
