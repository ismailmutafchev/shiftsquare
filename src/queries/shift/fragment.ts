
import { gql } from '@apollo/client';

export const ShiftFragment = gql`
  fragment ShiftFragment on Shift {
    id
    start
    end
    duration
  }
`;
