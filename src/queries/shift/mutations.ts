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

export const deleteShiftById = gql`
    mutation deleteShiftById($id: uuid!) {
        delete_shift_by_pk(id: $id) {
            id
            start
            end
            position_id
        }
}`;

export const updateShiftById = gql` 
    mutation updateShiftById($id: uuid!, $start: timestamptz!, $end: timestamptz!, $position_id: uuid!, $employee_id: uuid!, $length: numeric ) {
        update_shift_by_pk(pk_columns: {id: $id}, _set: {start: $start, end: $end, position_id: $position_id, employee_id: $employee_id, length: $length}) {
            id
            start
            end
            position_id
        }
    }
    
`;

export const deleteShiftsByPositionId = gql`
    mutation deleteShiftsByPositionId($position_id: uuid!) {
        delete_shift(where: {position_id: {_eq: $position_id}}) {
            affected_rows
        }
    }
`;
