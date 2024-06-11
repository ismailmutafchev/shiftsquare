import { gql } from '@apollo/client'

export const getOrganizationByName = gql` query getOrganizationByName($name: String) {
    organization(where: {name: {_eq: $name}}) {
        id
        name
    }
}`;

