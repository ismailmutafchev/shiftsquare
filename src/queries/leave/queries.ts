import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const getLeaveOne = gql`
  query GetLeave($id: uuid!) {
    leave_by_pk(id: $id) {
      id 
      start
      end
      details
      type
      status
      readBy
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
      readBy
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
export const getPendingLeave = gql`
  ${LeaveFragment}
  query GetPendingLeave {
    leave(where: {status: {_eq: "pending"}}) {
      id 
      start
      end
      details
      type
      status
      readBy
      user {
        id
        firstName 
        lastName
      }
    }
  }
`