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