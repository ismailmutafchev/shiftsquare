/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "availability" */
export type Availability = {
  __typename?: 'availability';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  metadata: Scalars['jsonb']['output'];
  organizationId: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "availability" */
export type AvailabilityMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "availability" */
export type Availability_Aggregate = {
  __typename?: 'availability_aggregate';
  aggregate?: Maybe<Availability_Aggregate_Fields>;
  nodes: Array<Availability>;
};

/** aggregate fields of "availability" */
export type Availability_Aggregate_Fields = {
  __typename?: 'availability_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Availability_Max_Fields>;
  min?: Maybe<Availability_Min_Fields>;
};


/** aggregate fields of "availability" */
export type Availability_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Availability_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "availability". All fields are combined with a logical 'AND'. */
export type Availability_Bool_Exp = {
  _and?: InputMaybe<Array<Availability_Bool_Exp>>;
  _not?: InputMaybe<Availability_Bool_Exp>;
  _or?: InputMaybe<Array<Availability_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "availability" */
export enum Availability_Constraint {
  /** unique or primary key constraint on columns "id" */
  AvailabilityPkey = 'availability_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Availability_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Availability_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Availability_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "availability" */
export type Availability_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Availability_Max_Fields = {
  __typename?: 'availability_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Availability_Min_Fields = {
  __typename?: 'availability_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "availability" */
export type Availability_Mutation_Response = {
  __typename?: 'availability_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Availability>;
};

/** input type for inserting object relation for remote table "availability" */
export type Availability_Obj_Rel_Insert_Input = {
  data: Availability_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Availability_On_Conflict>;
};

/** on_conflict condition type for table "availability" */
export type Availability_On_Conflict = {
  constraint: Availability_Constraint;
  update_columns?: Array<Availability_Update_Column>;
  where?: InputMaybe<Availability_Bool_Exp>;
};

/** Ordering options when selecting data from "availability". */
export type Availability_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: availability */
export type Availability_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Availability_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "availability" */
export enum Availability_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "availability" */
export type Availability_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "availability" */
export type Availability_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Availability_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Availability_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "availability" */
export enum Availability_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Availability_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Availability_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Availability_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Availability_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Availability_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Availability_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Availability_Set_Input>;
  /** filter the rows which have to be updated */
  where: Availability_Bool_Exp;
};

/** columns and relationships of "branch" */
export type Branch = {
  __typename?: 'branch';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  organization?: Maybe<Organization>;
  organization_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user: Array<User>;
  /** An aggregate relationship */
  user_aggregate: User_Aggregate;
};


/** columns and relationships of "branch" */
export type BranchUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "branch" */
export type BranchUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** aggregated selection of "branch" */
export type Branch_Aggregate = {
  __typename?: 'branch_aggregate';
  aggregate?: Maybe<Branch_Aggregate_Fields>;
  nodes: Array<Branch>;
};

export type Branch_Aggregate_Bool_Exp = {
  count?: InputMaybe<Branch_Aggregate_Bool_Exp_Count>;
};

export type Branch_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Branch_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Branch_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "branch" */
export type Branch_Aggregate_Fields = {
  __typename?: 'branch_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Branch_Max_Fields>;
  min?: Maybe<Branch_Min_Fields>;
};


/** aggregate fields of "branch" */
export type Branch_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Branch_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "branch" */
export type Branch_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Branch_Max_Order_By>;
  min?: InputMaybe<Branch_Min_Order_By>;
};

/** input type for inserting array relation for remote table "branch" */
export type Branch_Arr_Rel_Insert_Input = {
  data: Array<Branch_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Branch_On_Conflict>;
};

/** Boolean expression to filter rows from the table "branch". All fields are combined with a logical 'AND'. */
export type Branch_Bool_Exp = {
  _and?: InputMaybe<Array<Branch_Bool_Exp>>;
  _not?: InputMaybe<Branch_Bool_Exp>;
  _or?: InputMaybe<Array<Branch_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Organization_Bool_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "branch" */
export enum Branch_Constraint {
  /** unique or primary key constraint on columns "id" */
  BranchPkey = 'branch_pkey'
}

/** input type for inserting data into table "branch" */
export type Branch_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Branch_Max_Fields = {
  __typename?: 'branch_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "branch" */
export type Branch_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Branch_Min_Fields = {
  __typename?: 'branch_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "branch" */
export type Branch_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "branch" */
export type Branch_Mutation_Response = {
  __typename?: 'branch_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Branch>;
};

/** on_conflict condition type for table "branch" */
export type Branch_On_Conflict = {
  constraint: Branch_Constraint;
  update_columns?: Array<Branch_Update_Column>;
  where?: InputMaybe<Branch_Bool_Exp>;
};

/** Ordering options when selecting data from "branch". */
export type Branch_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organization?: InputMaybe<Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_aggregate?: InputMaybe<User_Aggregate_Order_By>;
};

/** primary key columns input for table: branch */
export type Branch_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "branch" */
export enum Branch_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "branch" */
export type Branch_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "branch" */
export type Branch_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Branch_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Branch_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "branch" */
export enum Branch_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Branch_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Branch_Set_Input>;
  /** filter the rows which have to be updated */
  where: Branch_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "leave" */
export type Leave = {
  __typename?: 'leave';
  allowance_days: Scalars['Int']['output'];
  allowance_hours: Scalars['Int']['output'];
  branch_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  organization_id: Scalars['uuid']['output'];
  period_end: Scalars['date']['output'];
  period_start: Scalars['date']['output'];
  /** An array relationship */
  requests: Array<LeaveRequest>;
  /** An aggregate relationship */
  requests_aggregate: LeaveRequest_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  user_id: Scalars['uuid']['output'];
};


/** columns and relationships of "leave" */
export type LeaveRequestsArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


/** columns and relationships of "leave" */
export type LeaveRequests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};

/** columns and relationships of "leave_request" */
export type LeaveRequest = {
  __typename?: 'leaveRequest';
  created_at: Scalars['timestamptz']['output'];
  details: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  end: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  leave_id?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  leave_status: LeaveStatus;
  /** An object relationship */
  leave_type: LeaveType;
  readBy?: Maybe<Scalars['jsonb']['output']>;
  start: Scalars['timestamptz']['output'];
  status: LeaveStatus_Enum;
  type: LeaveType_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "leave_request" */
export type LeaveRequestReadByArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "leave_request" */
export type LeaveRequest_Aggregate = {
  __typename?: 'leaveRequest_aggregate';
  aggregate?: Maybe<LeaveRequest_Aggregate_Fields>;
  nodes: Array<LeaveRequest>;
};

export type LeaveRequest_Aggregate_Bool_Exp = {
  count?: InputMaybe<LeaveRequest_Aggregate_Bool_Exp_Count>;
};

export type LeaveRequest_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<LeaveRequest_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "leave_request" */
export type LeaveRequest_Aggregate_Fields = {
  __typename?: 'leaveRequest_aggregate_fields';
  avg?: Maybe<LeaveRequest_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<LeaveRequest_Max_Fields>;
  min?: Maybe<LeaveRequest_Min_Fields>;
  stddev?: Maybe<LeaveRequest_Stddev_Fields>;
  stddev_pop?: Maybe<LeaveRequest_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<LeaveRequest_Stddev_Samp_Fields>;
  sum?: Maybe<LeaveRequest_Sum_Fields>;
  var_pop?: Maybe<LeaveRequest_Var_Pop_Fields>;
  var_samp?: Maybe<LeaveRequest_Var_Samp_Fields>;
  variance?: Maybe<LeaveRequest_Variance_Fields>;
};


/** aggregate fields of "leave_request" */
export type LeaveRequest_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "leave_request" */
export type LeaveRequest_Aggregate_Order_By = {
  avg?: InputMaybe<LeaveRequest_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<LeaveRequest_Max_Order_By>;
  min?: InputMaybe<LeaveRequest_Min_Order_By>;
  stddev?: InputMaybe<LeaveRequest_Stddev_Order_By>;
  stddev_pop?: InputMaybe<LeaveRequest_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<LeaveRequest_Stddev_Samp_Order_By>;
  sum?: InputMaybe<LeaveRequest_Sum_Order_By>;
  var_pop?: InputMaybe<LeaveRequest_Var_Pop_Order_By>;
  var_samp?: InputMaybe<LeaveRequest_Var_Samp_Order_By>;
  variance?: InputMaybe<LeaveRequest_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type LeaveRequest_Append_Input = {
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "leave_request" */
export type LeaveRequest_Arr_Rel_Insert_Input = {
  data: Array<LeaveRequest_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<LeaveRequest_On_Conflict>;
};

/** aggregate avg on columns */
export type LeaveRequest_Avg_Fields = {
  __typename?: 'leaveRequest_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "leave_request" */
export type LeaveRequest_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "leave_request". All fields are combined with a logical 'AND'. */
export type LeaveRequest_Bool_Exp = {
  _and?: InputMaybe<Array<LeaveRequest_Bool_Exp>>;
  _not?: InputMaybe<LeaveRequest_Bool_Exp>;
  _or?: InputMaybe<Array<LeaveRequest_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  end?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  leave_id?: InputMaybe<Uuid_Comparison_Exp>;
  leave_status?: InputMaybe<LeaveStatus_Bool_Exp>;
  leave_type?: InputMaybe<LeaveType_Bool_Exp>;
  readBy?: InputMaybe<Jsonb_Comparison_Exp>;
  start?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<LeaveStatus_Enum_Comparison_Exp>;
  type?: InputMaybe<LeaveType_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave_request" */
export enum LeaveRequest_Constraint {
  /** unique or primary key constraint on columns "id" */
  LeavePkey = 'leave_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type LeaveRequest_Delete_At_Path_Input = {
  readBy?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type LeaveRequest_Delete_Elem_Input = {
  readBy?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type LeaveRequest_Delete_Key_Input = {
  readBy?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "leave_request" */
export type LeaveRequest_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "leave_request" */
export type LeaveRequest_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  leave_id?: InputMaybe<Scalars['uuid']['input']>;
  leave_status?: InputMaybe<LeaveStatus_Obj_Rel_Insert_Input>;
  leave_type?: InputMaybe<LeaveType_Obj_Rel_Insert_Input>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<LeaveStatus_Enum>;
  type?: InputMaybe<LeaveType_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type LeaveRequest_Max_Fields = {
  __typename?: 'leaveRequest_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  leave_id?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "leave_request" */
export type LeaveRequest_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leave_id?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type LeaveRequest_Min_Fields = {
  __typename?: 'leaveRequest_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  leave_id?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "leave_request" */
export type LeaveRequest_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leave_id?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "leave_request" */
export type LeaveRequest_Mutation_Response = {
  __typename?: 'leaveRequest_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<LeaveRequest>;
};

/** on_conflict condition type for table "leave_request" */
export type LeaveRequest_On_Conflict = {
  constraint: LeaveRequest_Constraint;
  update_columns?: Array<LeaveRequest_Update_Column>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};

/** Ordering options when selecting data from "leave_request". */
export type LeaveRequest_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leave_id?: InputMaybe<Order_By>;
  leave_status?: InputMaybe<LeaveStatus_Order_By>;
  leave_type?: InputMaybe<LeaveType_Order_By>;
  readBy?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave_request */
export type LeaveRequest_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type LeaveRequest_Prepend_Input = {
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "leave_request" */
export enum LeaveRequest_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Duration = 'duration',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  LeaveId = 'leave_id',
  /** column name */
  ReadBy = 'readBy',
  /** column name */
  Start = 'start',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "leave_request" */
export type LeaveRequest_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  leave_id?: InputMaybe<Scalars['uuid']['input']>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<LeaveStatus_Enum>;
  type?: InputMaybe<LeaveType_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type LeaveRequest_Stddev_Fields = {
  __typename?: 'leaveRequest_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "leave_request" */
export type LeaveRequest_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type LeaveRequest_Stddev_Pop_Fields = {
  __typename?: 'leaveRequest_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "leave_request" */
export type LeaveRequest_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type LeaveRequest_Stddev_Samp_Fields = {
  __typename?: 'leaveRequest_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "leave_request" */
export type LeaveRequest_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "leaveRequest" */
export type LeaveRequest_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LeaveRequest_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LeaveRequest_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  leave_id?: InputMaybe<Scalars['uuid']['input']>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<LeaveStatus_Enum>;
  type?: InputMaybe<LeaveType_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type LeaveRequest_Sum_Fields = {
  __typename?: 'leaveRequest_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "leave_request" */
export type LeaveRequest_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** update columns of table "leave_request" */
export enum LeaveRequest_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Details = 'details',
  /** column name */
  Duration = 'duration',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  LeaveId = 'leave_id',
  /** column name */
  ReadBy = 'readBy',
  /** column name */
  Start = 'start',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

export type LeaveRequest_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<LeaveRequest_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<LeaveRequest_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<LeaveRequest_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<LeaveRequest_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<LeaveRequest_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<LeaveRequest_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LeaveRequest_Set_Input>;
  /** filter the rows which have to be updated */
  where: LeaveRequest_Bool_Exp;
};

/** aggregate var_pop on columns */
export type LeaveRequest_Var_Pop_Fields = {
  __typename?: 'leaveRequest_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "leave_request" */
export type LeaveRequest_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type LeaveRequest_Var_Samp_Fields = {
  __typename?: 'leaveRequest_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "leave_request" */
export type LeaveRequest_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type LeaveRequest_Variance_Fields = {
  __typename?: 'leaveRequest_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "leave_request" */
export type LeaveRequest_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** columns and relationships of "leave_status" */
export type LeaveStatus = {
  __typename?: 'leaveStatus';
  bgColor: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

/** aggregated selection of "leave_status" */
export type LeaveStatus_Aggregate = {
  __typename?: 'leaveStatus_aggregate';
  aggregate?: Maybe<LeaveStatus_Aggregate_Fields>;
  nodes: Array<LeaveStatus>;
};

/** aggregate fields of "leave_status" */
export type LeaveStatus_Aggregate_Fields = {
  __typename?: 'leaveStatus_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<LeaveStatus_Max_Fields>;
  min?: Maybe<LeaveStatus_Min_Fields>;
};


/** aggregate fields of "leave_status" */
export type LeaveStatus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LeaveStatus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "leave_status". All fields are combined with a logical 'AND'. */
export type LeaveStatus_Bool_Exp = {
  _and?: InputMaybe<Array<LeaveStatus_Bool_Exp>>;
  _not?: InputMaybe<LeaveStatus_Bool_Exp>;
  _or?: InputMaybe<Array<LeaveStatus_Bool_Exp>>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave_status" */
export enum LeaveStatus_Constraint {
  /** unique or primary key constraint on columns "bgColor" */
  LeaveStatusBgColorKey = 'leave_status_bgColor_key',
  /** unique or primary key constraint on columns "status" */
  LeaveStatusPkey = 'leave_status_pkey'
}

export enum LeaveStatus_Enum {
  /** green */
  Approved = 'Approved',
  /** red */
  Canceled = 'Canceled',
  /** orange */
  Pending = 'Pending',
  /** blue */
  Returned = 'Returned'
}

/** Boolean expression to compare columns of type "leaveStatus_enum". All fields are combined with logical 'AND'. */
export type LeaveStatus_Enum_Comparison_Exp = {
  _eq?: InputMaybe<LeaveStatus_Enum>;
  _in?: InputMaybe<Array<LeaveStatus_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<LeaveStatus_Enum>;
  _nin?: InputMaybe<Array<LeaveStatus_Enum>>;
};

/** input type for inserting data into table "leave_status" */
export type LeaveStatus_Insert_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type LeaveStatus_Max_Fields = {
  __typename?: 'leaveStatus_max_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type LeaveStatus_Min_Fields = {
  __typename?: 'leaveStatus_min_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "leave_status" */
export type LeaveStatus_Mutation_Response = {
  __typename?: 'leaveStatus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<LeaveStatus>;
};

/** input type for inserting object relation for remote table "leave_status" */
export type LeaveStatus_Obj_Rel_Insert_Input = {
  data: LeaveStatus_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<LeaveStatus_On_Conflict>;
};

/** on_conflict condition type for table "leave_status" */
export type LeaveStatus_On_Conflict = {
  constraint: LeaveStatus_Constraint;
  update_columns?: Array<LeaveStatus_Update_Column>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};

/** Ordering options when selecting data from "leave_status". */
export type LeaveStatus_Order_By = {
  bgColor?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave_status */
export type LeaveStatus_Pk_Columns_Input = {
  status: Scalars['String']['input'];
};

/** select columns of table "leave_status" */
export enum LeaveStatus_Select_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "leave_status" */
export type LeaveStatus_Set_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "leaveStatus" */
export type LeaveStatus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LeaveStatus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LeaveStatus_Stream_Cursor_Value_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "leave_status" */
export enum LeaveStatus_Update_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Status = 'status'
}

export type LeaveStatus_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LeaveStatus_Set_Input>;
  /** filter the rows which have to be updated */
  where: LeaveStatus_Bool_Exp;
};

/** columns and relationships of "leave_type" */
export type LeaveType = {
  __typename?: 'leaveType';
  bgColor: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "leave_type" */
export type LeaveType_Aggregate = {
  __typename?: 'leaveType_aggregate';
  aggregate?: Maybe<LeaveType_Aggregate_Fields>;
  nodes: Array<LeaveType>;
};

/** aggregate fields of "leave_type" */
export type LeaveType_Aggregate_Fields = {
  __typename?: 'leaveType_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<LeaveType_Max_Fields>;
  min?: Maybe<LeaveType_Min_Fields>;
};


/** aggregate fields of "leave_type" */
export type LeaveType_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<LeaveType_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "leave_type". All fields are combined with a logical 'AND'. */
export type LeaveType_Bool_Exp = {
  _and?: InputMaybe<Array<LeaveType_Bool_Exp>>;
  _not?: InputMaybe<LeaveType_Bool_Exp>;
  _or?: InputMaybe<Array<LeaveType_Bool_Exp>>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave_type" */
export enum LeaveType_Constraint {
  /** unique or primary key constraint on columns "value" */
  LeaveTypePkey = 'leave_type_pkey'
}

export enum LeaveType_Enum {
  /** green */
  Holiday = 'holiday',
  /** pink */
  Maternity = 'maternity',
  /** blue */
  Paternity = 'paternity',
  /** orange */
  SickLeave = 'sickLeave',
  /** red */
  UnpaidLeave = 'unpaidLeave'
}

/** Boolean expression to compare columns of type "leaveType_enum". All fields are combined with logical 'AND'. */
export type LeaveType_Enum_Comparison_Exp = {
  _eq?: InputMaybe<LeaveType_Enum>;
  _in?: InputMaybe<Array<LeaveType_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<LeaveType_Enum>;
  _nin?: InputMaybe<Array<LeaveType_Enum>>;
};

/** input type for inserting data into table "leave_type" */
export type LeaveType_Insert_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type LeaveType_Max_Fields = {
  __typename?: 'leaveType_max_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type LeaveType_Min_Fields = {
  __typename?: 'leaveType_min_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "leave_type" */
export type LeaveType_Mutation_Response = {
  __typename?: 'leaveType_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<LeaveType>;
};

/** input type for inserting object relation for remote table "leave_type" */
export type LeaveType_Obj_Rel_Insert_Input = {
  data: LeaveType_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<LeaveType_On_Conflict>;
};

/** on_conflict condition type for table "leave_type" */
export type LeaveType_On_Conflict = {
  constraint: LeaveType_Constraint;
  update_columns?: Array<LeaveType_Update_Column>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};

/** Ordering options when selecting data from "leave_type". */
export type LeaveType_Order_By = {
  bgColor?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave_type */
export type LeaveType_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "leave_type" */
export enum LeaveType_Select_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "leave_type" */
export type LeaveType_Set_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "leaveType" */
export type LeaveType_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: LeaveType_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type LeaveType_Stream_Cursor_Value_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "leave_type" */
export enum LeaveType_Update_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Value = 'value'
}

export type LeaveType_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LeaveType_Set_Input>;
  /** filter the rows which have to be updated */
  where: LeaveType_Bool_Exp;
};

/** aggregated selection of "leave" */
export type Leave_Aggregate = {
  __typename?: 'leave_aggregate';
  aggregate?: Maybe<Leave_Aggregate_Fields>;
  nodes: Array<Leave>;
};

/** aggregate fields of "leave" */
export type Leave_Aggregate_Fields = {
  __typename?: 'leave_aggregate_fields';
  avg?: Maybe<Leave_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Leave_Max_Fields>;
  min?: Maybe<Leave_Min_Fields>;
  stddev?: Maybe<Leave_Stddev_Fields>;
  stddev_pop?: Maybe<Leave_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Leave_Stddev_Samp_Fields>;
  sum?: Maybe<Leave_Sum_Fields>;
  var_pop?: Maybe<Leave_Var_Pop_Fields>;
  var_samp?: Maybe<Leave_Var_Samp_Fields>;
  variance?: Maybe<Leave_Variance_Fields>;
};


/** aggregate fields of "leave" */
export type Leave_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Leave_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Leave_Avg_Fields = {
  __typename?: 'leave_avg_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "leave". All fields are combined with a logical 'AND'. */
export type Leave_Bool_Exp = {
  _and?: InputMaybe<Array<Leave_Bool_Exp>>;
  _not?: InputMaybe<Leave_Bool_Exp>;
  _or?: InputMaybe<Array<Leave_Bool_Exp>>;
  allowance_days?: InputMaybe<Int_Comparison_Exp>;
  allowance_hours?: InputMaybe<Int_Comparison_Exp>;
  branch_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  period_end?: InputMaybe<Date_Comparison_Exp>;
  period_start?: InputMaybe<Date_Comparison_Exp>;
  requests?: InputMaybe<LeaveRequest_Bool_Exp>;
  requests_aggregate?: InputMaybe<LeaveRequest_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave" */
export enum Leave_Constraint {
  /** unique or primary key constraint on columns "id" */
  LeavePkey1 = 'leave_pkey1'
}

/** input type for incrementing numeric columns in table "leave" */
export type Leave_Inc_Input = {
  allowance_days?: InputMaybe<Scalars['Int']['input']>;
  allowance_hours?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "leave" */
export type Leave_Insert_Input = {
  allowance_days?: InputMaybe<Scalars['Int']['input']>;
  allowance_hours?: InputMaybe<Scalars['Int']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  period_end?: InputMaybe<Scalars['date']['input']>;
  period_start?: InputMaybe<Scalars['date']['input']>;
  requests?: InputMaybe<LeaveRequest_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Leave_Max_Fields = {
  __typename?: 'leave_max_fields';
  allowance_days?: Maybe<Scalars['Int']['output']>;
  allowance_hours?: Maybe<Scalars['Int']['output']>;
  branch_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  period_end?: Maybe<Scalars['date']['output']>;
  period_start?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type Leave_Min_Fields = {
  __typename?: 'leave_min_fields';
  allowance_days?: Maybe<Scalars['Int']['output']>;
  allowance_hours?: Maybe<Scalars['Int']['output']>;
  branch_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  period_end?: Maybe<Scalars['date']['output']>;
  period_start?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "leave" */
export type Leave_Mutation_Response = {
  __typename?: 'leave_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Leave>;
};

/** input type for inserting object relation for remote table "leave" */
export type Leave_Obj_Rel_Insert_Input = {
  data: Leave_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};

/** on_conflict condition type for table "leave" */
export type Leave_On_Conflict = {
  constraint: Leave_Constraint;
  update_columns?: Array<Leave_Update_Column>;
  where?: InputMaybe<Leave_Bool_Exp>;
};

/** Ordering options when selecting data from "leave". */
export type Leave_Order_By = {
  allowance_days?: InputMaybe<Order_By>;
  allowance_hours?: InputMaybe<Order_By>;
  branch_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  period_end?: InputMaybe<Order_By>;
  period_start?: InputMaybe<Order_By>;
  requests_aggregate?: InputMaybe<LeaveRequest_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave */
export type Leave_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "leave" */
export enum Leave_Select_Column {
  /** column name */
  AllowanceDays = 'allowance_days',
  /** column name */
  AllowanceHours = 'allowance_hours',
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PeriodEnd = 'period_end',
  /** column name */
  PeriodStart = 'period_start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "leave" */
export type Leave_Set_Input = {
  allowance_days?: InputMaybe<Scalars['Int']['input']>;
  allowance_hours?: InputMaybe<Scalars['Int']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  period_end?: InputMaybe<Scalars['date']['input']>;
  period_start?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type Leave_Stddev_Fields = {
  __typename?: 'leave_stddev_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Leave_Stddev_Pop_Fields = {
  __typename?: 'leave_stddev_pop_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Leave_Stddev_Samp_Fields = {
  __typename?: 'leave_stddev_samp_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "leave" */
export type Leave_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Leave_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Leave_Stream_Cursor_Value_Input = {
  allowance_days?: InputMaybe<Scalars['Int']['input']>;
  allowance_hours?: InputMaybe<Scalars['Int']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  period_end?: InputMaybe<Scalars['date']['input']>;
  period_start?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Leave_Sum_Fields = {
  __typename?: 'leave_sum_fields';
  allowance_days?: Maybe<Scalars['Int']['output']>;
  allowance_hours?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "leave" */
export enum Leave_Update_Column {
  /** column name */
  AllowanceDays = 'allowance_days',
  /** column name */
  AllowanceHours = 'allowance_hours',
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  PeriodEnd = 'period_end',
  /** column name */
  PeriodStart = 'period_start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Leave_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Leave_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Leave_Set_Input>;
  /** filter the rows which have to be updated */
  where: Leave_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Leave_Var_Pop_Fields = {
  __typename?: 'leave_var_pop_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Leave_Var_Samp_Fields = {
  __typename?: 'leave_var_samp_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Leave_Variance_Fields = {
  __typename?: 'leave_variance_fields';
  allowance_days?: Maybe<Scalars['Float']['output']>;
  allowance_hours?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "availability" */
  delete_availability?: Maybe<Availability_Mutation_Response>;
  /** delete single row from the table: "availability" */
  delete_availability_by_pk?: Maybe<Availability>;
  /** delete data from the table: "branch" */
  delete_branch?: Maybe<Branch_Mutation_Response>;
  /** delete single row from the table: "branch" */
  delete_branch_by_pk?: Maybe<Branch>;
  /** delete data from the table: "leave" */
  delete_leave?: Maybe<Leave_Mutation_Response>;
  /** delete data from the table: "leave_request" */
  delete_leaveRequest?: Maybe<LeaveRequest_Mutation_Response>;
  /** delete single row from the table: "leave_request" */
  delete_leaveRequest_by_pk?: Maybe<LeaveRequest>;
  /** delete data from the table: "leave_status" */
  delete_leaveStatus?: Maybe<LeaveStatus_Mutation_Response>;
  /** delete single row from the table: "leave_status" */
  delete_leaveStatus_by_pk?: Maybe<LeaveStatus>;
  /** delete data from the table: "leave_type" */
  delete_leaveType?: Maybe<LeaveType_Mutation_Response>;
  /** delete single row from the table: "leave_type" */
  delete_leaveType_by_pk?: Maybe<LeaveType>;
  /** delete single row from the table: "leave" */
  delete_leave_by_pk?: Maybe<Leave>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>;
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>;
  /** delete data from the table: "plans" */
  delete_plans?: Maybe<Plans_Mutation_Response>;
  /** delete data from the table: "position" */
  delete_position?: Maybe<Position_Mutation_Response>;
  /** delete single row from the table: "position" */
  delete_position_by_pk?: Maybe<Position>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "shift" */
  delete_shift?: Maybe<Shift_Mutation_Response>;
  /** delete single row from the table: "shift" */
  delete_shift_by_pk?: Maybe<Shift>;
  /** delete data from the table: "template" */
  delete_template?: Maybe<Template_Mutation_Response>;
  /** delete single row from the table: "template" */
  delete_template_by_pk?: Maybe<Template>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_position" */
  delete_user_position?: Maybe<User_Position_Mutation_Response>;
  /** delete single row from the table: "user_position" */
  delete_user_position_by_pk?: Maybe<User_Position>;
  /** insert data into the table: "availability" */
  insert_availability?: Maybe<Availability_Mutation_Response>;
  /** insert a single row into the table: "availability" */
  insert_availability_one?: Maybe<Availability>;
  /** insert data into the table: "branch" */
  insert_branch?: Maybe<Branch_Mutation_Response>;
  /** insert a single row into the table: "branch" */
  insert_branch_one?: Maybe<Branch>;
  /** insert data into the table: "leave" */
  insert_leave?: Maybe<Leave_Mutation_Response>;
  /** insert data into the table: "leave_request" */
  insert_leaveRequest?: Maybe<LeaveRequest_Mutation_Response>;
  /** insert a single row into the table: "leave_request" */
  insert_leaveRequest_one?: Maybe<LeaveRequest>;
  /** insert data into the table: "leave_status" */
  insert_leaveStatus?: Maybe<LeaveStatus_Mutation_Response>;
  /** insert a single row into the table: "leave_status" */
  insert_leaveStatus_one?: Maybe<LeaveStatus>;
  /** insert data into the table: "leave_type" */
  insert_leaveType?: Maybe<LeaveType_Mutation_Response>;
  /** insert a single row into the table: "leave_type" */
  insert_leaveType_one?: Maybe<LeaveType>;
  /** insert a single row into the table: "leave" */
  insert_leave_one?: Maybe<Leave>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>;
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>;
  /** insert data into the table: "plans" */
  insert_plans?: Maybe<Plans_Mutation_Response>;
  /** insert a single row into the table: "plans" */
  insert_plans_one?: Maybe<Plans>;
  /** insert data into the table: "position" */
  insert_position?: Maybe<Position_Mutation_Response>;
  /** insert a single row into the table: "position" */
  insert_position_one?: Maybe<Position>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "shift" */
  insert_shift?: Maybe<Shift_Mutation_Response>;
  /** insert a single row into the table: "shift" */
  insert_shift_one?: Maybe<Shift>;
  /** insert data into the table: "template" */
  insert_template?: Maybe<Template_Mutation_Response>;
  /** insert a single row into the table: "template" */
  insert_template_one?: Maybe<Template>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_position" */
  insert_user_position?: Maybe<User_Position_Mutation_Response>;
  /** insert a single row into the table: "user_position" */
  insert_user_position_one?: Maybe<User_Position>;
  /** update data of the table: "availability" */
  update_availability?: Maybe<Availability_Mutation_Response>;
  /** update single row of the table: "availability" */
  update_availability_by_pk?: Maybe<Availability>;
  /** update multiples rows of table: "availability" */
  update_availability_many?: Maybe<Array<Maybe<Availability_Mutation_Response>>>;
  /** update data of the table: "branch" */
  update_branch?: Maybe<Branch_Mutation_Response>;
  /** update single row of the table: "branch" */
  update_branch_by_pk?: Maybe<Branch>;
  /** update multiples rows of table: "branch" */
  update_branch_many?: Maybe<Array<Maybe<Branch_Mutation_Response>>>;
  /** update data of the table: "leave" */
  update_leave?: Maybe<Leave_Mutation_Response>;
  /** update data of the table: "leave_request" */
  update_leaveRequest?: Maybe<LeaveRequest_Mutation_Response>;
  /** update single row of the table: "leave_request" */
  update_leaveRequest_by_pk?: Maybe<LeaveRequest>;
  /** update multiples rows of table: "leave_request" */
  update_leaveRequest_many?: Maybe<Array<Maybe<LeaveRequest_Mutation_Response>>>;
  /** update data of the table: "leave_status" */
  update_leaveStatus?: Maybe<LeaveStatus_Mutation_Response>;
  /** update single row of the table: "leave_status" */
  update_leaveStatus_by_pk?: Maybe<LeaveStatus>;
  /** update multiples rows of table: "leave_status" */
  update_leaveStatus_many?: Maybe<Array<Maybe<LeaveStatus_Mutation_Response>>>;
  /** update data of the table: "leave_type" */
  update_leaveType?: Maybe<LeaveType_Mutation_Response>;
  /** update single row of the table: "leave_type" */
  update_leaveType_by_pk?: Maybe<LeaveType>;
  /** update multiples rows of table: "leave_type" */
  update_leaveType_many?: Maybe<Array<Maybe<LeaveType_Mutation_Response>>>;
  /** update single row of the table: "leave" */
  update_leave_by_pk?: Maybe<Leave>;
  /** update multiples rows of table: "leave" */
  update_leave_many?: Maybe<Array<Maybe<Leave_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>;
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>;
  /** update multiples rows of table: "payments" */
  update_payments_many?: Maybe<Array<Maybe<Payments_Mutation_Response>>>;
  /** update data of the table: "plans" */
  update_plans?: Maybe<Plans_Mutation_Response>;
  /** update multiples rows of table: "plans" */
  update_plans_many?: Maybe<Array<Maybe<Plans_Mutation_Response>>>;
  /** update data of the table: "position" */
  update_position?: Maybe<Position_Mutation_Response>;
  /** update single row of the table: "position" */
  update_position_by_pk?: Maybe<Position>;
  /** update multiples rows of table: "position" */
  update_position_many?: Maybe<Array<Maybe<Position_Mutation_Response>>>;
  /** update data of the table: "role" */
  update_role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "role" */
  update_role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "shift" */
  update_shift?: Maybe<Shift_Mutation_Response>;
  /** update single row of the table: "shift" */
  update_shift_by_pk?: Maybe<Shift>;
  /** update multiples rows of table: "shift" */
  update_shift_many?: Maybe<Array<Maybe<Shift_Mutation_Response>>>;
  /** update data of the table: "template" */
  update_template?: Maybe<Template_Mutation_Response>;
  /** update single row of the table: "template" */
  update_template_by_pk?: Maybe<Template>;
  /** update multiples rows of table: "template" */
  update_template_many?: Maybe<Array<Maybe<Template_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "user_position" */
  update_user_position?: Maybe<User_Position_Mutation_Response>;
  /** update single row of the table: "user_position" */
  update_user_position_by_pk?: Maybe<User_Position>;
  /** update multiples rows of table: "user_position" */
  update_user_position_many?: Maybe<Array<Maybe<User_Position_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AvailabilityArgs = {
  where: Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Availability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_BranchArgs = {
  where: Branch_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Branch_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LeaveArgs = {
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LeaveRequestArgs = {
  where: LeaveRequest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LeaveRequest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LeaveStatusArgs = {
  where: LeaveStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LeaveStatus_By_PkArgs = {
  status: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_LeaveTypeArgs = {
  where: LeaveType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_LeaveType_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Leave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrganizationArgs = {
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Organization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PlansArgs = {
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_PositionArgs = {
  where: Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Position_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ShiftArgs = {
  where: Shift_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shift_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TemplateArgs = {
  where: Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Template_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_PositionArgs = {
  where: User_Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Position_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_AvailabilityArgs = {
  objects: Array<Availability_Insert_Input>;
  on_conflict?: InputMaybe<Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Availability_OneArgs = {
  object: Availability_Insert_Input;
  on_conflict?: InputMaybe<Availability_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_BranchArgs = {
  objects: Array<Branch_Insert_Input>;
  on_conflict?: InputMaybe<Branch_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Branch_OneArgs = {
  object: Branch_Insert_Input;
  on_conflict?: InputMaybe<Branch_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveArgs = {
  objects: Array<Leave_Insert_Input>;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveRequestArgs = {
  objects: Array<LeaveRequest_Insert_Input>;
  on_conflict?: InputMaybe<LeaveRequest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveRequest_OneArgs = {
  object: LeaveRequest_Insert_Input;
  on_conflict?: InputMaybe<LeaveRequest_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveStatusArgs = {
  objects: Array<LeaveStatus_Insert_Input>;
  on_conflict?: InputMaybe<LeaveStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveStatus_OneArgs = {
  object: LeaveStatus_Insert_Input;
  on_conflict?: InputMaybe<LeaveStatus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveTypeArgs = {
  objects: Array<LeaveType_Insert_Input>;
  on_conflict?: InputMaybe<LeaveType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LeaveType_OneArgs = {
  object: LeaveType_Insert_Input;
  on_conflict?: InputMaybe<LeaveType_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_OneArgs = {
  object: Leave_Insert_Input;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrganizationArgs = {
  objects: Array<Organization_Insert_Input>;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Organization_OneArgs = {
  object: Organization_Insert_Input;
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input;
  on_conflict?: InputMaybe<Payments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlansArgs = {
  objects: Array<Plans_Insert_Input>;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plans_OneArgs = {
  object: Plans_Insert_Input;
  on_conflict?: InputMaybe<Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PositionArgs = {
  objects: Array<Position_Insert_Input>;
  on_conflict?: InputMaybe<Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Position_OneArgs = {
  object: Position_Insert_Input;
  on_conflict?: InputMaybe<Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShiftArgs = {
  objects: Array<Shift_Insert_Input>;
  on_conflict?: InputMaybe<Shift_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shift_OneArgs = {
  object: Shift_Insert_Input;
  on_conflict?: InputMaybe<Shift_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TemplateArgs = {
  objects: Array<Template_Insert_Input>;
  on_conflict?: InputMaybe<Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Template_OneArgs = {
  object: Template_Insert_Input;
  on_conflict?: InputMaybe<Template_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_PositionArgs = {
  objects: Array<User_Position_Insert_Input>;
  on_conflict?: InputMaybe<User_Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Position_OneArgs = {
  object: User_Position_Insert_Input;
  on_conflict?: InputMaybe<User_Position_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AvailabilityArgs = {
  _append?: InputMaybe<Availability_Append_Input>;
  _delete_at_path?: InputMaybe<Availability_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Availability_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Availability_Delete_Key_Input>;
  _prepend?: InputMaybe<Availability_Prepend_Input>;
  _set?: InputMaybe<Availability_Set_Input>;
  where: Availability_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Availability_By_PkArgs = {
  _append?: InputMaybe<Availability_Append_Input>;
  _delete_at_path?: InputMaybe<Availability_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Availability_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Availability_Delete_Key_Input>;
  _prepend?: InputMaybe<Availability_Prepend_Input>;
  _set?: InputMaybe<Availability_Set_Input>;
  pk_columns: Availability_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Availability_ManyArgs = {
  updates: Array<Availability_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_BranchArgs = {
  _set?: InputMaybe<Branch_Set_Input>;
  where: Branch_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_By_PkArgs = {
  _set?: InputMaybe<Branch_Set_Input>;
  pk_columns: Branch_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Branch_ManyArgs = {
  updates: Array<Branch_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveArgs = {
  _inc?: InputMaybe<Leave_Inc_Input>;
  _set?: InputMaybe<Leave_Set_Input>;
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveRequestArgs = {
  _append?: InputMaybe<LeaveRequest_Append_Input>;
  _delete_at_path?: InputMaybe<LeaveRequest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<LeaveRequest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<LeaveRequest_Delete_Key_Input>;
  _inc?: InputMaybe<LeaveRequest_Inc_Input>;
  _prepend?: InputMaybe<LeaveRequest_Prepend_Input>;
  _set?: InputMaybe<LeaveRequest_Set_Input>;
  where: LeaveRequest_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveRequest_By_PkArgs = {
  _append?: InputMaybe<LeaveRequest_Append_Input>;
  _delete_at_path?: InputMaybe<LeaveRequest_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<LeaveRequest_Delete_Elem_Input>;
  _delete_key?: InputMaybe<LeaveRequest_Delete_Key_Input>;
  _inc?: InputMaybe<LeaveRequest_Inc_Input>;
  _prepend?: InputMaybe<LeaveRequest_Prepend_Input>;
  _set?: InputMaybe<LeaveRequest_Set_Input>;
  pk_columns: LeaveRequest_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveRequest_ManyArgs = {
  updates: Array<LeaveRequest_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveStatusArgs = {
  _set?: InputMaybe<LeaveStatus_Set_Input>;
  where: LeaveStatus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveStatus_By_PkArgs = {
  _set?: InputMaybe<LeaveStatus_Set_Input>;
  pk_columns: LeaveStatus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveStatus_ManyArgs = {
  updates: Array<LeaveStatus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveTypeArgs = {
  _set?: InputMaybe<LeaveType_Set_Input>;
  where: LeaveType_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveType_By_PkArgs = {
  _set?: InputMaybe<LeaveType_Set_Input>;
  pk_columns: LeaveType_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LeaveType_ManyArgs = {
  updates: Array<LeaveType_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_By_PkArgs = {
  _inc?: InputMaybe<Leave_Inc_Input>;
  _set?: InputMaybe<Leave_Set_Input>;
  pk_columns: Leave_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_ManyArgs = {
  updates: Array<Leave_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrganizationArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  where: Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_By_PkArgs = {
  _inc?: InputMaybe<Organization_Inc_Input>;
  _set?: InputMaybe<Organization_Set_Input>;
  pk_columns: Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Organization_ManyArgs = {
  updates: Array<Organization_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  where: Payments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>;
  _set?: InputMaybe<Payments_Set_Input>;
  pk_columns: Payments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
  updates: Array<Payments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlansArgs = {
  _inc?: InputMaybe<Plans_Inc_Input>;
  _set?: InputMaybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plans_ManyArgs = {
  updates: Array<Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PositionArgs = {
  _set?: InputMaybe<Position_Set_Input>;
  where: Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Position_By_PkArgs = {
  _set?: InputMaybe<Position_Set_Input>;
  pk_columns: Position_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Position_ManyArgs = {
  updates: Array<Position_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ShiftArgs = {
  _inc?: InputMaybe<Shift_Inc_Input>;
  _set?: InputMaybe<Shift_Set_Input>;
  where: Shift_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shift_By_PkArgs = {
  _inc?: InputMaybe<Shift_Inc_Input>;
  _set?: InputMaybe<Shift_Set_Input>;
  pk_columns: Shift_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shift_ManyArgs = {
  updates: Array<Shift_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TemplateArgs = {
  _append?: InputMaybe<Template_Append_Input>;
  _delete_at_path?: InputMaybe<Template_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Template_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Template_Delete_Key_Input>;
  _inc?: InputMaybe<Template_Inc_Input>;
  _prepend?: InputMaybe<Template_Prepend_Input>;
  _set?: InputMaybe<Template_Set_Input>;
  where: Template_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Template_By_PkArgs = {
  _append?: InputMaybe<Template_Append_Input>;
  _delete_at_path?: InputMaybe<Template_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Template_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Template_Delete_Key_Input>;
  _inc?: InputMaybe<Template_Inc_Input>;
  _prepend?: InputMaybe<Template_Prepend_Input>;
  _set?: InputMaybe<Template_Set_Input>;
  pk_columns: Template_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Template_ManyArgs = {
  updates: Array<Template_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _inc?: InputMaybe<User_Inc_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_PositionArgs = {
  _set?: InputMaybe<User_Position_Set_Input>;
  where: User_Position_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Position_By_PkArgs = {
  _set?: InputMaybe<User_Position_Set_Input>;
  pk_columns: User_Position_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Position_ManyArgs = {
  updates: Array<User_Position_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "organization" */
export type Organization = {
  __typename?: 'organization';
  /** An array relationship */
  branch: Array<Branch>;
  /** An aggregate relationship */
  branch_aggregate: Branch_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  holidayAllowance: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  purchased_plan?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  yearEnd: Scalars['timestamptz']['output'];
};


/** columns and relationships of "organization" */
export type OrganizationBranchArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


/** columns and relationships of "organization" */
export type OrganizationBranch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};

/** aggregated selection of "organization" */
export type Organization_Aggregate = {
  __typename?: 'organization_aggregate';
  aggregate?: Maybe<Organization_Aggregate_Fields>;
  nodes: Array<Organization>;
};

/** aggregate fields of "organization" */
export type Organization_Aggregate_Fields = {
  __typename?: 'organization_aggregate_fields';
  avg?: Maybe<Organization_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Organization_Max_Fields>;
  min?: Maybe<Organization_Min_Fields>;
  stddev?: Maybe<Organization_Stddev_Fields>;
  stddev_pop?: Maybe<Organization_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Organization_Stddev_Samp_Fields>;
  sum?: Maybe<Organization_Sum_Fields>;
  var_pop?: Maybe<Organization_Var_Pop_Fields>;
  var_samp?: Maybe<Organization_Var_Samp_Fields>;
  variance?: Maybe<Organization_Variance_Fields>;
};


/** aggregate fields of "organization" */
export type Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Organization_Avg_Fields = {
  __typename?: 'organization_avg_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "organization". All fields are combined with a logical 'AND'. */
export type Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Organization_Bool_Exp>>;
  _not?: InputMaybe<Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Organization_Bool_Exp>>;
  branch?: InputMaybe<Branch_Bool_Exp>;
  branch_aggregate?: InputMaybe<Branch_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  holidayAllowance?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  purchased_plan?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  yearEnd?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "organization" */
export enum Organization_Constraint {
  /** unique or primary key constraint on columns "name" */
  OrganizationNameKey = 'organization_name_key',
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'organization_pkey'
}

/** input type for incrementing numeric columns in table "organization" */
export type Organization_Inc_Input = {
  holidayAllowance?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "organization" */
export type Organization_Insert_Input = {
  branch?: InputMaybe<Branch_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  holidayAllowance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purchased_plan?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  yearEnd?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Organization_Max_Fields = {
  __typename?: 'organization_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  holidayAllowance?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  purchased_plan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  yearEnd?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Organization_Min_Fields = {
  __typename?: 'organization_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  holidayAllowance?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  purchased_plan?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  yearEnd?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "organization" */
export type Organization_Mutation_Response = {
  __typename?: 'organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Organization>;
};

/** input type for inserting object relation for remote table "organization" */
export type Organization_Obj_Rel_Insert_Input = {
  data: Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Organization_On_Conflict>;
};

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  branch_aggregate?: InputMaybe<Branch_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  holidayAllowance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  purchased_plan?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  yearEnd?: InputMaybe<Order_By>;
};

/** primary key columns input for table: organization */
export type Organization_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "organization" */
export enum Organization_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HolidayAllowance = 'holidayAllowance',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PurchasedPlan = 'purchased_plan',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearEnd = 'yearEnd'
}

/** input type for updating data in table "organization" */
export type Organization_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  holidayAllowance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purchased_plan?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  yearEnd?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Organization_Stddev_Fields = {
  __typename?: 'organization_stddev_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Organization_Stddev_Pop_Fields = {
  __typename?: 'organization_stddev_pop_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Organization_Stddev_Samp_Fields = {
  __typename?: 'organization_stddev_samp_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "organization" */
export type Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Organization_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  holidayAllowance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  purchased_plan?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  yearEnd?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Organization_Sum_Fields = {
  __typename?: 'organization_sum_fields';
  holidayAllowance?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "organization" */
export enum Organization_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HolidayAllowance = 'holidayAllowance',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PurchasedPlan = 'purchased_plan',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  YearEnd = 'yearEnd'
}

export type Organization_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Organization_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Organization_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Organization_Var_Pop_Fields = {
  __typename?: 'organization_var_pop_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Organization_Var_Samp_Fields = {
  __typename?: 'organization_var_samp_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Organization_Variance_Fields = {
  __typename?: 'organization_variance_fields';
  holidayAllowance?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments';
  amount: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  location_id: Scalars['uuid']['output'];
  organization_id: Scalars['uuid']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate';
  aggregate?: Maybe<Payments_Aggregate_Fields>;
  nodes: Array<Payments>;
};

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields';
  avg?: Maybe<Payments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Payments_Max_Fields>;
  min?: Maybe<Payments_Min_Fields>;
  stddev?: Maybe<Payments_Stddev_Fields>;
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>;
  sum?: Maybe<Payments_Sum_Fields>;
  var_pop?: Maybe<Payments_Var_Pop_Fields>;
  var_samp?: Maybe<Payments_Var_Samp_Fields>;
  variance?: Maybe<Payments_Variance_Fields>;
};


/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: InputMaybe<Array<Payments_Bool_Exp>>;
  _not?: InputMaybe<Payments_Bool_Exp>;
  _or?: InputMaybe<Array<Payments_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  organization_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentsPkey = 'payments_pkey'
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  location_id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Payments>;
};

/** on_conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint;
  update_columns?: Array<Payments_Update_Column>;
  where?: InputMaybe<Payments_Bool_Exp>;
};

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "payments" */
export type Payments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location_id?: InputMaybe<Scalars['uuid']['input']>;
  organization_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields';
  amount?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Payments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Payments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "plans" */
export type Plans = {
  __typename?: 'plans';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  featured?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  priceId?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "plans" */
export type Plans_Aggregate = {
  __typename?: 'plans_aggregate';
  aggregate?: Maybe<Plans_Aggregate_Fields>;
  nodes: Array<Plans>;
};

/** aggregate fields of "plans" */
export type Plans_Aggregate_Fields = {
  __typename?: 'plans_aggregate_fields';
  avg?: Maybe<Plans_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Plans_Max_Fields>;
  min?: Maybe<Plans_Min_Fields>;
  stddev?: Maybe<Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Plans_Sum_Fields>;
  var_pop?: Maybe<Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Plans_Var_Samp_Fields>;
  variance?: Maybe<Plans_Variance_Fields>;
};


/** aggregate fields of "plans" */
export type Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Plans_Avg_Fields = {
  __typename?: 'plans_avg_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "plans". All fields are combined with a logical 'AND'. */
export type Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Plans_Bool_Exp>>;
  _not?: InputMaybe<Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Plans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  priceId?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "plans" */
export enum Plans_Constraint {
  /** unique or primary key constraint on columns "name" */
  PlansNameKey = 'plans_name_key',
  /** unique or primary key constraint on columns "price_id" */
  PlansStripeIdKey = 'plans_stripe_id_key'
}

/** input type for incrementing numeric columns in table "plans" */
export type Plans_Inc_Input = {
  price?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "plans" */
export type Plans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceId?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Plans_Max_Fields = {
  __typename?: 'plans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  priceId?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Plans_Min_Fields = {
  __typename?: 'plans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  priceId?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "plans" */
export type Plans_Mutation_Response = {
  __typename?: 'plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Plans>;
};

/** on_conflict condition type for table "plans" */
export type Plans_On_Conflict = {
  constraint: Plans_Constraint;
  update_columns?: Array<Plans_Update_Column>;
  where?: InputMaybe<Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "plans". */
export type Plans_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  priceId?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** select columns of table "plans" */
export enum Plans_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  PriceId = 'priceId',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "plans" */
export type Plans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceId?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Plans_Stddev_Fields = {
  __typename?: 'plans_stddev_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Plans_Stddev_Pop_Fields = {
  __typename?: 'plans_stddev_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Plans_Stddev_Samp_Fields = {
  __typename?: 'plans_stddev_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "plans" */
export type Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Plans_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  featured?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  priceId?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Plans_Sum_Fields = {
  __typename?: 'plans_sum_fields';
  price?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "plans" */
export enum Plans_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  PriceId = 'priceId',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Plans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Plans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Plans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Plans_Var_Pop_Fields = {
  __typename?: 'plans_var_pop_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Plans_Var_Samp_Fields = {
  __typename?: 'plans_var_samp_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Plans_Variance_Fields = {
  __typename?: 'plans_variance_fields';
  price?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "position" */
export type Position = {
  __typename?: 'position';
  bgColor?: Maybe<Scalars['String']['output']>;
  branch_id: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['uuid']['output'];
  /** An array relationship */
  shift: Array<Shift>;
  /** An aggregate relationship */
  shift_aggregate: Shift_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<User_Position>;
  /** An aggregate relationship */
  users_aggregate: User_Position_Aggregate;
};


/** columns and relationships of "position" */
export type PositionShiftArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


/** columns and relationships of "position" */
export type PositionShift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


/** columns and relationships of "position" */
export type PositionUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


/** columns and relationships of "position" */
export type PositionUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};

/** aggregated selection of "position" */
export type Position_Aggregate = {
  __typename?: 'position_aggregate';
  aggregate?: Maybe<Position_Aggregate_Fields>;
  nodes: Array<Position>;
};

/** aggregate fields of "position" */
export type Position_Aggregate_Fields = {
  __typename?: 'position_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Position_Max_Fields>;
  min?: Maybe<Position_Min_Fields>;
};


/** aggregate fields of "position" */
export type Position_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Position_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type Position_Bool_Exp = {
  _and?: InputMaybe<Array<Position_Bool_Exp>>;
  _not?: InputMaybe<Position_Bool_Exp>;
  _or?: InputMaybe<Array<Position_Bool_Exp>>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  branch_id?: InputMaybe<Uuid_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  shift?: InputMaybe<Shift_Bool_Exp>;
  shift_aggregate?: InputMaybe<Shift_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<User_Position_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Position_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "position" */
export enum Position_Constraint {
  /** unique or primary key constraint on columns "id" */
  PositionIdKey = 'position_id_key',
  /** unique or primary key constraint on columns "id" */
  PositionPkey = 'position_pkey'
}

/** input type for inserting data into table "position" */
export type Position_Insert_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  shift?: InputMaybe<Shift_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<User_Position_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Position_Max_Fields = {
  __typename?: 'position_max_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Position_Min_Fields = {
  __typename?: 'position_min_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "position" */
export type Position_Mutation_Response = {
  __typename?: 'position_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Position>;
};

/** input type for inserting object relation for remote table "position" */
export type Position_Obj_Rel_Insert_Input = {
  data: Position_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Position_On_Conflict>;
};

/** on_conflict condition type for table "position" */
export type Position_On_Conflict = {
  constraint: Position_Constraint;
  update_columns?: Array<Position_Update_Column>;
  where?: InputMaybe<Position_Bool_Exp>;
};

/** Ordering options when selecting data from "position". */
export type Position_Order_By = {
  bgColor?: InputMaybe<Order_By>;
  branch_id?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  shift_aggregate?: InputMaybe<Shift_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<User_Position_Aggregate_Order_By>;
};

/** primary key columns input for table: position */
export type Position_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "position" */
export enum Position_Select_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "position" */
export type Position_Set_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "position" */
export type Position_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Position_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Position_Stream_Cursor_Value_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "position" */
export enum Position_Update_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  BranchId = 'branch_id',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Position_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Position_Set_Input>;
  /** filter the rows which have to be updated */
  where: Position_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "availability" */
  availability: Array<Availability>;
  /** fetch aggregated fields from the table: "availability" */
  availability_aggregate: Availability_Aggregate;
  /** fetch data from the table: "availability" using primary key columns */
  availability_by_pk?: Maybe<Availability>;
  /** An array relationship */
  branch: Array<Branch>;
  /** An aggregate relationship */
  branch_aggregate: Branch_Aggregate;
  /** fetch data from the table: "branch" using primary key columns */
  branch_by_pk?: Maybe<Branch>;
  /** fetch data from the table: "leave" */
  leave: Array<Leave>;
  /** fetch data from the table: "leave_request" */
  leaveRequest: Array<LeaveRequest>;
  /** fetch aggregated fields from the table: "leave_request" */
  leaveRequest_aggregate: LeaveRequest_Aggregate;
  /** fetch data from the table: "leave_request" using primary key columns */
  leaveRequest_by_pk?: Maybe<LeaveRequest>;
  /** fetch data from the table: "leave_status" */
  leaveStatus: Array<LeaveStatus>;
  /** fetch aggregated fields from the table: "leave_status" */
  leaveStatus_aggregate: LeaveStatus_Aggregate;
  /** fetch data from the table: "leave_status" using primary key columns */
  leaveStatus_by_pk?: Maybe<LeaveStatus>;
  /** fetch data from the table: "leave_type" */
  leaveType: Array<LeaveType>;
  /** fetch aggregated fields from the table: "leave_type" */
  leaveType_aggregate: LeaveType_Aggregate;
  /** fetch data from the table: "leave_type" using primary key columns */
  leaveType_by_pk?: Maybe<LeaveType>;
  /** fetch aggregated fields from the table: "leave" */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plans_aggregate: Plans_Aggregate;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: Position_Aggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<Position>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** An array relationship */
  shift: Array<Shift>;
  /** An aggregate relationship */
  shift_aggregate: Shift_Aggregate;
  /** fetch data from the table: "shift" using primary key columns */
  shift_by_pk?: Maybe<Shift>;
  /** fetch data from the table: "template" */
  template: Array<Template>;
  /** fetch aggregated fields from the table: "template" */
  template_aggregate: Template_Aggregate;
  /** fetch data from the table: "template" using primary key columns */
  template_by_pk?: Maybe<Template>;
  /** An array relationship */
  user: Array<User>;
  /** An aggregate relationship */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_position" */
  user_position: Array<User_Position>;
  /** fetch aggregated fields from the table: "user_position" */
  user_position_aggregate: User_Position_Aggregate;
  /** fetch data from the table: "user_position" using primary key columns */
  user_position_by_pk?: Maybe<User_Position>;
};


export type Query_RootAvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Availability_Order_By>>;
  where?: InputMaybe<Availability_Bool_Exp>;
};


export type Query_RootAvailability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Availability_Order_By>>;
  where?: InputMaybe<Availability_Bool_Exp>;
};


export type Query_RootAvailability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootBranchArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


export type Query_RootBranch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


export type Query_RootBranch_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Query_RootLeaveRequestArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


export type Query_RootLeaveRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


export type Query_RootLeaveRequest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootLeaveStatusArgs = {
  distinct_on?: InputMaybe<Array<LeaveStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveStatus_Order_By>>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};


export type Query_RootLeaveStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveStatus_Order_By>>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};


export type Query_RootLeaveStatus_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Query_RootLeaveTypeArgs = {
  distinct_on?: InputMaybe<Array<LeaveType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveType_Order_By>>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};


export type Query_RootLeaveType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveType_Order_By>>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};


export type Query_RootLeaveType_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootLeave_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Query_RootLeave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Query_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Query_RootPayments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Query_RootPositionArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Query_RootPosition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Query_RootPosition_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootShiftArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


export type Query_RootShift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


export type Query_RootShift_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTemplateArgs = {
  distinct_on?: InputMaybe<Array<Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Order_By>>;
  where?: InputMaybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Order_By>>;
  where?: InputMaybe<Template_Bool_Exp>;
};


export type Query_RootTemplate_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_PositionArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


export type Query_RootUser_Position_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


export type Query_RootUser_Position_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "role" */
export enum Role_Constraint {
  /** unique or primary key constraint on columns "name" */
  RoleNameKey = 'role_name_key',
  /** unique or primary key constraint on columns "id" */
  RolePkey = 'role_pkey'
}

/** input type for inserting data into table "role" */
export type Role_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "role" */
export type Role_Mutation_Response = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role */
export type Role_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "role" */
export type Role_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "role" */
export enum Role_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  /** filter the rows which have to be updated */
  where: Role_Bool_Exp;
};

/** columns and relationships of "shift" */
export type Shift = {
  __typename?: 'shift';
  branchId?: Maybe<Scalars['uuid']['output']>;
  commited: Scalars['Boolean']['output'];
  createdAt: Scalars['timestamptz']['output'];
  createdBy: Scalars['uuid']['output'];
  /** An object relationship */
  employee?: Maybe<User>;
  employeeId?: Maybe<Scalars['uuid']['output']>;
  end: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  length: Scalars['numeric']['output'];
  organizationId: Scalars['uuid']['output'];
  /** An object relationship */
  position?: Maybe<Position>;
  positionId: Scalars['uuid']['output'];
  start: Scalars['timestamptz']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "shift" */
export type Shift_Aggregate = {
  __typename?: 'shift_aggregate';
  aggregate?: Maybe<Shift_Aggregate_Fields>;
  nodes: Array<Shift>;
};

export type Shift_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Shift_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Shift_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Shift_Aggregate_Bool_Exp_Count>;
};

export type Shift_Aggregate_Bool_Exp_Bool_And = {
  arguments: Shift_Select_Column_Shift_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shift_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Shift_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Shift_Select_Column_Shift_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shift_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Shift_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Shift_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Shift_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "shift" */
export type Shift_Aggregate_Fields = {
  __typename?: 'shift_aggregate_fields';
  avg?: Maybe<Shift_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Shift_Max_Fields>;
  min?: Maybe<Shift_Min_Fields>;
  stddev?: Maybe<Shift_Stddev_Fields>;
  stddev_pop?: Maybe<Shift_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shift_Stddev_Samp_Fields>;
  sum?: Maybe<Shift_Sum_Fields>;
  var_pop?: Maybe<Shift_Var_Pop_Fields>;
  var_samp?: Maybe<Shift_Var_Samp_Fields>;
  variance?: Maybe<Shift_Variance_Fields>;
};


/** aggregate fields of "shift" */
export type Shift_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Shift_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "shift" */
export type Shift_Aggregate_Order_By = {
  avg?: InputMaybe<Shift_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Shift_Max_Order_By>;
  min?: InputMaybe<Shift_Min_Order_By>;
  stddev?: InputMaybe<Shift_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Shift_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Shift_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Shift_Sum_Order_By>;
  var_pop?: InputMaybe<Shift_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Shift_Var_Samp_Order_By>;
  variance?: InputMaybe<Shift_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shift" */
export type Shift_Arr_Rel_Insert_Input = {
  data: Array<Shift_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Shift_On_Conflict>;
};

/** aggregate avg on columns */
export type Shift_Avg_Fields = {
  __typename?: 'shift_avg_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "shift" */
export type Shift_Avg_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shift". All fields are combined with a logical 'AND'. */
export type Shift_Bool_Exp = {
  _and?: InputMaybe<Array<Shift_Bool_Exp>>;
  _not?: InputMaybe<Shift_Bool_Exp>;
  _or?: InputMaybe<Array<Shift_Bool_Exp>>;
  branchId?: InputMaybe<Uuid_Comparison_Exp>;
  commited?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdBy?: InputMaybe<Uuid_Comparison_Exp>;
  employee?: InputMaybe<User_Bool_Exp>;
  employeeId?: InputMaybe<Uuid_Comparison_Exp>;
  end?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  length?: InputMaybe<Numeric_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Position_Bool_Exp>;
  positionId?: InputMaybe<Uuid_Comparison_Exp>;
  start?: InputMaybe<Timestamptz_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "shift" */
export enum Shift_Constraint {
  /** unique or primary key constraint on columns "id" */
  ShiftPkey = 'shift_pkey'
}

/** input type for incrementing numeric columns in table "shift" */
export type Shift_Inc_Input = {
  length?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "shift" */
export type Shift_Insert_Input = {
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  commited?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  employee?: InputMaybe<User_Obj_Rel_Insert_Input>;
  employeeId?: InputMaybe<Scalars['uuid']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Position_Obj_Rel_Insert_Input>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Shift_Max_Fields = {
  __typename?: 'shift_max_fields';
  branchId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  employeeId?: Maybe<Scalars['uuid']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  length?: Maybe<Scalars['numeric']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  positionId?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "shift" */
export type Shift_Max_Order_By = {
  branchId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  employeeId?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Shift_Min_Fields = {
  __typename?: 'shift_min_fields';
  branchId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  createdBy?: Maybe<Scalars['uuid']['output']>;
  employeeId?: Maybe<Scalars['uuid']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  length?: Maybe<Scalars['numeric']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  positionId?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "shift" */
export type Shift_Min_Order_By = {
  branchId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  employeeId?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "shift" */
export type Shift_Mutation_Response = {
  __typename?: 'shift_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Shift>;
};

/** on_conflict condition type for table "shift" */
export type Shift_On_Conflict = {
  constraint: Shift_Constraint;
  update_columns?: Array<Shift_Update_Column>;
  where?: InputMaybe<Shift_Bool_Exp>;
};

/** Ordering options when selecting data from "shift". */
export type Shift_Order_By = {
  branchId?: InputMaybe<Order_By>;
  commited?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  createdBy?: InputMaybe<Order_By>;
  employee?: InputMaybe<User_Order_By>;
  employeeId?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  length?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  position?: InputMaybe<Position_Order_By>;
  positionId?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: shift */
export type Shift_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "shift" */
export enum Shift_Select_Column {
  /** column name */
  BranchId = 'branchId',
  /** column name */
  Commited = 'commited',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  EmployeeId = 'employeeId',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "shift_aggregate_bool_exp_bool_and_arguments_columns" columns of table "shift" */
export enum Shift_Select_Column_Shift_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Commited = 'commited'
}

/** select "shift_aggregate_bool_exp_bool_or_arguments_columns" columns of table "shift" */
export enum Shift_Select_Column_Shift_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Commited = 'commited'
}

/** input type for updating data in table "shift" */
export type Shift_Set_Input = {
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  commited?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  employeeId?: InputMaybe<Scalars['uuid']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Shift_Stddev_Fields = {
  __typename?: 'shift_stddev_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "shift" */
export type Shift_Stddev_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shift_Stddev_Pop_Fields = {
  __typename?: 'shift_stddev_pop_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "shift" */
export type Shift_Stddev_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shift_Stddev_Samp_Fields = {
  __typename?: 'shift_stddev_samp_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "shift" */
export type Shift_Stddev_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "shift" */
export type Shift_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Shift_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Shift_Stream_Cursor_Value_Input = {
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  commited?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdBy?: InputMaybe<Scalars['uuid']['input']>;
  employeeId?: InputMaybe<Scalars['uuid']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  length?: InputMaybe<Scalars['numeric']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Shift_Sum_Fields = {
  __typename?: 'shift_sum_fields';
  length?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "shift" */
export type Shift_Sum_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** update columns of table "shift" */
export enum Shift_Update_Column {
  /** column name */
  BranchId = 'branchId',
  /** column name */
  Commited = 'commited',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CreatedBy = 'createdBy',
  /** column name */
  EmployeeId = 'employeeId',
  /** column name */
  End = 'end',
  /** column name */
  Id = 'id',
  /** column name */
  Length = 'length',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  Start = 'start',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Shift_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Shift_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Shift_Set_Input>;
  /** filter the rows which have to be updated */
  where: Shift_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Shift_Var_Pop_Fields = {
  __typename?: 'shift_var_pop_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "shift" */
export type Shift_Var_Pop_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shift_Var_Samp_Fields = {
  __typename?: 'shift_var_samp_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "shift" */
export type Shift_Var_Samp_Order_By = {
  length?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Shift_Variance_Fields = {
  __typename?: 'shift_variance_fields';
  length?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "shift" */
export type Shift_Variance_Order_By = {
  length?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "availability" */
  availability: Array<Availability>;
  /** fetch aggregated fields from the table: "availability" */
  availability_aggregate: Availability_Aggregate;
  /** fetch data from the table: "availability" using primary key columns */
  availability_by_pk?: Maybe<Availability>;
  /** fetch data from the table in a streaming manner: "availability" */
  availability_stream: Array<Availability>;
  /** An array relationship */
  branch: Array<Branch>;
  /** An aggregate relationship */
  branch_aggregate: Branch_Aggregate;
  /** fetch data from the table: "branch" using primary key columns */
  branch_by_pk?: Maybe<Branch>;
  /** fetch data from the table in a streaming manner: "branch" */
  branch_stream: Array<Branch>;
  /** fetch data from the table: "leave" */
  leave: Array<Leave>;
  /** fetch data from the table: "leave_request" */
  leaveRequest: Array<LeaveRequest>;
  /** fetch aggregated fields from the table: "leave_request" */
  leaveRequest_aggregate: LeaveRequest_Aggregate;
  /** fetch data from the table: "leave_request" using primary key columns */
  leaveRequest_by_pk?: Maybe<LeaveRequest>;
  /** fetch data from the table in a streaming manner: "leave_request" */
  leaveRequest_stream: Array<LeaveRequest>;
  /** fetch data from the table: "leave_status" */
  leaveStatus: Array<LeaveStatus>;
  /** fetch aggregated fields from the table: "leave_status" */
  leaveStatus_aggregate: LeaveStatus_Aggregate;
  /** fetch data from the table: "leave_status" using primary key columns */
  leaveStatus_by_pk?: Maybe<LeaveStatus>;
  /** fetch data from the table in a streaming manner: "leave_status" */
  leaveStatus_stream: Array<LeaveStatus>;
  /** fetch data from the table: "leave_type" */
  leaveType: Array<LeaveType>;
  /** fetch aggregated fields from the table: "leave_type" */
  leaveType_aggregate: LeaveType_Aggregate;
  /** fetch data from the table: "leave_type" using primary key columns */
  leaveType_by_pk?: Maybe<LeaveType>;
  /** fetch data from the table in a streaming manner: "leave_type" */
  leaveType_stream: Array<LeaveType>;
  /** fetch aggregated fields from the table: "leave" */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table in a streaming manner: "leave" */
  leave_stream: Array<Leave>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
  /** fetch data from the table: "payments" */
  payments: Array<Payments>;
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate;
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>;
  /** fetch data from the table in a streaming manner: "payments" */
  payments_stream: Array<Payments>;
  /** fetch data from the table: "plans" */
  plans: Array<Plans>;
  /** fetch aggregated fields from the table: "plans" */
  plans_aggregate: Plans_Aggregate;
  /** fetch data from the table in a streaming manner: "plans" */
  plans_stream: Array<Plans>;
  /** fetch data from the table: "position" */
  position: Array<Position>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: Position_Aggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<Position>;
  /** fetch data from the table in a streaming manner: "position" */
  position_stream: Array<Position>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** An array relationship */
  shift: Array<Shift>;
  /** An aggregate relationship */
  shift_aggregate: Shift_Aggregate;
  /** fetch data from the table: "shift" using primary key columns */
  shift_by_pk?: Maybe<Shift>;
  /** fetch data from the table in a streaming manner: "shift" */
  shift_stream: Array<Shift>;
  /** fetch data from the table: "template" */
  template: Array<Template>;
  /** fetch aggregated fields from the table: "template" */
  template_aggregate: Template_Aggregate;
  /** fetch data from the table: "template" using primary key columns */
  template_by_pk?: Maybe<Template>;
  /** fetch data from the table in a streaming manner: "template" */
  template_stream: Array<Template>;
  /** An array relationship */
  user: Array<User>;
  /** An aggregate relationship */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_position" */
  user_position: Array<User_Position>;
  /** fetch aggregated fields from the table: "user_position" */
  user_position_aggregate: User_Position_Aggregate;
  /** fetch data from the table: "user_position" using primary key columns */
  user_position_by_pk?: Maybe<User_Position>;
  /** fetch data from the table in a streaming manner: "user_position" */
  user_position_stream: Array<User_Position>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_RootAvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Availability_Order_By>>;
  where?: InputMaybe<Availability_Bool_Exp>;
};


export type Subscription_RootAvailability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Availability_Order_By>>;
  where?: InputMaybe<Availability_Bool_Exp>;
};


export type Subscription_RootAvailability_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAvailability_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Availability_Stream_Cursor_Input>>;
  where?: InputMaybe<Availability_Bool_Exp>;
};


export type Subscription_RootBranchArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


export type Subscription_RootBranch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Branch_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Branch_Order_By>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


export type Subscription_RootBranch_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBranch_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Branch_Stream_Cursor_Input>>;
  where?: InputMaybe<Branch_Bool_Exp>;
};


export type Subscription_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootLeaveRequestArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


export type Subscription_RootLeaveRequest_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


export type Subscription_RootLeaveRequest_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLeaveRequest_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LeaveRequest_Stream_Cursor_Input>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


export type Subscription_RootLeaveStatusArgs = {
  distinct_on?: InputMaybe<Array<LeaveStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveStatus_Order_By>>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};


export type Subscription_RootLeaveStatus_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveStatus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveStatus_Order_By>>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};


export type Subscription_RootLeaveStatus_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Subscription_RootLeaveStatus_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LeaveStatus_Stream_Cursor_Input>>;
  where?: InputMaybe<LeaveStatus_Bool_Exp>;
};


export type Subscription_RootLeaveTypeArgs = {
  distinct_on?: InputMaybe<Array<LeaveType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveType_Order_By>>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};


export type Subscription_RootLeaveType_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveType_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveType_Order_By>>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};


export type Subscription_RootLeaveType_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootLeaveType_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LeaveType_Stream_Cursor_Input>>;
  where?: InputMaybe<LeaveType_Bool_Exp>;
};


export type Subscription_RootLeave_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootLeave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootLeave_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Leave_Stream_Cursor_Input>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootOrganizationArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Organization_Order_By>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootOrganization_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootOrganization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Organization_Bool_Exp>;
};


export type Subscription_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Payments_Order_By>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPayments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Payments_Stream_Cursor_Input>>;
  where?: InputMaybe<Payments_Bool_Exp>;
};


export type Subscription_RootPlansArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Plans_Order_By>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Plans_Bool_Exp>;
};


export type Subscription_RootPositionArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootPosition_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Position_Order_By>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootPosition_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPosition_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Position_Stream_Cursor_Input>>;
  where?: InputMaybe<Position_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootShiftArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


export type Subscription_RootShift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


export type Subscription_RootShift_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootShift_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Shift_Stream_Cursor_Input>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


export type Subscription_RootTemplateArgs = {
  distinct_on?: InputMaybe<Array<Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Order_By>>;
  where?: InputMaybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Template_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Template_Order_By>>;
  where?: InputMaybe<Template_Bool_Exp>;
};


export type Subscription_RootTemplate_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTemplate_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Template_Stream_Cursor_Input>>;
  where?: InputMaybe<Template_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_PositionArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


export type Subscription_RootUser_Position_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


export type Subscription_RootUser_Position_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Position_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Position_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** columns and relationships of "template" */
export type Template = {
  __typename?: 'template';
  createdAt: Scalars['timestamptz']['output'];
  hours: Scalars['numeric']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['uuid']['output'];
  shifts?: Maybe<Scalars['jsonb']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "template" */
export type TemplateShiftsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "template" */
export type Template_Aggregate = {
  __typename?: 'template_aggregate';
  aggregate?: Maybe<Template_Aggregate_Fields>;
  nodes: Array<Template>;
};

/** aggregate fields of "template" */
export type Template_Aggregate_Fields = {
  __typename?: 'template_aggregate_fields';
  avg?: Maybe<Template_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Template_Max_Fields>;
  min?: Maybe<Template_Min_Fields>;
  stddev?: Maybe<Template_Stddev_Fields>;
  stddev_pop?: Maybe<Template_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Template_Stddev_Samp_Fields>;
  sum?: Maybe<Template_Sum_Fields>;
  var_pop?: Maybe<Template_Var_Pop_Fields>;
  var_samp?: Maybe<Template_Var_Samp_Fields>;
  variance?: Maybe<Template_Variance_Fields>;
};


/** aggregate fields of "template" */
export type Template_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Template_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Template_Append_Input = {
  shifts?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Template_Avg_Fields = {
  __typename?: 'template_avg_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "template". All fields are combined with a logical 'AND'. */
export type Template_Bool_Exp = {
  _and?: InputMaybe<Array<Template_Bool_Exp>>;
  _not?: InputMaybe<Template_Bool_Exp>;
  _or?: InputMaybe<Array<Template_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hours?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  shifts?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "template" */
export enum Template_Constraint {
  /** unique or primary key constraint on columns "name" */
  TemplateNameKey = 'template_name_key',
  /** unique or primary key constraint on columns "id" */
  TemplatePkey = 'template_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Template_Delete_At_Path_Input = {
  shifts?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Template_Delete_Elem_Input = {
  shifts?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Template_Delete_Key_Input = {
  shifts?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "template" */
export type Template_Inc_Input = {
  hours?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "template" */
export type Template_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hours?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  shifts?: InputMaybe<Scalars['jsonb']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Template_Max_Fields = {
  __typename?: 'template_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  hours?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Template_Min_Fields = {
  __typename?: 'template_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  hours?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "template" */
export type Template_Mutation_Response = {
  __typename?: 'template_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Template>;
};

/** on_conflict condition type for table "template" */
export type Template_On_Conflict = {
  constraint: Template_Constraint;
  update_columns?: Array<Template_Update_Column>;
  where?: InputMaybe<Template_Bool_Exp>;
};

/** Ordering options when selecting data from "template". */
export type Template_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  hours?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  shifts?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: template */
export type Template_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Template_Prepend_Input = {
  shifts?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "template" */
export enum Template_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Shifts = 'shifts',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "template" */
export type Template_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hours?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  shifts?: InputMaybe<Scalars['jsonb']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Template_Stddev_Fields = {
  __typename?: 'template_stddev_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Template_Stddev_Pop_Fields = {
  __typename?: 'template_stddev_pop_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Template_Stddev_Samp_Fields = {
  __typename?: 'template_stddev_samp_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "template" */
export type Template_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Template_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Template_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hours?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  shifts?: InputMaybe<Scalars['jsonb']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Template_Sum_Fields = {
  __typename?: 'template_sum_fields';
  hours?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "template" */
export enum Template_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Hours = 'hours',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Shifts = 'shifts',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Template_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Template_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Template_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Template_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Template_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Template_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Template_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Template_Set_Input>;
  /** filter the rows which have to be updated */
  where: Template_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Template_Var_Pop_Fields = {
  __typename?: 'template_var_pop_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Template_Var_Samp_Fields = {
  __typename?: 'template_var_samp_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Template_Variance_Fields = {
  __typename?: 'template_variance_fields';
  hours?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  authId?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['uuid']['output']>;
  contactDetails?: Maybe<Scalars['jsonb']['output']>;
  contractedHours?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  lastName: Scalars['String']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  leave?: Maybe<Leave>;
  /** An array relationship */
  leave_requests: Array<LeaveRequest>;
  /** An aggregate relationship */
  leave_requests_aggregate: LeaveRequest_Aggregate;
  onboarded: Scalars['Boolean']['output'];
  organizationId?: Maybe<Scalars['uuid']['output']>;
  payDetails?: Maybe<Scalars['jsonb']['output']>;
  pay_rate?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  positions: Array<User_Position>;
  /** An aggregate relationship */
  positions_aggregate: User_Position_Aggregate;
  /** An object relationship */
  role?: Maybe<Role>;
  roleId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  shift: Array<Shift>;
  /** An aggregate relationship */
  shift_aggregate: Shift_Aggregate;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  userAvailability?: Maybe<Availability>;
};


/** columns and relationships of "user" */
export type UserContactDetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user" */
export type UserLeave_RequestsArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLeave_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<LeaveRequest_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<LeaveRequest_Order_By>>;
  where?: InputMaybe<LeaveRequest_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPayDetailsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user" */
export type UserPositionsArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserPositions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Position_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Position_Order_By>>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserShiftArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserShift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Shift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Shift_Order_By>>;
  where?: InputMaybe<Shift_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: InputMaybe<User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
  stddev?: InputMaybe<User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Sum_Order_By>;
  var_pop?: InputMaybe<User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  authId?: InputMaybe<String_Comparison_Exp>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  branchId?: InputMaybe<Uuid_Comparison_Exp>;
  contactDetails?: InputMaybe<Jsonb_Comparison_Exp>;
  contractedHours?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  leave?: InputMaybe<Leave_Bool_Exp>;
  leave_requests?: InputMaybe<LeaveRequest_Bool_Exp>;
  leave_requests_aggregate?: InputMaybe<LeaveRequest_Aggregate_Bool_Exp>;
  onboarded?: InputMaybe<Boolean_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  payDetails?: InputMaybe<Jsonb_Comparison_Exp>;
  pay_rate?: InputMaybe<Int_Comparison_Exp>;
  positions?: InputMaybe<User_Position_Bool_Exp>;
  positions_aggregate?: InputMaybe<User_Position_Aggregate_Bool_Exp>;
  role?: InputMaybe<Role_Bool_Exp>;
  roleId?: InputMaybe<Uuid_Comparison_Exp>;
  shift?: InputMaybe<Shift_Bool_Exp>;
  shift_aggregate?: InputMaybe<Shift_Aggregate_Bool_Exp>;
  startDate?: InputMaybe<Timestamptz_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userAvailability?: InputMaybe<Availability_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "auth_id" */
  UserAuthIdKey = 'user_auth_id_key',
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  contactDetails?: InputMaybe<Array<Scalars['String']['input']>>;
  payDetails?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  contactDetails?: InputMaybe<Scalars['Int']['input']>;
  payDetails?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  contactDetails?: InputMaybe<Scalars['String']['input']>;
  payDetails?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  contractedHours?: InputMaybe<Scalars['Int']['input']>;
  pay_rate?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  authId?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  contractedHours?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  leave?: InputMaybe<Leave_Obj_Rel_Insert_Input>;
  leave_requests?: InputMaybe<LeaveRequest_Arr_Rel_Insert_Input>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
  pay_rate?: InputMaybe<Scalars['Int']['input']>;
  positions?: InputMaybe<User_Position_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
  shift?: InputMaybe<Shift_Arr_Rel_Insert_Input>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userAvailability?: InputMaybe<Availability_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  authId?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['uuid']['output']>;
  contractedHours?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  pay_rate?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['uuid']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  authId?: InputMaybe<Order_By>;
  bgColor?: InputMaybe<Order_By>;
  branchId?: InputMaybe<Order_By>;
  contractedHours?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  authId?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  branchId?: Maybe<Scalars['uuid']['output']>;
  contractedHours?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  pay_rate?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['uuid']['output']>;
  startDate?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  authId?: InputMaybe<Order_By>;
  bgColor?: InputMaybe<Order_By>;
  branchId?: InputMaybe<Order_By>;
  contractedHours?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  startDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  authId?: InputMaybe<Order_By>;
  bgColor?: InputMaybe<Order_By>;
  branchId?: InputMaybe<Order_By>;
  contactDetails?: InputMaybe<Order_By>;
  contractedHours?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  leave?: InputMaybe<Leave_Order_By>;
  leave_requests_aggregate?: InputMaybe<LeaveRequest_Aggregate_Order_By>;
  onboarded?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  payDetails?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
  positions_aggregate?: InputMaybe<User_Position_Aggregate_Order_By>;
  role?: InputMaybe<Role_Order_By>;
  roleId?: InputMaybe<Order_By>;
  shift_aggregate?: InputMaybe<Shift_Aggregate_Order_By>;
  startDate?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userAvailability?: InputMaybe<Availability_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "user_position" */
export type User_Position = {
  __typename?: 'user_position';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  organizationId: Scalars['uuid']['output'];
  /** An object relationship */
  position?: Maybe<Position>;
  positionId: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "user_position" */
export type User_Position_Aggregate = {
  __typename?: 'user_position_aggregate';
  aggregate?: Maybe<User_Position_Aggregate_Fields>;
  nodes: Array<User_Position>;
};

export type User_Position_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Position_Aggregate_Bool_Exp_Count>;
};

export type User_Position_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Position_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Position_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_position" */
export type User_Position_Aggregate_Fields = {
  __typename?: 'user_position_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<User_Position_Max_Fields>;
  min?: Maybe<User_Position_Min_Fields>;
};


/** aggregate fields of "user_position" */
export type User_Position_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Position_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_position" */
export type User_Position_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Position_Max_Order_By>;
  min?: InputMaybe<User_Position_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_position" */
export type User_Position_Arr_Rel_Insert_Input = {
  data: Array<User_Position_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Position_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_position". All fields are combined with a logical 'AND'. */
export type User_Position_Bool_Exp = {
  _and?: InputMaybe<Array<User_Position_Bool_Exp>>;
  _not?: InputMaybe<User_Position_Bool_Exp>;
  _or?: InputMaybe<Array<User_Position_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  organizationId?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Position_Bool_Exp>;
  positionId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_position" */
export enum User_Position_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPositionPkey = 'user_position_pkey'
}

/** input type for inserting data into table "user_position" */
export type User_Position_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  position?: InputMaybe<Position_Obj_Rel_Insert_Input>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type User_Position_Max_Fields = {
  __typename?: 'user_position_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  positionId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_position" */
export type User_Position_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Position_Min_Fields = {
  __typename?: 'user_position_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organizationId?: Maybe<Scalars['uuid']['output']>;
  positionId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_position" */
export type User_Position_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  positionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_position" */
export type User_Position_Mutation_Response = {
  __typename?: 'user_position_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Position>;
};

/** on_conflict condition type for table "user_position" */
export type User_Position_On_Conflict = {
  constraint: User_Position_Constraint;
  update_columns?: Array<User_Position_Update_Column>;
  where?: InputMaybe<User_Position_Bool_Exp>;
};

/** Ordering options when selecting data from "user_position". */
export type User_Position_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  position?: InputMaybe<Position_Order_By>;
  positionId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_position */
export type User_Position_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_position" */
export enum User_Position_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "user_position" */
export type User_Position_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_position" */
export type User_Position_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Position_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Position_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  positionId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_position" */
export enum User_Position_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type User_Position_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Position_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Position_Bool_Exp;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AuthId = 'authId',
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  BranchId = 'branchId',
  /** column name */
  ContactDetails = 'contactDetails',
  /** column name */
  ContractedHours = 'contractedHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Onboarded = 'onboarded',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PayDetails = 'payDetails',
  /** column name */
  PayRate = 'pay_rate',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Onboarded = 'onboarded'
}

/** select "user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user" */
export enum User_Select_Column_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Onboarded = 'onboarded'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  authId?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  contractedHours?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
  pay_rate?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  authId?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
  branchId?: InputMaybe<Scalars['uuid']['input']>;
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  contractedHours?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  onboarded?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId?: InputMaybe<Scalars['uuid']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
  pay_rate?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['uuid']['input']>;
  startDate?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  contractedHours?: Maybe<Scalars['Int']['output']>;
  pay_rate?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AuthId = 'authId',
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  BranchId = 'branchId',
  /** column name */
  ContactDetails = 'contactDetails',
  /** column name */
  ContractedHours = 'contractedHours',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Onboarded = 'onboarded',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  PayDetails = 'payDetails',
  /** column name */
  PayRate = 'pay_rate',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  StartDate = 'startDate',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  contractedHours?: InputMaybe<Order_By>;
  pay_rate?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type LeaveFragmentFragment = { __typename?: 'leaveRequest', id: any, created_at: any, updated_at: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, start: any, end: any } & { ' $fragmentName'?: 'LeaveFragmentFragment' };

export type CreateLeaveOneMutationVariables = Exact<{
  object: LeaveRequest_Insert_Input;
}>;


export type CreateLeaveOneMutation = { __typename?: 'mutation_root', insert_leaveRequest_one?: (
    { __typename?: 'leaveRequest' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type UpdateLeaveByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: LeaveRequest_Set_Input;
}>;


export type UpdateLeaveByIdMutation = { __typename?: 'mutation_root', update_leaveRequest_by_pk?: (
    { __typename?: 'leaveRequest' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type DeleteLeaveByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteLeaveByIdMutation = { __typename?: 'mutation_root', delete_leaveRequest_by_pk?: (
    { __typename?: 'leaveRequest' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type UpdateReadStatusMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type UpdateReadStatusMutation = { __typename?: 'mutation_root', update_leaveRequest_by_pk?: { __typename?: 'leaveRequest', id: any } | null };

export type UpdateLeaveStatusMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  status: LeaveStatus_Enum;
}>;


export type UpdateLeaveStatusMutation = { __typename?: 'mutation_root', update_leaveRequest_by_pk?: { __typename?: 'leaveRequest', id: any } | null };

export type GetLeaveQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetLeaveQuery = { __typename?: 'query_root', leaveRequest_by_pk?: { __typename?: 'leaveRequest', id: any, start: any, end: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, readBy?: any | null, duration: number, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null, leave_status: { __typename?: 'leaveStatus', status: string, bgColor: string } } | null };

export type GetLeaveAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaveAllQuery = { __typename?: 'query_root', leaveRequest: Array<{ __typename?: 'leaveRequest', id: any, start: any, end: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, readBy?: any | null, duration: number, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null, leave_type: { __typename?: 'leaveType', value: string, bgColor: string }, leave_status: { __typename?: 'leaveStatus', status: string, bgColor: string } }> };

export type GetLeaveTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaveTypesQuery = { __typename?: 'query_root', leaveType: Array<{ __typename?: 'leaveType', value: string, bgColor: string }> };

export type GetPendingLeaveQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPendingLeaveQuery = { __typename?: 'query_root', leaveRequest: Array<{ __typename?: 'leaveRequest', id: any, start: any, end: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, readBy?: any | null, duration: number, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null }> };

export type GetApprovedLeaveQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApprovedLeaveQuery = { __typename?: 'query_root', leaveRequest: Array<{ __typename?: 'leaveRequest', id: any, start: any, end: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, readBy?: any | null, duration: number, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null }> };

export type GetLeaveStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaveStatusQuery = { __typename?: 'query_root', leaveStatus: Array<{ __typename?: 'leaveStatus', status: string }> };

export type UserApprovedLeaveQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type UserApprovedLeaveQuery = { __typename?: 'query_root', leaveRequest_aggregate: { __typename?: 'leaveRequest_aggregate', aggregate?: { __typename?: 'leaveRequest_aggregate_fields', sum?: { __typename?: 'leaveRequest_sum_fields', duration?: number | null } | null } | null } };

export type GetUserLeaveQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type GetUserLeaveQuery = { __typename?: 'query_root', leaveRequest: Array<{ __typename?: 'leaveRequest', id: any, start: any, end: any, details: string, type: LeaveType_Enum, status: LeaveStatus_Enum, readBy?: any | null, duration: number, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null, leave_type: { __typename?: 'leaveType', value: string, bgColor: string }, leave_status: { __typename?: 'leaveStatus', status: string, bgColor: string } }> };

export type AddOrganizationOneMutationVariables = Exact<{
  object: Organization_Insert_Input;
}>;


export type AddOrganizationOneMutation = { __typename?: 'mutation_root', insert_organization_one?: { __typename?: 'organization', id: any, name: string } | null };

export type GetOrganizationByNameQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOrganizationByNameQuery = { __typename?: 'query_root', organization: Array<{ __typename?: 'organization', id: any, name: string }> };

export type GetOrganizationByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetOrganizationByIdQuery = { __typename?: 'query_root', organization_by_pk?: { __typename?: 'organization', id: any, createdAt: any, updatedAt: any, name: string, yearEnd: any, holidayAllowance: number, location?: string | null } | null };

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', plans: Array<{ __typename?: 'plans', name: string, price: number, description?: string | null, id?: any | null, featured?: boolean | null, priceId?: string | null }> };

export type AddPositionOneMutationVariables = Exact<{
  object: Position_Insert_Input;
}>;


export type AddPositionOneMutation = { __typename?: 'mutation_root', insert_position_one?: { __typename?: 'position', id: any, name: string, bgColor?: string | null } | null };

export type DeletePositionByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeletePositionByIdMutation = { __typename?: 'mutation_root', delete_position_by_pk?: { __typename?: 'position', id: any, name: string, bgColor?: string | null } | null };

export type UpdatePositionByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Position_Set_Input;
}>;


export type UpdatePositionByIdMutation = { __typename?: 'mutation_root', update_position_by_pk?: { __typename?: 'position', id: any, name: string, bgColor?: string | null } | null };

export type AddUserPositionMutationVariables = Exact<{
  object: User_Position_Insert_Input;
}>;


export type AddUserPositionMutation = { __typename?: 'mutation_root', insert_user_position_one?: { __typename?: 'user_position', userId: any, positionId: any } | null };

export type DeleteUserPositionMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  positionId: Scalars['uuid']['input'];
}>;


export type DeleteUserPositionMutation = { __typename?: 'mutation_root', delete_user_position?: { __typename?: 'user_position_mutation_response', affected_rows: number } | null };

export type PositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PositionsQuery = { __typename?: 'query_root', position: Array<{ __typename?: 'position', id: any, name: string, bgColor?: string | null }> };

export type PositionQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type PositionQuery = { __typename?: 'query_root', position_by_pk?: { __typename?: 'position', id: any, name: string, bgColor?: string | null } | null };

export type UpdateUserRoleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: User_Set_Input;
}>;


export type UpdateUserRoleMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', id: any, roleId?: any | null } | null };

export type RolesQueryVariables = Exact<{ [key: string]: never; }>;


export type RolesQuery = { __typename?: 'query_root', role: Array<{ __typename?: 'role', id: any, name: string }> };

export type ShiftFragmentFragment = { __typename?: 'shift', id: any, start: any, end: any } & { ' $fragmentName'?: 'ShiftFragmentFragment' };

export type AddShiftOneMutationVariables = Exact<{
  object: Shift_Insert_Input;
}>;


export type AddShiftOneMutation = { __typename?: 'mutation_root', insert_shift_one?: (
    { __typename?: 'shift' }
    & { ' $fragmentRefs'?: { 'ShiftFragmentFragment': ShiftFragmentFragment } }
  ) | null };

export type AddShiftsMutationVariables = Exact<{
  objects: Array<Shift_Insert_Input> | Shift_Insert_Input;
}>;


export type AddShiftsMutation = { __typename?: 'mutation_root', insert_shift?: { __typename?: 'shift_mutation_response', affected_rows: number } | null };

export type DeleteShiftByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteShiftByIdMutation = { __typename?: 'mutation_root', delete_shift_by_pk?: { __typename?: 'shift', id: any, start: any, end: any, positionId: any } | null };

export type UpdateShiftByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
  positionId: Scalars['uuid']['input'];
  employeeId: Scalars['uuid']['input'];
  length?: InputMaybe<Scalars['numeric']['input']>;
}>;


export type UpdateShiftByIdMutation = { __typename?: 'mutation_root', update_shift_by_pk?: { __typename?: 'shift', id: any, start: any, end: any, positionId: any } | null };

export type DeleteShiftsByPositionIdMutationVariables = Exact<{
  positionId: Scalars['uuid']['input'];
}>;


export type DeleteShiftsByPositionIdMutation = { __typename?: 'mutation_root', delete_shift?: { __typename?: 'shift_mutation_response', affected_rows: number } | null };

export type CommitShiftsMutationVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
  organizationId: Scalars['uuid']['input'];
}>;


export type CommitShiftsMutation = { __typename?: 'mutation_root', update_shift_many?: Array<{ __typename?: 'shift_mutation_response', affected_rows: number } | null> | null };

export type UpdateShiftStartTimeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  start: Scalars['timestamptz']['input'];
}>;


export type UpdateShiftStartTimeMutation = { __typename?: 'mutation_root', update_shift_by_pk?: { __typename?: 'shift', id: any, start: any } | null };

export type UpdateShiftEndTimeMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type UpdateShiftEndTimeMutation = { __typename?: 'mutation_root', update_shift_by_pk?: { __typename?: 'shift', id: any, end: any } | null };

export type ShiftsQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type ShiftsQuery = { __typename?: 'query_root', shift: Array<{ __typename?: 'shift', id: any, start: any, end: any, positionId: any, employeeId?: any | null, length: any, employee?: { __typename?: 'user', firstName: string, payDetails?: any | null } | null, position?: { __typename?: 'position', id: any, bgColor?: string | null, name: string } | null }> };

export type ShiftToPrintQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type ShiftToPrintQuery = { __typename?: 'query_root', shift: Array<{ __typename?: 'shift', id: any, start: any, end: any, positionId: any, employeeId?: any | null, length: any, employee?: { __typename?: 'user', firstName: string, payDetails?: any | null } | null, position?: { __typename?: 'position', id: any, bgColor?: string | null, name: string } | null }> };

export type ShiftAggregateQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type ShiftAggregateQuery = { __typename?: 'query_root', shift_aggregate: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null } };

export type ShiftByEmployeQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  employeeId: Scalars['uuid']['input'];
}>;


export type ShiftByEmployeQuery = { __typename?: 'query_root', shift: Array<{ __typename?: 'shift', id: any, start: any, end: any, positionId: any, employeeId?: any | null, length: any, employee?: { __typename?: 'user', firstName: string, payDetails?: any | null } | null, position?: { __typename?: 'position', id: any, bgColor?: string | null, name: string } | null }> };

export type HoursByPositionQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type HoursByPositionQuery = { __typename?: 'query_root', shift: Array<{ __typename?: 'shift', position?: { __typename?: 'position', name: string, id: any, bgColor?: string | null, shift_aggregate: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null } } | null }> };

export type HoursByEmployeeQueryVariables = Exact<{
  start: Scalars['timestamptz']['input'];
  end: Scalars['timestamptz']['input'];
}>;


export type HoursByEmployeeQuery = { __typename?: 'query_root', shift: Array<{ __typename?: 'shift', id: any, employee?: { __typename?: 'user', firstName: string, lastName: string, id: any, bgColor?: string | null, shift_aggregate: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null } } | null }> };

export type HoursByDayQueryVariables = Exact<{
  monday?: InputMaybe<Scalars['timestamptz']['input']>;
  tuesday?: InputMaybe<Scalars['timestamptz']['input']>;
  wednesday?: InputMaybe<Scalars['timestamptz']['input']>;
  thursday?: InputMaybe<Scalars['timestamptz']['input']>;
  friday?: InputMaybe<Scalars['timestamptz']['input']>;
  saturday?: InputMaybe<Scalars['timestamptz']['input']>;
  sunday?: InputMaybe<Scalars['timestamptz']['input']>;
  sundayE?: InputMaybe<Scalars['timestamptz']['input']>;
}>;


export type HoursByDayQuery = { __typename?: 'query_root', monday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, tuesday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, wednesday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, thursday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, friday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, saturday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null }, sunday: { __typename?: 'shift_aggregate', aggregate?: { __typename?: 'shift_aggregate_fields', sum?: { __typename?: 'shift_sum_fields', length?: any | null } | null } | null } };

export type UserPositionsQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type UserPositionsQuery = { __typename?: 'query_root', user_position: Array<{ __typename?: 'user_position', id: any, positionId: any, position?: { __typename?: 'position', id: any, name: string, bgColor?: string | null } | null }> };

export type AddTemplateOneMutationVariables = Exact<{
  object: Template_Insert_Input;
}>;


export type AddTemplateOneMutation = { __typename?: 'mutation_root', insert_template_one?: { __typename?: 'template', id: any, createdAt: any, updatedAt: any, shifts?: any | null } | null };

export type UpdateTemplateOneMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  shifts: Scalars['jsonb']['input'];
}>;


export type UpdateTemplateOneMutation = { __typename?: 'mutation_root', update_template_by_pk?: { __typename?: 'template', id: any, createdAt: any, updatedAt: any, shifts?: any | null } | null };

export type DeleteTemplateOneMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteTemplateOneMutation = { __typename?: 'mutation_root', delete_template_by_pk?: { __typename?: 'template', id: any, createdAt: any, updatedAt: any, shifts?: any | null } | null };

export type TemplateQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type TemplateQuery = { __typename?: 'query_root', template_by_pk?: { __typename?: 'template', id: any, createdAt: any, updatedAt: any, shifts?: any | null, name: string, hours: any } | null };

export type TemlatesQueryVariables = Exact<{ [key: string]: never; }>;


export type TemlatesQuery = { __typename?: 'query_root', template: Array<{ __typename?: 'template', id: any, createdAt: any, updatedAt: any, shifts?: any | null, name: string, hours: any }> };

export type UserLinesFragment = { __typename?: 'user', id: any, createdAt: any, updatedAt: any, firstName: string, lastName: string, email: string, contactDetails?: any | null, authId?: string | null, lastSeen?: any | null, organizationId?: any | null, roleId?: any | null, onboarded: boolean, contractedHours?: number | null, bgColor?: string | null, role?: { __typename?: 'role', id: any, name: string, createdAt: any, updatedAt: any } | null } & { ' $fragmentName'?: 'UserLinesFragment' };

export type AddUserOneMutationVariables = Exact<{
  object: User_Insert_Input;
}>;


export type AddUserOneMutation = { __typename?: 'mutation_root', insert_user_one?: { __typename?: 'user', id: any, firstName: string, lastName: string, email: string, role?: { __typename?: 'role', name: string } | null } | null };

export type DeleteUserByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteUserByIdMutation = { __typename?: 'mutation_root', delete_user_by_pk?: { __typename?: 'user', id: any, firstName: string, lastName: string, email: string, role?: { __typename?: 'role', name: string } | null } | null };

export type UpdateUserByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: User_Set_Input;
}>;


export type UpdateUserByIdMutation = { __typename?: 'mutation_root', update_user_by_pk?: { __typename?: 'user', id: any, firstName: string, lastName: string, email: string, role?: { __typename?: 'role', name: string } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, firstName: string, lastName: string, email: string, bgColor?: string | null, payDetails?: any | null, contractedHours?: number | null, startDate?: any | null, positions: Array<{ __typename?: 'user_position', positionId: any }>, role?: { __typename?: 'role', name: string } | null }> };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type UserQuery = { __typename?: 'query_root', user_by_pk?: { __typename?: 'user', id: any, firstName: string, lastName: string, email: string, bgColor?: string | null, payDetails?: any | null, contractedHours?: number | null, startDate?: any | null, role?: { __typename?: 'role', name: string } | null, positions: Array<{ __typename?: 'user_position', positionId: any }> } | null };

export type GetProfileByAuthIdQueryVariables = Exact<{
  authId: Scalars['String']['input'];
}>;


export type GetProfileByAuthIdQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, createdAt: any, updatedAt: any, contractedHours?: number | null, startDate?: any | null, bgColor?: string | null, email: string, organizationId?: any | null, contactDetails?: any | null, firstName: string, lastName: string, onboarded: boolean, authId?: string | null, role?: { __typename?: 'role', name: string } | null }> };

export type ContractedHoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ContractedHoursQuery = { __typename?: 'query_root', user_aggregate: { __typename?: 'user_aggregate', aggregate?: { __typename?: 'user_aggregate_fields', sum?: { __typename?: 'user_sum_fields', contractedHours?: number | null } | null } | null } };

export const LeaveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<LeaveFragmentFragment, unknown>;
export const ShiftFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShiftFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"shift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<ShiftFragmentFragment, unknown>;
export const UserLinesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contactDetails"}},{"kind":"Field","name":{"kind":"Name","value":"authId"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"onboarded"}},{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"contactDetails"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserLinesFragment, unknown>;
export const CreateLeaveOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLeaveOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_leaveRequest_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<CreateLeaveOneMutation, CreateLeaveOneMutationVariables>;
export const UpdateLeaveByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLeaveById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leaveRequest_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<UpdateLeaveByIdMutation, UpdateLeaveByIdMutationVariables>;
export const DeleteLeaveByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLeaveById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_leaveRequest_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leaveRequest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<DeleteLeaveByIdMutation, DeleteLeaveByIdMutationVariables>;
export const UpdateReadStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateReadStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leaveRequest_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"readBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateReadStatusMutation, UpdateReadStatusMutationVariables>;
export const UpdateLeaveStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLeaveStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leaveStatus_enum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leaveRequest_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLeaveStatusMutation, UpdateLeaveStatusMutationVariables>;
export const GetLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaveQuery, GetLeaveQueryVariables>;
export const GetLeaveAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaveAllQuery, GetLeaveAllQueryVariables>;
export const GetLeaveTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<GetLeaveTypesQuery, GetLeaveTypesQueryVariables>;
export const GetPendingLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPendingLeave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"Pending"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetPendingLeaveQuery, GetPendingLeaveQueryVariables>;
export const GetApprovedLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApprovedLeave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"Approved"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetApprovedLeaveQuery, GetApprovedLeaveQueryVariables>;
export const GetLeaveStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveStatus"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetLeaveStatusQuery, GetLeaveStatusQueryVariables>;
export const UserApprovedLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userApprovedLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"Approved"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserApprovedLeaveQuery, UserApprovedLeaveQueryVariables>;
export const GetUserLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leaveRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"leave_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserLeaveQuery, GetUserLeaveQueryVariables>;
export const AddOrganizationOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addOrganizationOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"organization_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_organization_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddOrganizationOneMutation, AddOrganizationOneMutationVariables>;
export const GetOrganizationByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrganizationByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>;
export const GetOrganizationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrganizationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"yearEnd"}},{"kind":"Field","name":{"kind":"Name","value":"holidayAllowance"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationByIdQuery, GetOrganizationByIdQueryVariables>;
export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plans"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"priceId"}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;
export const AddPositionOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPositionOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"position_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_position_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<AddPositionOneMutation, AddPositionOneMutationVariables>;
export const DeletePositionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePositionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_position_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<DeletePositionByIdMutation, DeletePositionByIdMutationVariables>;
export const UpdatePositionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePositionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"position_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_position_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<UpdatePositionByIdMutation, UpdatePositionByIdMutationVariables>;
export const AddUserPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUserPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_position_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_position_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}}]}}]}}]} as unknown as DocumentNode<AddUserPositionMutation, AddUserPositionMutationVariables>;
export const DeleteUserPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUserPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_user_position"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteUserPositionMutation, DeleteUserPositionMutationVariables>;
export const PositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<PositionsQuery, PositionsQueryVariables>;
export const PositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Position"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<PositionQuery, PositionQueryVariables>;
export const UpdateUserRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}}]}}]} as unknown as DocumentNode<UpdateUserRoleMutation, UpdateUserRoleMutationVariables>;
export const RolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RolesQuery, RolesQueryVariables>;
export const AddShiftOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addShiftOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"shift_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_shift_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ShiftFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShiftFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"shift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<AddShiftOneMutation, AddShiftOneMutationVariables>;
export const AddShiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addShifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"shift_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<AddShiftsMutation, AddShiftsMutationVariables>;
export const DeleteShiftByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteShiftById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_shift_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}}]}}]}}]} as unknown as DocumentNode<DeleteShiftByIdMutation, DeleteShiftByIdMutationVariables>;
export const UpdateShiftByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateShiftById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"length"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"numeric"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shift_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"employeeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"length"},"value":{"kind":"Variable","name":{"kind":"Name","value":"length"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"commited"},"value":{"kind":"BooleanValue","value":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}}]}}]}}]} as unknown as DocumentNode<UpdateShiftByIdMutation, UpdateShiftByIdMutationVariables>;
export const DeleteShiftsByPositionIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteShiftsByPositionId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"positionId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteShiftsByPositionIdMutation, DeleteShiftsByPositionIdMutationVariables>;
export const CommitShiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"commitShifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shift_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"commited"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":false}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commited"},"value":{"kind":"BooleanValue","value":true}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<CommitShiftsMutation, CommitShiftsMutationVariables>;
export const UpdateShiftStartTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateShiftStartTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shift_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}}]}}]}}]} as unknown as DocumentNode<UpdateShiftStartTimeMutation, UpdateShiftStartTimeMutationVariables>;
export const UpdateShiftEndTimeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateShiftEndTime"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_shift_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]}}]} as unknown as DocumentNode<UpdateShiftEndTimeMutation, UpdateShiftEndTimeMutationVariables>;
export const ShiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftsQuery, ShiftsQueryVariables>;
export const ShiftToPrintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftToPrint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftToPrintQuery, ShiftToPrintQueryVariables>;
export const ShiftAggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftAggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ShiftAggregateQuery, ShiftAggregateQueryVariables>;
export const ShiftByEmployeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftByEmploye"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"employeeId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"commited"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftByEmployeQuery, ShiftByEmployeQueryVariables>;
export const HoursByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"positionId"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<HoursByPositionQuery, HoursByPositionQueryVariables>;
export const HoursByEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"employeeId"}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<HoursByEmployeeQuery, HoursByEmployeeQueryVariables>;
export const HoursByDayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByDay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sundayE"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"monday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tuesday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"wednesday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"thursday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"friday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"saturday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sunday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sundayE"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HoursByDayQuery, HoursByDayQueryVariables>;
export const UserPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserPositions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_position"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"userId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<UserPositionsQuery, UserPositionsQueryVariables>;
export const AddTemplateOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addTemplateOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"template_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_template_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shifts"}}]}}]}}]} as unknown as DocumentNode<AddTemplateOneMutation, AddTemplateOneMutationVariables>;
export const UpdateTemplateOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTemplateOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"shifts"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_template_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"shifts"},"value":{"kind":"Variable","name":{"kind":"Name","value":"shifts"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shifts"}}]}}]}}]} as unknown as DocumentNode<UpdateTemplateOneMutation, UpdateTemplateOneMutationVariables>;
export const DeleteTemplateOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTemplateOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_template_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shifts"}}]}}]}}]} as unknown as DocumentNode<DeleteTemplateOneMutation, DeleteTemplateOneMutationVariables>;
export const TemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Template"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shifts"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TemplateQuery, TemplateQueryVariables>;
export const TemlatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Temlates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"shifts"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"hours"}}]}}]}}]} as unknown as DocumentNode<TemlatesQuery, TemlatesQueryVariables>;
export const AddUserOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addUserOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_user_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddUserOneMutation, AddUserOneMutationVariables>;
export const DeleteUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<DeleteUserByIdMutation, DeleteUserByIdMutationVariables>;
export const UpdateUserByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"user_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}},{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positionId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}},{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"positions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"positionId"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const GetProfileByAuthIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileByAuthId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"contactDetails"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"onboarded"}},{"kind":"Field","name":{"kind":"Name","value":"authId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileByAuthIdQuery, GetProfileByAuthIdQueryVariables>;
export const ContractedHoursDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContractedHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContractedHoursQuery, ContractedHoursQueryVariables>;