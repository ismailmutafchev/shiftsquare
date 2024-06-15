import { gql } from '@apollo/client'

export const getOrganizationByName = gql` query getOrganizationByName($name: String) {
    organization(where: {name: {_eq: $name}}) {
        id
        name
    }
}`;

export const getOrganizationById = gql` query getOrganizationById($id: uuid!) {
    organization_by_pk(id: $id) {
        id
        createdAt
        updatedAt
        name
        yearEnd
        holidayAllowance
        location
    }
}`;

