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
            payDetails
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
    shift(distinct_on: positionId, where: {start: {_gte: $start}, end: {_lte: $end}}) {
      position {
        shift_aggregate(where: {start: {_gte: $start}, end: {_lte: $end}}) {
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
        shift_aggregate(where: {start: {_gte: $start}, end: {_lte: $end}}) {
          aggregate {
            sum {
              length
            }
          }
        }
        firstName
        lastName
        id
        bgColor
      }
    }
  }`

export const getHoursByDay = gql`query MyQuery($monday: timestamptz, $tuesday: timestamptz, $wednesday: timestamptz, $thursday: timestamptz, $friday: timestamptz, $saturday: timestamptz, $sunday: timestamptz, $sundayE: timestamptz ) {
  monday: shift_aggregate(where: {_and: {start: {_gte: $monday}}, start: {_lt: $tuesday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
  tuesday: shift_aggregate(where: {_and: {start: {_gte: $tuesday}}, start: {_lt: $wednesday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
    wednesday: shift_aggregate(where: {_and: {start: {_gte: $wednesday}}, start: {_lt: $thursday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
    thursday: shift_aggregate(where: {_and: {start: {_gte: $thursday}}, start: {_lt: $friday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
    friday: shift_aggregate(where: {_and: {start: {_gte: $friday}}, start: {_lt: $saturday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
    saturday: shift_aggregate(where: {_and: {start: {_gte: $saturday}}, start: {_lt: $sunday}}) {
    aggregate {
      sum {
        length
      }
    }
  }
    sunday: shift_aggregate(where: {_and: {start: {_gte: $sunday}}, start: {_lt: $sundayE}}) {
    aggregate {
      sum {
        length
      }
    }
  }
}`
