import { gql } from '@apollo/client';

export const UserFields = gql`
  fragment UserLines on User {
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
  payRate
  contractedHours
  bgColor
  role {
    id
    name
    description
    createdAt
    updatedAt
  }
}
`;