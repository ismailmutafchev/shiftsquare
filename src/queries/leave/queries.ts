import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";
export const getLeaveOne = gql`
  query GetLeave($id: uuid!) {
    leaveRequest_by_pk(id: $id) {
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
      leave_status {
        status
        bgColor
      }
    }
  }
  ${LeaveFragment}
`;
export const getLeaveAll = gql`
  ${LeaveFragment}
  query GetLeaveAll {
    leaveRequest(order_by: { start: asc }) {
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
      leave_type {
        value
        bgColor
      }
      leave_status {
        status
        bgColor
      }
    }
  }
`;

export const getLeaveTypes = gql`
  query GetLeaveTypes {
    leaveType {
      value
      bgColor
    }
  }
`;
export const getPendingLeave = gql`
  ${LeaveFragment}
  query GetPendingLeave {
    leaveRequest(where: { status: { _eq: Pending } }) {
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
    leaveRequest(where: { status: { _eq: Approved } }) {
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
    leaveStatus {
      status
    }
  }
`;

export const getUserApprovedLeave = gql`
  query userApprovedLeave($userId: uuid) {
    leaveRequest_aggregate(
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

export const getUserLeaveAll = gql`
  ${LeaveFragment}
  query GetUserLeave($userId: uuid!) {
    leaveRequest(where: { userId: { _eq: $userId } }) {
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
      leave_type {
        value
        bgColor
      }
      leave_status {
        status
        bgColor
      }
    }
  }
`;
