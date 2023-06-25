import { gql } from '@apollo/client'

export const addPositionOne = gql` mutation addPositionOne($object: position_insert_input!) {
    insert_position_one(object: $object) {
        id
        name
        bg_color
    }
}
`;

export const deletePositionById = gql` mutation deletePositionById($id: uuid!) {
    delete_position_by_pk(id: $id) {
        id
        name
        bg_color
    }
}`;

export const updatePositionById = gql` mutation updatePositionById($id: uuid!, $object: position_set_input!) {
    update_position_by_pk(pk_columns: {id: $id}, _set: $object) {
        id
        name
        bg_color
    }
}`;
