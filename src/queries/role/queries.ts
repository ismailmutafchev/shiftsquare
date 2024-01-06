import { gql } from "@apollo/client";

export const getRoles = gql`
  query {
    role {
      id
      name
    }
  }
`;
