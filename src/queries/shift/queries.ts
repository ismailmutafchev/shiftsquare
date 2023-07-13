import { gql } from '@apollo/client'

export const getShifts = gql` query($start: timestamptz!, $end: timestamptz!) {
    shift(where: {start: {_gte: $start}, end: {_lte: $end}}) {
        id
        start
        end
        position_id
        employee_id
        employee {
            first_name
        }
        position {
            bg_color
            name
        }
}
},
`;
