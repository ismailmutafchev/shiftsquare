import { gql } from '@apollo/client'

export const getTemplate = gql` query($id: uuid!) {
    template_by_pk(id: $id) {
        id
        created_at
        updated_at
        shifts
    }
}
`;

export const getTemplates = gql` query {
    template {
        id
        created_at
        updated_at
        shifts
    }
}
`;