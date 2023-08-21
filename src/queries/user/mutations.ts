import { gql } from '@apollo/client'

export const addUserOne = gql` mutation addUserOne($object: user_insert_input!) {
    insert_user_one(object: $object) {
        id
        firstName
        lastName
        email
            role{
                name
            }

    }
}
`;

export const deleteUserById = gql` mutation deleteUserById($id: uuid!) {
    delete_user_by_pk(id: $id) {
        id
        firstName
        lastName
        email
            role{
                name
            }

    }
}`;

export const updateUserById = gql` mutation updateUserById($id: uuid!, $object: user_set_input!) {
    update_user_by_pk(pk_columns: {id: $id}, _set: $object) {
        id
        firstName
        lastName
        email
            role{
                name
            }
    }
}`;