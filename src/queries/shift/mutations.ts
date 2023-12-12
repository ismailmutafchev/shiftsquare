import { gql } from '@apollo/client'
import { ShiftFragment } from './fragment'

export const addShiftOne = gql`
    ${ShiftFragment}
    mutation addShiftOne($object: shift_insert_input!) {
        insert_shift_one(object: $object) {
            ...ShiftFragment
        }
    }
`;

export const addShiftsMany = gql`
    mutation addShifts($objects: [shift_insert_input!]!) {
        insert_shift(objects: $objects) {
            affected_rows
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
    mutation updateShiftById($id: uuid!, $start: timestamptz!, $end: timestamptz!, $positionId: uuid!, $employeeId: uuid!, $length: numeric ) {
        update_shift_by_pk(pk_columns: {id: $id}, _set: {start: $start, end: $end, positionId: $positionId, employeeId: $employeeId, length: $length}) {
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
