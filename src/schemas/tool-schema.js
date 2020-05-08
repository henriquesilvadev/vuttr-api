import { gql } from 'apollo-server';

export default gql`
  type Tool {
    id: ID!
    title: String!
    link: String!
    description: String!
    tags: [String!]!
  }

  extend type Query {
    tools: [Tool!]!
  }

  extend type Mutation {
    createTool(title: String!, link: String!, description: String!, tags: [String]): Tool!
  }
`;
