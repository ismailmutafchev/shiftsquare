import { gql } from '@apollo/client'

export const addPositionOne = gql` mutation addPositionOne($object: position_insert_input!) {
    insert_position_one(object: $object) {
        id
        name
        bgColor
    }
}
`;

export const deletePositionById = gql` mutation deletePositionById($id: uuid!) {
    delete_position_by_pk(id: $id) {
        id
        name
        bgColor
    }
}`;

export const updatePositionById = gql` mutation updatePositionById($id: uuid!, $object: position_set_input!) {
    update_position_by_pk(pk_columns: {id: $id}, _set: $object) {
        id
        name
        bgColor
    }
}`;

export const addUserPosition = gql` mutation addUserPosition($object: user_position_insert_input!) {
    insert_user_position_one(object: $object) {
        userId
        positionId
    }
}`;

export const deleteUserPosition = gql` mutation deleteUserPosition($userId: uuid!, $positionId: uuid!) {
    delete_user_position(where: {userId: {_eq: $userId}, positionId: {_eq: $positionId}}) {
        affected_rows
    }
}`;
