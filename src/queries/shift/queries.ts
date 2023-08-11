import { gql } from '@apollo/client'

export const getShifts = gql` query($start: timestamptz!, $end: timestamptz!) {
    shift(where: {start: {_gte: $start}, end: {_lte: $end}}) {
        id
        start
        end
        position_id
        employee_id
        length
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

export const getWorkingHours = gql` query($start: timestamptz!, $end: timestamptz!) {
    shift_aggregate(where: {start: {_gte: $start}, end: {_lte: $end}}) {
        aggregate {
            sum {
                length
            }
        }
    }
}
`;

export const getHoursByPosition = gql`query($start: timestamptz!, $end: timestamptz!){
    shift(distinct_on: [position_id], where: {start: {_gte: $start}, end: {_lte: $end}}) {
      position {
        shift_aggregate {
          aggregate {
            sum {
              length
            }
          }
        }
        name
        id
        bg_color
      }
    }
  }`

  export const getHoursByEmployee = gql`query($start: timestamptz!, $end: timestamptz!){
    shift(distinct_on: [employee_id], where: {start: {_gte: $start}, end: {_lte: $end}}) {
      id
      employee {
        shift_aggregate {
          aggregate {
            sum {
              length
            }
          }
        }
        first_name
        last_name
        id
      }
    }
  }`
