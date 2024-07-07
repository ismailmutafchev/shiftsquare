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
      duration
      user {
        id
        firstName
        lastName
      }
    }
  }
  ${LeaveFragment}
`;
export const getLeaveAll = gql`
  ${LeaveFragment}
  query GetLeaveAll {
    leave(order_by: { start: asc }) {
      id
      start
      end
      details
      type
      status
      readBy
      duration
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const getLeaveTypes = gql`
  query GetLeaveTypes {
    leave_type {
      value
      bgColor
    }
  }
`;
export const getPendingLeave = gql`
  ${LeaveFragment}
  query GetPendingLeave {
    leave(where: { status: { _eq: Pending } }) {
      id
      start
      end
      details
      type
      status
      readBy
      duration
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const getApprovedLeave = gql`
  ${LeaveFragment}
  query GetApprovedLeave {
    leave(where: { status: { _eq: Approved } }) {
      id
      start
      end
      details
      type
      status
      readBy
      duration
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const getLeaveStatus = gql`
  query GetLeaveStatus {
    leave_status {
      status
    }
  }
`;

export const getUserApprovedLeave = gql`
  query userApprovedLeave($userId: uuid) {
    leave_aggregate(
      where: { userId: { _eq: $userId }, status: { _eq: Approved } }
    ) {
      aggregate {
        sum {
          duration
        }
      }
    }
  }
`;
