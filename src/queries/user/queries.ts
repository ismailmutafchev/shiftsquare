import { gql } from '@apollo/client'

export const getEmployees = gql` query {    
        user {
            id
            first_name
            last_name
            email
            role{
              role{
                name
              }
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
          role{
            name
          }
        }
    }
}
`;