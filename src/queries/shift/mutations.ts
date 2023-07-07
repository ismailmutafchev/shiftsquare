import { gql } from '@apollo/client'

export const addShiftOne = gql`
    mutation addShiftOne($object: shift_insert_input!) {
        insert_shift_one(object: $object) {
            id
            start
            end
            position_id
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

export const updateShiftById = gql` 
    mutation updateShiftById($id: uuid!, $start: timestamptz!, $end: timestamptz!, $position_id: uuid!) {
        update_shift_by_pk(pk_columns: {id: $id}, _set: {start: $start, end: $end, position_id: $position_id}) {
            id
            start
            end
            position_id
        }
    }
    
`;
