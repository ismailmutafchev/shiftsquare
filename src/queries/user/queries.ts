import { gql } from '@apollo/client'

export const getEmployees = gql` query {    
        user {
            id
            firstName
            lastName
            email
            role{
                name
            }
        }
    }
`;

export const getEmployee = gql` query($id: uuid!) {
    user_by_pk(id: $id) {
        id
        firstName
        lastName
        email
          role{
            name
        }
    }
}
`;
export const getProfile = gql` query($authId: String!) {
    user(where: {authId: {_eq: $authId}}) {
        id
        email
        organizationId
        firstName
        lastName
        onboarded
        auth_id
    }
}
`;