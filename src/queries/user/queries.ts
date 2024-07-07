import { gql } from "@apollo/client";

export const getEmployees = gql`
  query Users {
    user {
      id
      firstName
      lastName
      email
      bgColor
      payDetails
      contractedHours
      startDate
      positions {
        positionId
      }
      role {
        name
      }
    }
  }
`;

export const getEmployee = gql`
  query User($id: uuid!) {
    user_by_pk(id: $id) {
      id
      firstName
      lastName
      email
      bgColor
      payDetails
      contractedHours
      startDate
      role {
        name
      }
      positions {
        positionId
      }
    }
  }
`;
export const getProfile = gql`
  query getProfileByAuthId($authId: String!) {
    user(where: { authId: { _eq: $authId } }) {
      id
      createdAt
      updatedAt
      contractedHours
      startDate
      bgColor
      email
      organizationId
      firstName
      lastName
      onboarded
      authId
      role {
        name
      }
    }
  }
`;

export const getContractedHours = gql`
  query ContractedHours {
    user_aggregate {
      aggregate {
        sum {
          contractedHours
        }
      }
    }
  }
`;
// export const getBookedHolidays = gql` query BookedHolidays {
//     leave_aggregate(where: {type: {_eq: holiday}}) {
//       aggregate {
//         sum {
//           length
//         }
//       }
//     }
//   }
// `;
