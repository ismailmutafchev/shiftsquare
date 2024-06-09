
import { gql } from '@apollo/client';

export const LeaveFragment = gql`
  fragment LeaveFragment on leave {
    id
    created_at
    updated_at
    details
    type
    status
    start
    end
  }
`;
