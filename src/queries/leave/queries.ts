import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const getLeaveOne = gql`
  query GetLeave($id: uuid!) {
    getLeave(id: $id) {
      ...LeaveFragment
    }
  }
  ${LeaveFragment}
`
export const getLeaveAll = gql`
  ${LeaveFragment}
  query GetLeaveAll {
    leave(order_by: {start: asc}) {
      id 
      start
      end
      details
      type
      status

    }
  }
`

export const getLeaveTypes = gql`
  query GetLeaveTypes {
    leave_type {
      value
      bgColor
    }
  }
`
