import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const insertLeave = gql`
  ${LeaveFragment}
  mutation CreateLeaveOne($object: leave_insert_input!) {
    insert_leave_one(object: $object) {
      ...LeaveFragment
    }
  }
`;

export const updateLeaveOne = gql`
  ${LeaveFragment}
  mutation UpdateLeaveById($id: uuid!, $object: leave_set_input!) {
    update_leave_by_pk(pk_columns: { id: $id }, _set: $object) {
      ...LeaveFragment
    }
  }
`;

export const deleteLeaveOne = gql`
  ${LeaveFragment}
  mutation DeleteLeaveById($id: uuid!) {
    delete_leave_by_pk(id: $id) {
      ...LeaveFragment
    }
  }
`;

export const updateReadStatus = gql`
  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {
    update_leave_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {
      id
    }
  }
`;
