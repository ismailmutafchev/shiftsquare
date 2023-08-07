import { gql } from '@apollo/client'

export const getEmployees = gql` query {    
        user {
            id
            first_name
            last_name
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
        first_name
        last_name
        email
          role{
            name
        }
    }
}
`;
export const getProfile = gql` query($auth_id: String!) {
    user(where: {auth_id: {_eq: $auth_id}}) {
        id
        email
        organization_id
        first_name
        last_name
        onboarded
        auth_id
    }
}
`;