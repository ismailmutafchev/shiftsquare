import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const insertLeave = gql`
  ${LeaveFragment}
  mutation CreateLeaveOne($object: leaveRequest_insert_input!) {
    insert_leaveRequest_one(object: $object) {
      ...LeaveFragment
    }
  }
`;

export const updateLeaveOne = gql`
  ${LeaveFragment}
  mutation UpdateLeaveById($id: uuid!, $object: leaveRequest_set_input!) {
    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: $object) {
      ...LeaveFragment
    }
  }
`;

export const deleteLeaveOne = gql`
  ${LeaveFragment}
  mutation DeleteLeaveById($id: uuid!) {
    delete_leaveRequest_by_pk(id: $id) {
      ...LeaveFragment
    }
  }
`;

export const updateReadStatus = gql`
  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {
    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {
      id
    }
  }
`;

export const UpdateLeaveStatus = gql`
  mutation UpdateLeaveStatus($id: uuid!, $status: leaveStatus_enum! ) {
    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
    }
  }
`;
