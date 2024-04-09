
import { gql } from '@apollo/client';

export const LeaveFragment = gql`
  fragment LeaveFragment on Leave {
    id
    createdAt
    updatedAt
    details
    type
    status
    start
    end
    duration
  }
`;
