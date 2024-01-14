import { gql } from "@apollo/client";

export const updateUserRole = gql`
  mutation updateUserRole($id: uuid!, $object: user_set_input!) {
    update_user_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
      roleId
    }
  }
`;
