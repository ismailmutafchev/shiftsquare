import { gql } from '@apollo/client'

export const getShifts = gql` query($start: timestamptz!, $end: timestamptz!) {
    shift(where: {start: {_gte: $start}, end: {_lte: $end}}) {
        id
        start
        end
        positionId
        employeeId
        length
        employee {
            firstName
        }
        position {
            bgColor
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
    shift(distinct_on: [positionId], where: {start: {_gte: $start}, end: {_lte: $end}}) {
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
        bgColor
      }
    }
  }`

  export const getHoursByEmployee = gql`query($start: timestamptz!, $end: timestamptz!){
    shift(distinct_on: [employeeId], where: {start: {_gte: $start}, end: {_lte: $end}}) {
      id
      employee {
        shift_aggregate {
          aggregate {
            sum {
              length
            }
          }
        }
        firstName
        lastName
        id
      }
    }
  }`
