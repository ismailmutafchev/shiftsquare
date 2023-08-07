import { gql } from '@apollo/client'

export const getOrganizationByName = gql` query($name: String) {
    organization(where: {name: {_eq: $name}}) {
        id
        name
    }
}`;

