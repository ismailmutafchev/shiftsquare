import { gql } from '@apollo/client'

export const insertTemplate = gql` mutation($shifts: jsonb!) {
    insert_template_one(object: {shifts: $shifts}) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;

export const updateTemplateById = gql` mutation($id: uuid!, $shifts: jsonb!) {
    update_template_by_pk(pk_columns: {id: $id}, _set: {shifts: $shifts}) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;

export const deleteTemplateById = gql` mutation($id: uuid!) {
    delete_template_by_pk(id: $id) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;