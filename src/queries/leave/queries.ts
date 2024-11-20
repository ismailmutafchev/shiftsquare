import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const getLeaveOne = gql`
  query GetLeave($id: uuid!) {
    leave_request_by_pk(id: $id) {
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
    leave_request(order_by: { start: asc }) {
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
    leave_type {
      value
      bgColor
    }
  }
`;
export const getPendingLeave = gql`
  ${LeaveFragment}
  query GetPendingLeave {
    leave_request(where: { status: { _eq: Pending } }) {
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
    leave_request(where: { status: { _eq: Approved } }) {
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
    leave_request_aggregate(
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
    leave_request(where: { userId: { _eq: $userId } }) {
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
