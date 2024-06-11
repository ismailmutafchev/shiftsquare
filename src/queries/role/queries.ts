import { gql } from "@apollo/client";

export const getRoles = gql`
  query Roles {
    role {
      id
      name
    }
  }
`;
