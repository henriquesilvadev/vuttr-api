import ToolSchema from './tool-schema';
import { gql } from 'apollo-server';

const LinkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [LinkSchema, ToolSchema];
