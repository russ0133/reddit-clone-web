import { gql } from "urql";

export const MUTATION_REGISTER = gql`
  mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        message
        field
      }
      user {
        id
        username
      }
    }
  }
`;
