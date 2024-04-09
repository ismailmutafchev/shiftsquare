import { gql } from "@apollo/client";
import { LeaveFragment } from "./fragment";

export const getLeave = gql`
  query GetLeave($id: uuid!) {
    getLeave(id: $id) {
      ...LeaveFragment
    }
  }
  ${LeaveFragment}
`
