/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment LeaveFragment on leaveRequest {\n    id\n    created_at\n    updated_at\n    details\n    type\n    status\n    start\n    end\n  }\n": types.LeaveFragmentFragmentDoc,
    "\n  \n  mutation CreateLeaveOne($object: leaveRequest_insert_input!) {\n    insert_leaveRequest_one(object: $object) {\n      ...LeaveFragment\n    }\n  }\n": types.CreateLeaveOneDocument,
    "\n  \n  mutation UpdateLeaveById($id: uuid!, $object: leaveRequest_set_input!) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: $object) {\n      ...LeaveFragment\n    }\n  }\n": types.UpdateLeaveByIdDocument,
    "\n  \n  mutation DeleteLeaveById($id: uuid!) {\n    delete_leaveRequest_by_pk(id: $id) {\n      ...LeaveFragment\n    }\n  }\n": types.DeleteLeaveByIdDocument,
    "\n  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {\n      id\n    }\n  }\n": types.UpdateReadStatusDocument,
    "\n  mutation UpdateLeaveStatus($id: uuid!, $status: leaveStatus_enum! ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n": types.UpdateLeaveStatusDocument,
    "\n  query GetLeave($id: uuid!) {\n    leaveRequest_by_pk(id: $id) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n  \n": types.GetLeaveDocument,
    "\n  \n  query GetLeaveAll {\n    leaveRequest(order_by: { start: asc }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n": types.GetLeaveAllDocument,
    "\n  query GetLeaveTypes {\n    leaveType {\n      value\n      bgColor\n    }\n  }\n": types.GetLeaveTypesDocument,
    "\n  \n  query GetPendingLeave {\n    leaveRequest(where: { status: { _eq: Pending } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.GetPendingLeaveDocument,
    "\n  \n  query GetApprovedLeave {\n    leaveRequest(where: { status: { _eq: Approved } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.GetApprovedLeaveDocument,
    "\n  query GetLeaveStatus {\n    leaveStatus {\n      status\n    }\n  }\n": types.GetLeaveStatusDocument,
    "\n  query userApprovedLeave($userId: uuid) {\n    leaveRequest_aggregate(\n      where: { userId: { _eq: $userId }, status: { _eq: Approved } }\n    ) {\n      aggregate {\n        sum {\n          duration\n        }\n      }\n    }\n  }\n": types.UserApprovedLeaveDocument,
    "\n  \n  query GetUserLeave($userId: uuid!) {\n    leaveRequest(where: { userId: { _eq: $userId } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n": types.GetUserLeaveDocument,
    " mutation addOrganizationOne($object: organization_insert_input!) {\n    insert_organization_one(object: $object) {\n        id\n        name\n    }\n}\n": types.AddOrganizationOneDocument,
    "\n  query getOrganizationByName($name: String) {\n    organization(where: { name: { _eq: $name } }) {\n      id\n      name\n    }\n  }\n": types.GetOrganizationByNameDocument,
    "\n  query getOrganizationById($id: uuid!) {\n    organization_by_pk(id: $id) {\n      id\n      createdAt\n      updatedAt\n      name\n      yearEnd\n      holidayAllowance\n      location\n    }\n  }\n": types.GetOrganizationByIdDocument,
    "\n  query MyQuery {\n    plans {\n      name\n      price\n      description\n      id\n      featured\n      priceId\n    }\n  }\n": types.MyQueryDocument,
    " mutation addPositionOne($object: position_insert_input!) {\n    insert_position_one(object: $object) {\n        id\n        name\n        bgColor\n    }\n}\n": types.AddPositionOneDocument,
    " mutation deletePositionById($id: uuid!) {\n    delete_position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}": types.DeletePositionByIdDocument,
    " mutation updatePositionById($id: uuid!, $object: position_set_input!) {\n    update_position_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        name\n        bgColor\n    }\n}": types.UpdatePositionByIdDocument,
    " mutation addUserPosition($object: user_position_insert_input!) {\n    insert_user_position_one(object: $object) {\n        userId\n        positionId\n    }\n}": types.AddUserPositionDocument,
    " mutation deleteUserPosition($userId: uuid!, $positionId: uuid!) {\n    delete_user_position(where: {userId: {_eq: $userId}, positionId: {_eq: $positionId}}) {\n        affected_rows\n    }\n}": types.DeleteUserPositionDocument,
    " query Positions {\n    position {\n        id\n        name\n        bgColor\n    }\n}\n\n": types.PositionsDocument,
    " query Position($id: uuid!) {\n    position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}\n": types.PositionDocument,
    "\n  mutation updateUserRole($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: { id: $id }, _set: $object) {\n      id\n      roleId\n    }\n  }\n": types.UpdateUserRoleDocument,
    "\n  query Roles {\n    role {\n      id\n      name\n    }\n  }\n": types.RolesDocument,
    "\n  fragment ShiftFragment on shift {\n    id\n    start\n    end\n  }\n": types.ShiftFragmentFragmentDoc,
    "\n  \n  mutation addShiftOne($object: shift_insert_input!) {\n    insert_shift_one(object: $object) {\n      ...ShiftFragment\n    }\n  }\n": types.AddShiftOneDocument,
    "\n  mutation addShifts($objects: [shift_insert_input!]!) {\n    insert_shift(objects: $objects) {\n      affected_rows\n    }\n  }\n": types.AddShiftsDocument,
    "\n  mutation deleteShiftById($id: uuid!) {\n    delete_shift_by_pk(id: $id) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n": types.DeleteShiftByIdDocument,
    "\n  mutation updateShiftById(\n    $id: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n    $positionId: uuid!\n    $employeeId: uuid!\n    $length: numeric\n  ) {\n    update_shift_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        start: $start\n        end: $end\n        positionId: $positionId\n        employeeId: $employeeId\n        length: $length\n        commited: false\n      }\n    ) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n": types.UpdateShiftByIdDocument,
    "\n  mutation deleteShiftsByPositionId($positionId: uuid!) {\n    delete_shift(where: { positionId: { _eq: $positionId } }) {\n      affected_rows\n    }\n  }\n": types.DeleteShiftsByPositionIdDocument,
    "\n  mutation commitShifts(\n    $start: timestamptz!\n    $end: timestamptz!\n    $organizationId: uuid!\n  ) {\n    update_shift_many(\n      updates: {\n        where: {\n          start: { _gte: $start }\n          end: { _lte: $end }\n          organizationId: { _eq: $organizationId }\n          commited: { _eq: false }\n        }\n        _set: { commited: true }\n      }\n    ) {\n      affected_rows\n    }\n  }\n": types.CommitShiftsDocument,
    "\n  mutation updateShiftStartTime($id: uuid!, $start: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { start: $start }) {\n      id\n      start\n    }\n  }\n": types.UpdateShiftStartTimeDocument,
    "\n  mutation updateShiftEndTime($id: uuid!, $end: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { end: $end }) {\n      id\n      end\n    }\n  }\n": types.UpdateShiftEndTimeDocument,
    " query Shifts($start: timestamptz!, $end: timestamptz!) {\n    shift(where: {start: {_lte: $end}, end: {_gte: $start}}, order_by:{positionId: asc}) {\n        id\n        start\n        end\n        positionId\n        employeeId\n        length\n        employee {\n            firstName\n            payDetails\n        }\n        position {\n          id\n          bgColor\n          name\n        }\n}\n},\n": types.ShiftsDocument,
    " query ShiftToPrint($start: timestamptz!, $end: timestamptz!) {\n  shift(where: {start: {_gte: $start}, _and: {start: {_lte: $end}}}, order_by: {positionId: asc}) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n          firstName\n          payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n}\n},\n": types.ShiftToPrintDocument,
    "\n  query ShiftAggregate($start: timestamptz!, $end: timestamptz!) {\n    shift_aggregate(where: { start: { _gte: $start }, end: { _lte: $end } }) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n": types.ShiftAggregateDocument,
    "\n  query ShiftByEmploye ($start: timestamptz!, $employeeId: uuid!) {\n    shift(\n      where: { start: { _gte: $start }, employeeId: { _eq: $employeeId }, commited: { _eq: true } },\n      order_by: { start: asc }\n    ) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n        firstName\n        payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n    }\n  }\n": types.ShiftByEmployeDocument,
    "\n  query HoursByPosition ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: positionId\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      position {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        name\n        id\n        bgColor\n      }\n    }\n  }\n": types.HoursByPositionDocument,
    "\n  query HoursByEmployee ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: [employeeId]\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      id\n      employee {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        firstName\n        lastName\n        id\n        bgColor\n      }\n    }\n  }\n": types.HoursByEmployeeDocument,
    "\n  query HoursByDay(\n    $monday: timestamptz\n    $tuesday: timestamptz\n    $wednesday: timestamptz\n    $thursday: timestamptz\n    $friday: timestamptz\n    $saturday: timestamptz\n    $sunday: timestamptz\n    $sundayE: timestamptz\n  ) {\n    monday: shift_aggregate(\n      where: { _and: { start: { _gte: $monday } }, start: { _lt: $tuesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    tuesday: shift_aggregate(\n      where: { _and: { start: { _gte: $tuesday } }, start: { _lt: $wednesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    wednesday: shift_aggregate(\n      where: {\n        _and: { start: { _gte: $wednesday } }\n        start: { _lt: $thursday }\n      }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    thursday: shift_aggregate(\n      where: { _and: { start: { _gte: $thursday } }, start: { _lt: $friday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    friday: shift_aggregate(\n      where: { _and: { start: { _gte: $friday } }, start: { _lt: $saturday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    saturday: shift_aggregate(\n      where: { _and: { start: { _gte: $saturday } }, start: { _lt: $sunday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    sunday: shift_aggregate(\n      where: { _and: { start: { _gte: $sunday } }, start: { _lt: $sundayE } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n": types.HoursByDayDocument,
    "\n  query UserPositions($userId: uuid!) {\n    user_position(where: { userId: { _eq: $userId } }) {\n      id\n      positionId\n      position {\n        id\n        name\n        bgColor\n      }\n    }\n  }\n": types.UserPositionsDocument,
    " mutation addTemplateOne($object: template_insert_input!) {\n    insert_template_one(object: $object) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n": types.AddTemplateOneDocument,
    " mutation updateTemplateOne($id: uuid!, $shifts: jsonb!) {\n    update_template_by_pk(pk_columns: {id: $id}, _set: {shifts: $shifts}) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n": types.UpdateTemplateOneDocument,
    " mutation DeleteTemplateOne($id: uuid!) {\n    delete_template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n": types.DeleteTemplateOneDocument,
    " query Template($id: uuid!) {\n    template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n": types.TemplateDocument,
    " query Temlates{\n    template {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n": types.TemlatesDocument,
    "\n  fragment UserLines on user {\n  id\n  createdAt\n  updatedAt\n  firstName\n  lastName\n  email\n  contactDetails\n  authId\n  lastSeen\n  organizationId\n  roleId\n  onboarded\n  contractedHours\n  bgColor\n  contactDetails\n  role {\n    id\n    name\n    createdAt\n    updatedAt\n  }\n}\n": types.UserLinesFragmentDoc,
    " mutation addUserOne($object: user_insert_input!) {\n    insert_user_one(object: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}\n": types.AddUserOneDocument,
    " mutation deleteUserById($id: uuid!) {\n    delete_user_by_pk(id: $id) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}": types.DeleteUserByIdDocument,
    " mutation updateUserById($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n    }\n}": types.UpdateUserByIdDocument,
    "\n  query Users {\n    user {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      positions {\n        positionId\n      }\n      role {\n        name\n      }\n    }\n  }\n": types.UsersDocument,
    "\n  query User($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      role {\n        name\n      }\n      positions {\n        positionId\n      }\n    }\n  }\n": types.UserDocument,
    "\n  query getProfileByAuthId($authId: String!) {\n    user(where: { authId: { _eq: $authId } }) {\n      id\n      createdAt\n      updatedAt\n      contractedHours\n      startDate\n      bgColor\n      email\n      organizationId\n      contactDetails\n      firstName\n      lastName\n      onboarded\n      authId\n      role {\n        name\n      }\n    }\n  }\n": types.GetProfileByAuthIdDocument,
    "\n  query ContractedHours {\n    user_aggregate {\n      aggregate {\n        sum {\n          contractedHours\n        }\n      }\n    }\n  }\n": types.ContractedHoursDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment LeaveFragment on leaveRequest {\n    id\n    created_at\n    updated_at\n    details\n    type\n    status\n    start\n    end\n  }\n"): (typeof documents)["\n  fragment LeaveFragment on leaveRequest {\n    id\n    created_at\n    updated_at\n    details\n    type\n    status\n    start\n    end\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation CreateLeaveOne($object: leaveRequest_insert_input!) {\n    insert_leaveRequest_one(object: $object) {\n      ...LeaveFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation CreateLeaveOne($object: leaveRequest_insert_input!) {\n    insert_leaveRequest_one(object: $object) {\n      ...LeaveFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation UpdateLeaveById($id: uuid!, $object: leaveRequest_set_input!) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: $object) {\n      ...LeaveFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation UpdateLeaveById($id: uuid!, $object: leaveRequest_set_input!) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: $object) {\n      ...LeaveFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation DeleteLeaveById($id: uuid!) {\n    delete_leaveRequest_by_pk(id: $id) {\n      ...LeaveFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation DeleteLeaveById($id: uuid!) {\n    delete_leaveRequest_by_pk(id: $id) {\n      ...LeaveFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateReadStatus($id: uuid!, $readBy: jsonb ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { readBy: $readBy }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateLeaveStatus($id: uuid!, $status: leaveStatus_enum! ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateLeaveStatus($id: uuid!, $status: leaveStatus_enum! ) {\n    update_leaveRequest_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLeave($id: uuid!) {\n    leaveRequest_by_pk(id: $id) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query GetLeave($id: uuid!) {\n    leaveRequest_by_pk(id: $id) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query GetLeaveAll {\n    leaveRequest(order_by: { start: asc }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query GetLeaveAll {\n    leaveRequest(order_by: { start: asc }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLeaveTypes {\n    leaveType {\n      value\n      bgColor\n    }\n  }\n"): (typeof documents)["\n  query GetLeaveTypes {\n    leaveType {\n      value\n      bgColor\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query GetPendingLeave {\n    leaveRequest(where: { status: { _eq: Pending } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query GetPendingLeave {\n    leaveRequest(where: { status: { _eq: Pending } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query GetApprovedLeave {\n    leaveRequest(where: { status: { _eq: Approved } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query GetApprovedLeave {\n    leaveRequest(where: { status: { _eq: Approved } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetLeaveStatus {\n    leaveStatus {\n      status\n    }\n  }\n"): (typeof documents)["\n  query GetLeaveStatus {\n    leaveStatus {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userApprovedLeave($userId: uuid) {\n    leaveRequest_aggregate(\n      where: { userId: { _eq: $userId }, status: { _eq: Approved } }\n    ) {\n      aggregate {\n        sum {\n          duration\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query userApprovedLeave($userId: uuid) {\n    leaveRequest_aggregate(\n      where: { userId: { _eq: $userId }, status: { _eq: Approved } }\n    ) {\n      aggregate {\n        sum {\n          duration\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query GetUserLeave($userId: uuid!) {\n    leaveRequest(where: { userId: { _eq: $userId } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query GetUserLeave($userId: uuid!) {\n    leaveRequest(where: { userId: { _eq: $userId } }) {\n      id\n      start\n      end\n      details\n      type\n      status\n      readBy\n      duration\n      user {\n        id\n        firstName\n        lastName\n      }\n      leave_type {\n        value\n        bgColor\n      }\n      leave_status {\n        status\n        bgColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation addOrganizationOne($object: organization_insert_input!) {\n    insert_organization_one(object: $object) {\n        id\n        name\n    }\n}\n"): (typeof documents)[" mutation addOrganizationOne($object: organization_insert_input!) {\n    insert_organization_one(object: $object) {\n        id\n        name\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrganizationByName($name: String) {\n    organization(where: { name: { _eq: $name } }) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query getOrganizationByName($name: String) {\n    organization(where: { name: { _eq: $name } }) {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getOrganizationById($id: uuid!) {\n    organization_by_pk(id: $id) {\n      id\n      createdAt\n      updatedAt\n      name\n      yearEnd\n      holidayAllowance\n      location\n    }\n  }\n"): (typeof documents)["\n  query getOrganizationById($id: uuid!) {\n    organization_by_pk(id: $id) {\n      id\n      createdAt\n      updatedAt\n      name\n      yearEnd\n      holidayAllowance\n      location\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyQuery {\n    plans {\n      name\n      price\n      description\n      id\n      featured\n      priceId\n    }\n  }\n"): (typeof documents)["\n  query MyQuery {\n    plans {\n      name\n      price\n      description\n      id\n      featured\n      priceId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation addPositionOne($object: position_insert_input!) {\n    insert_position_one(object: $object) {\n        id\n        name\n        bgColor\n    }\n}\n"): (typeof documents)[" mutation addPositionOne($object: position_insert_input!) {\n    insert_position_one(object: $object) {\n        id\n        name\n        bgColor\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation deletePositionById($id: uuid!) {\n    delete_position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}"): (typeof documents)[" mutation deletePositionById($id: uuid!) {\n    delete_position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation updatePositionById($id: uuid!, $object: position_set_input!) {\n    update_position_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        name\n        bgColor\n    }\n}"): (typeof documents)[" mutation updatePositionById($id: uuid!, $object: position_set_input!) {\n    update_position_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        name\n        bgColor\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation addUserPosition($object: user_position_insert_input!) {\n    insert_user_position_one(object: $object) {\n        userId\n        positionId\n    }\n}"): (typeof documents)[" mutation addUserPosition($object: user_position_insert_input!) {\n    insert_user_position_one(object: $object) {\n        userId\n        positionId\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation deleteUserPosition($userId: uuid!, $positionId: uuid!) {\n    delete_user_position(where: {userId: {_eq: $userId}, positionId: {_eq: $positionId}}) {\n        affected_rows\n    }\n}"): (typeof documents)[" mutation deleteUserPosition($userId: uuid!, $positionId: uuid!) {\n    delete_user_position(where: {userId: {_eq: $userId}, positionId: {_eq: $positionId}}) {\n        affected_rows\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query Positions {\n    position {\n        id\n        name\n        bgColor\n    }\n}\n\n"): (typeof documents)[" query Positions {\n    position {\n        id\n        name\n        bgColor\n    }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query Position($id: uuid!) {\n    position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}\n"): (typeof documents)[" query Position($id: uuid!) {\n    position_by_pk(id: $id) {\n        id\n        name\n        bgColor\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserRole($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: { id: $id }, _set: $object) {\n      id\n      roleId\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserRole($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: { id: $id }, _set: $object) {\n      id\n      roleId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Roles {\n    role {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query Roles {\n    role {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ShiftFragment on shift {\n    id\n    start\n    end\n  }\n"): (typeof documents)["\n  fragment ShiftFragment on shift {\n    id\n    start\n    end\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation addShiftOne($object: shift_insert_input!) {\n    insert_shift_one(object: $object) {\n      ...ShiftFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation addShiftOne($object: shift_insert_input!) {\n    insert_shift_one(object: $object) {\n      ...ShiftFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation addShifts($objects: [shift_insert_input!]!) {\n    insert_shift(objects: $objects) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation addShifts($objects: [shift_insert_input!]!) {\n    insert_shift(objects: $objects) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteShiftById($id: uuid!) {\n    delete_shift_by_pk(id: $id) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n"): (typeof documents)["\n  mutation deleteShiftById($id: uuid!) {\n    delete_shift_by_pk(id: $id) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateShiftById(\n    $id: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n    $positionId: uuid!\n    $employeeId: uuid!\n    $length: numeric\n  ) {\n    update_shift_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        start: $start\n        end: $end\n        positionId: $positionId\n        employeeId: $employeeId\n        length: $length\n        commited: false\n      }\n    ) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n"): (typeof documents)["\n  mutation updateShiftById(\n    $id: uuid!\n    $start: timestamptz!\n    $end: timestamptz!\n    $positionId: uuid!\n    $employeeId: uuid!\n    $length: numeric\n  ) {\n    update_shift_by_pk(\n      pk_columns: { id: $id }\n      _set: {\n        start: $start\n        end: $end\n        positionId: $positionId\n        employeeId: $employeeId\n        length: $length\n        commited: false\n      }\n    ) {\n      id\n      start\n      end\n      positionId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteShiftsByPositionId($positionId: uuid!) {\n    delete_shift(where: { positionId: { _eq: $positionId } }) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation deleteShiftsByPositionId($positionId: uuid!) {\n    delete_shift(where: { positionId: { _eq: $positionId } }) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation commitShifts(\n    $start: timestamptz!\n    $end: timestamptz!\n    $organizationId: uuid!\n  ) {\n    update_shift_many(\n      updates: {\n        where: {\n          start: { _gte: $start }\n          end: { _lte: $end }\n          organizationId: { _eq: $organizationId }\n          commited: { _eq: false }\n        }\n        _set: { commited: true }\n      }\n    ) {\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation commitShifts(\n    $start: timestamptz!\n    $end: timestamptz!\n    $organizationId: uuid!\n  ) {\n    update_shift_many(\n      updates: {\n        where: {\n          start: { _gte: $start }\n          end: { _lte: $end }\n          organizationId: { _eq: $organizationId }\n          commited: { _eq: false }\n        }\n        _set: { commited: true }\n      }\n    ) {\n      affected_rows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateShiftStartTime($id: uuid!, $start: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { start: $start }) {\n      id\n      start\n    }\n  }\n"): (typeof documents)["\n  mutation updateShiftStartTime($id: uuid!, $start: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { start: $start }) {\n      id\n      start\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateShiftEndTime($id: uuid!, $end: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { end: $end }) {\n      id\n      end\n    }\n  }\n"): (typeof documents)["\n  mutation updateShiftEndTime($id: uuid!, $end: timestamptz!) {\n    update_shift_by_pk(pk_columns: { id: $id }, _set: { end: $end }) {\n      id\n      end\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query Shifts($start: timestamptz!, $end: timestamptz!) {\n    shift(where: {start: {_lte: $end}, end: {_gte: $start}}, order_by:{positionId: asc}) {\n        id\n        start\n        end\n        positionId\n        employeeId\n        length\n        employee {\n            firstName\n            payDetails\n        }\n        position {\n          id\n          bgColor\n          name\n        }\n}\n},\n"): (typeof documents)[" query Shifts($start: timestamptz!, $end: timestamptz!) {\n    shift(where: {start: {_lte: $end}, end: {_gte: $start}}, order_by:{positionId: asc}) {\n        id\n        start\n        end\n        positionId\n        employeeId\n        length\n        employee {\n            firstName\n            payDetails\n        }\n        position {\n          id\n          bgColor\n          name\n        }\n}\n},\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query ShiftToPrint($start: timestamptz!, $end: timestamptz!) {\n  shift(where: {start: {_gte: $start}, _and: {start: {_lte: $end}}}, order_by: {positionId: asc}) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n          firstName\n          payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n}\n},\n"): (typeof documents)[" query ShiftToPrint($start: timestamptz!, $end: timestamptz!) {\n  shift(where: {start: {_gte: $start}, _and: {start: {_lte: $end}}}, order_by: {positionId: asc}) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n          firstName\n          payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n}\n},\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShiftAggregate($start: timestamptz!, $end: timestamptz!) {\n    shift_aggregate(where: { start: { _gte: $start }, end: { _lte: $end } }) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShiftAggregate($start: timestamptz!, $end: timestamptz!) {\n    shift_aggregate(where: { start: { _gte: $start }, end: { _lte: $end } }) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShiftByEmploye ($start: timestamptz!, $employeeId: uuid!) {\n    shift(\n      where: { start: { _gte: $start }, employeeId: { _eq: $employeeId }, commited: { _eq: true } },\n      order_by: { start: asc }\n    ) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n        firstName\n        payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShiftByEmploye ($start: timestamptz!, $employeeId: uuid!) {\n    shift(\n      where: { start: { _gte: $start }, employeeId: { _eq: $employeeId }, commited: { _eq: true } },\n      order_by: { start: asc }\n    ) {\n      id\n      start\n      end\n      positionId\n      employeeId\n      length\n      employee {\n        firstName\n        payDetails\n      }\n      position {\n        id\n        bgColor\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HoursByPosition ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: positionId\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      position {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        name\n        id\n        bgColor\n      }\n    }\n  }\n"): (typeof documents)["\n  query HoursByPosition ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: positionId\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      position {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        name\n        id\n        bgColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HoursByEmployee ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: [employeeId]\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      id\n      employee {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        firstName\n        lastName\n        id\n        bgColor\n      }\n    }\n  }\n"): (typeof documents)["\n  query HoursByEmployee ($start: timestamptz!, $end: timestamptz!) {\n    shift(\n      distinct_on: [employeeId]\n      where: { start: { _gte: $start }, end: { _lte: $end } }\n    ) {\n      id\n      employee {\n        shift_aggregate(\n          where: { start: { _gte: $start }, end: { _lte: $end } }\n        ) {\n          aggregate {\n            sum {\n              length\n            }\n          }\n        }\n        firstName\n        lastName\n        id\n        bgColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query HoursByDay(\n    $monday: timestamptz\n    $tuesday: timestamptz\n    $wednesday: timestamptz\n    $thursday: timestamptz\n    $friday: timestamptz\n    $saturday: timestamptz\n    $sunday: timestamptz\n    $sundayE: timestamptz\n  ) {\n    monday: shift_aggregate(\n      where: { _and: { start: { _gte: $monday } }, start: { _lt: $tuesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    tuesday: shift_aggregate(\n      where: { _and: { start: { _gte: $tuesday } }, start: { _lt: $wednesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    wednesday: shift_aggregate(\n      where: {\n        _and: { start: { _gte: $wednesday } }\n        start: { _lt: $thursday }\n      }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    thursday: shift_aggregate(\n      where: { _and: { start: { _gte: $thursday } }, start: { _lt: $friday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    friday: shift_aggregate(\n      where: { _and: { start: { _gte: $friday } }, start: { _lt: $saturday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    saturday: shift_aggregate(\n      where: { _and: { start: { _gte: $saturday } }, start: { _lt: $sunday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    sunday: shift_aggregate(\n      where: { _and: { start: { _gte: $sunday } }, start: { _lt: $sundayE } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query HoursByDay(\n    $monday: timestamptz\n    $tuesday: timestamptz\n    $wednesday: timestamptz\n    $thursday: timestamptz\n    $friday: timestamptz\n    $saturday: timestamptz\n    $sunday: timestamptz\n    $sundayE: timestamptz\n  ) {\n    monday: shift_aggregate(\n      where: { _and: { start: { _gte: $monday } }, start: { _lt: $tuesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    tuesday: shift_aggregate(\n      where: { _and: { start: { _gte: $tuesday } }, start: { _lt: $wednesday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    wednesday: shift_aggregate(\n      where: {\n        _and: { start: { _gte: $wednesday } }\n        start: { _lt: $thursday }\n      }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    thursday: shift_aggregate(\n      where: { _and: { start: { _gte: $thursday } }, start: { _lt: $friday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    friday: shift_aggregate(\n      where: { _and: { start: { _gte: $friday } }, start: { _lt: $saturday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    saturday: shift_aggregate(\n      where: { _and: { start: { _gte: $saturday } }, start: { _lt: $sunday } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n    sunday: shift_aggregate(\n      where: { _and: { start: { _gte: $sunday } }, start: { _lt: $sundayE } }\n    ) {\n      aggregate {\n        sum {\n          length\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserPositions($userId: uuid!) {\n    user_position(where: { userId: { _eq: $userId } }) {\n      id\n      positionId\n      position {\n        id\n        name\n        bgColor\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserPositions($userId: uuid!) {\n    user_position(where: { userId: { _eq: $userId } }) {\n      id\n      positionId\n      position {\n        id\n        name\n        bgColor\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation addTemplateOne($object: template_insert_input!) {\n    insert_template_one(object: $object) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"): (typeof documents)[" mutation addTemplateOne($object: template_insert_input!) {\n    insert_template_one(object: $object) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation updateTemplateOne($id: uuid!, $shifts: jsonb!) {\n    update_template_by_pk(pk_columns: {id: $id}, _set: {shifts: $shifts}) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"): (typeof documents)[" mutation updateTemplateOne($id: uuid!, $shifts: jsonb!) {\n    update_template_by_pk(pk_columns: {id: $id}, _set: {shifts: $shifts}) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation DeleteTemplateOne($id: uuid!) {\n    delete_template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"): (typeof documents)[" mutation DeleteTemplateOne($id: uuid!) {\n    delete_template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query Template($id: uuid!) {\n    template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n"): (typeof documents)[" query Template($id: uuid!) {\n    template_by_pk(id: $id) {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " query Temlates{\n    template {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n"): (typeof documents)[" query Temlates{\n    template {\n        id\n        createdAt\n        updatedAt\n        shifts\n        name\n        hours\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserLines on user {\n  id\n  createdAt\n  updatedAt\n  firstName\n  lastName\n  email\n  contactDetails\n  authId\n  lastSeen\n  organizationId\n  roleId\n  onboarded\n  contractedHours\n  bgColor\n  contactDetails\n  role {\n    id\n    name\n    createdAt\n    updatedAt\n  }\n}\n"): (typeof documents)["\n  fragment UserLines on user {\n  id\n  createdAt\n  updatedAt\n  firstName\n  lastName\n  email\n  contactDetails\n  authId\n  lastSeen\n  organizationId\n  roleId\n  onboarded\n  contractedHours\n  bgColor\n  contactDetails\n  role {\n    id\n    name\n    createdAt\n    updatedAt\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation addUserOne($object: user_insert_input!) {\n    insert_user_one(object: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}\n"): (typeof documents)[" mutation addUserOne($object: user_insert_input!) {\n    insert_user_one(object: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation deleteUserById($id: uuid!) {\n    delete_user_by_pk(id: $id) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}"): (typeof documents)[" mutation deleteUserById($id: uuid!) {\n    delete_user_by_pk(id: $id) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " mutation updateUserById($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n    }\n}"): (typeof documents)[" mutation updateUserById($id: uuid!, $object: user_set_input!) {\n    update_user_by_pk(pk_columns: {id: $id}, _set: $object) {\n        id\n        firstName\n        lastName\n        email\n            role{\n                name\n            }\n    }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Users {\n    user {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      positions {\n        positionId\n      }\n      role {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Users {\n    user {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      positions {\n        positionId\n      }\n      role {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      role {\n        name\n      }\n      positions {\n        positionId\n      }\n    }\n  }\n"): (typeof documents)["\n  query User($id: uuid!) {\n    user_by_pk(id: $id) {\n      id\n      firstName\n      lastName\n      email\n      bgColor\n      payDetails\n      contractedHours\n      startDate\n      role {\n        name\n      }\n      positions {\n        positionId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getProfileByAuthId($authId: String!) {\n    user(where: { authId: { _eq: $authId } }) {\n      id\n      createdAt\n      updatedAt\n      contractedHours\n      startDate\n      bgColor\n      email\n      organizationId\n      contactDetails\n      firstName\n      lastName\n      onboarded\n      authId\n      role {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query getProfileByAuthId($authId: String!) {\n    user(where: { authId: { _eq: $authId } }) {\n      id\n      createdAt\n      updatedAt\n      contractedHours\n      startDate\n      bgColor\n      email\n      organizationId\n      contactDetails\n      firstName\n      lastName\n      onboarded\n      authId\n      role {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ContractedHours {\n    user_aggregate {\n      aggregate {\n        sum {\n          contractedHours\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ContractedHours {\n    user_aggregate {\n      aggregate {\n        sum {\n          contractedHours\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;