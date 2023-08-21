import { gql } from '@apollo/client'

export const addShiftOne = gql`
    mutation addShiftOne($object: shift_insert_input!) {
        insert_shift_one(object: $object) {
            id
            start
            end
            positionId
        }
    }
`;

export const deleteShiftById = gql`
    mutation deleteShiftById($id: uuid!) {
        delete_shift_by_pk(id: $id) {
            id
            start
            end
            positionId
        }
}`;

export const updateShiftById = gql` 
    mutation updateShiftById($id: uuid!, $start: timestamptz!, $end: timestamptz!, $positionId: uuid!, $employee_id: uuid!, $length: numeric ) {
        update_shift_by_pk(pk_columns: {id: $id}, _set: {start: $start, end: $end, positionId: $positionId, employee_id: $employee_id, length: $length}) {
            id
            start
            end
            positionId
        }
    }
    
`;

export const deleteShiftsByPositionId = gql`
    mutation deleteShiftsByPositionId($positionId: uuid!) {
        delete_shift(where: {positionId: {_eq: $positionId}}) {
            affected_rows
        }
    }
`;
