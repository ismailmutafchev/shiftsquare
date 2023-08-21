import { gql } from '@apollo/client'

export const getPositions = gql` query {
    position {
        id
        name
        bgColor
    }
}

`;

export const getPosition = gql` query($id: uuid!) {
    position_by_pk(id: $id) {
        id
        name
        bgColor
    }
}
`;