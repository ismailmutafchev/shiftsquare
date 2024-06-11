import { gql } from '@apollo/client'

export const insertTemplate = gql` mutation addTemplateOne($object: template_insert_input!) {
    insert_template_one(object: $object) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;

export const updateTemplateById = gql` mutation updateTemplateOne($id: uuid!, $shifts: jsonb!) {
    update_template_by_pk(pk_columns: {id: $id}, _set: {shifts: $shifts}) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;

export const deleteTemplateById = gql` mutation DeleteTemplateOne($id: uuid!) {
    delete_template_by_pk(id: $id) {
        id
        createdAt
        updatedAt
        shifts
    }
}
`;