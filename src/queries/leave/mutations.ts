import { gql } from '@apollo/client'
import { LeaveFragment } from './fragment'

export const CreateLeave = gql`
  mutation CreateLeave($input: CreateLeaveInput!) {
    createLeave(input: $input) {
      ...LeaveFragment
    }
  }
  ${LeaveFragment}
`
