import { gql } from "@apollo/client";

export const getShifts = gql` query Shifts($start: timestamptz!, $end: timestamptz!) {
    shift(where: {start: {_lte: $end}, end: {_gte: $start}}, order_by:{positionId: asc}) {
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
          id
          bgColor
          name
        }
}
},
`;

export const getShiftsToPrint = gql` query ShiftToPrint($start: timestamptz!, $end: timestamptz!) {
  shift(where: {start: {_gte: $start}, _and: {start: {_lte: $end}}}, order_by: {positionId: asc}) {
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
        id
        bgColor
        name
      }
}
},
`;

export const getWorkingHours = gql`
  query ShiftAggregate($start: timestamptz!, $end: timestamptz!) {
    shift_aggregate(where: { start: { _gte: $start }, end: { _lte: $end } }) {
      aggregate {
        sum {
          length
        }
      }
    }
  }
`;


export const getShiftsByEmployee = gql`
  query ShiftByEmploye ($start: timestamptz!, $employeeId: uuid!) {
    shift(
      where: { start: { _gte: $start }, employeeId: { _eq: $employeeId }, commited: { _eq: true } },
      order_by: { start: asc }
    ) {
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
        id
        bgColor
        name
      }
    }
  }
`;

export const getHoursByPosition = gql`
  query HoursByPosition ($start: timestamptz!, $end: timestamptz!) {
    shift(
      distinct_on: positionId
      where: { start: { _gte: $start }, end: { _lte: $end } }
    ) {
      position {
        shift_aggregate(
          where: { start: { _gte: $start }, end: { _lte: $end } }
        ) {
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
  }
`;

export const getHoursByEmployee = gql`
  query HoursByEmployee ($start: timestamptz!, $end: timestamptz!) {
    shift(
      distinct_on: [employeeId]
      where: { start: { _gte: $start }, end: { _lte: $end } }
    ) {
      id
      employee {
        shift_aggregate(
          where: { start: { _gte: $start }, end: { _lte: $end } }
        ) {
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
  }
`;

export const getHoursByDay = gql`
  query HoursByDay(
    $monday: timestamptz
    $tuesday: timestamptz
    $wednesday: timestamptz
    $thursday: timestamptz
    $friday: timestamptz
    $saturday: timestamptz
    $sunday: timestamptz
    $sundayE: timestamptz
  ) {
    monday: shift_aggregate(
      where: { _and: { start: { _gte: $monday } }, start: { _lt: $tuesday } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    tuesday: shift_aggregate(
      where: { _and: { start: { _gte: $tuesday } }, start: { _lt: $wednesday } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    wednesday: shift_aggregate(
      where: {
        _and: { start: { _gte: $wednesday } }
        start: { _lt: $thursday }
      }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    thursday: shift_aggregate(
      where: { _and: { start: { _gte: $thursday } }, start: { _lt: $friday } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    friday: shift_aggregate(
      where: { _and: { start: { _gte: $friday } }, start: { _lt: $saturday } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    saturday: shift_aggregate(
      where: { _and: { start: { _gte: $saturday } }, start: { _lt: $sunday } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
    sunday: shift_aggregate(
      where: { _and: { start: { _gte: $sunday } }, start: { _lt: $sundayE } }
    ) {
      aggregate {
        sum {
          length
        }
      }
    }
  }
`;
