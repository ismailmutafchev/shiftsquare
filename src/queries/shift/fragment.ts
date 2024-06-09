
import { gql } from '@apollo/client';

export const ShiftFragment = gql`
  fragment ShiftFragment on shift {
    id
    start
    end
  }
`;
