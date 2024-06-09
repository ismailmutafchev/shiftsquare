import { gql } from '@apollo/client';

export const UserFields = gql`
  fragment UserLines on user {
  id
  createdAt
  updatedAt
  firstName
  lastName
  email
  contactDetails
  authId
  lastSeen
  organizationId
  roleId
  onboarded
  contractedHours
  bgColor
  role {
    id
    name
    createdAt
    updatedAt
  }
}
`;