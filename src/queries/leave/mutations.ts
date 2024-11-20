import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const insertLeave = gql`
  ${LeaveFragment}
  mutation CreateLeaveOne($object: leave_request_insert_input!) {
    insert_leave_request_one(object: $object) {
      ...LeaveFragment
    }
  }
`;

export const updateLeaveOne = gql`
  ${LeaveFragment}
  mutation UpdateLeaveById($id: uuid!, $object: leave_request_set_input!) {
    update_leave_request_by_pk(pk_columns: { id: $id }, _set: $object) {
      ...LeaveFragment
    }
  }
`;

export const deleteLeaveOne = gql`
  ${LeaveFragment}
  mutation DeleteLeaveById($id: uuid!) {
    delete_leave_request_by_pk(id: $id) {
      ...LeaveFragment
    }
  }
`;

export const updateReadStatus = gql`
  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {
    update_leave_request_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {
      id
    }
  }
`;

export const UpdateLeaveStatus = gql`
  mutation UpdateLeaveStatus($id: uuid!, $status: leave_status_enum! ) {
    update_leave_request_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
    }
  }
`;
