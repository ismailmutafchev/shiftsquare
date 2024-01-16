import { gql } from '@apollo/client'

export const addOrganizationOne = gql` mutation addOrganizationOne($object: organization_insert_input!) {
    insert_organization_one(object: $object) {
        id
        name
    }
}
`;