import { gql } from '@apollo/client'

export const getPositions = gql` query Positions {
    position {
        id
        name
        bgColor
    }
}

`;

export const getPosition = gql` query Position($id: uuid!) {
    position_by_pk(id: $id) {
        id
        name
        bgColor
    }
}
`;