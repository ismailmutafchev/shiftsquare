import { gql } from '@apollo/client'

export const getTemplate = gql` query($id: uuid!) {
    template_by_pk(id: $id) {
        id
        createdAt
        updatedAt
        shifts
        name
        hours
    }
}
`;

export const getTemplates = gql` query {
    template {
        id
        createdAt
        updatedAt
        shifts
        name
        hours
    }
}
`;