import { gql } from '@apollo/client'

export const getTemplate = gql` query Template($id: uuid!) {
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

export const getTemplates = gql` query Temlates{
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