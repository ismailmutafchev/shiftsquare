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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

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
  created_at: Scalars['timestamptz']['output'];
  details: Scalars['String']['output'];
  duration: Scalars['Int']['output'];
  end: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  leave_status?: Maybe<Leave_Status>;
  /** An object relationship */
  leave_type: Leave_Type;
  readBy?: Maybe<Scalars['jsonb']['output']>;
  start: Scalars['timestamptz']['output'];
  status: Scalars['String']['output'];
  type: Leave_Type_Enum;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId: Scalars['uuid']['output'];
};


/** columns and relationships of "leave" */
export type LeaveReadByArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "leave" */
export type Leave_Aggregate = {
  __typename?: 'leave_aggregate';
  aggregate?: Maybe<Leave_Aggregate_Fields>;
  nodes: Array<Leave>;
};

export type Leave_Aggregate_Bool_Exp = {
  count?: InputMaybe<Leave_Aggregate_Bool_Exp_Count>;
};

export type Leave_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Leave_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Leave_Bool_Exp>;
  predicate: Int_Comparison_Exp;
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

/** order by aggregate values of table "leave" */
export type Leave_Aggregate_Order_By = {
  avg?: InputMaybe<Leave_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Leave_Max_Order_By>;
  min?: InputMaybe<Leave_Min_Order_By>;
  stddev?: InputMaybe<Leave_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Leave_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Leave_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Leave_Sum_Order_By>;
  var_pop?: InputMaybe<Leave_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Leave_Var_Samp_Order_By>;
  variance?: InputMaybe<Leave_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Leave_Append_Input = {
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "leave" */
export type Leave_Arr_Rel_Insert_Input = {
  data: Array<Leave_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};

/** aggregate avg on columns */
export type Leave_Avg_Fields = {
  __typename?: 'leave_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "leave" */
export type Leave_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "leave". All fields are combined with a logical 'AND'. */
export type Leave_Bool_Exp = {
  _and?: InputMaybe<Array<Leave_Bool_Exp>>;
  _not?: InputMaybe<Leave_Bool_Exp>;
  _or?: InputMaybe<Array<Leave_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  details?: InputMaybe<String_Comparison_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  end?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  leave_status?: InputMaybe<Leave_Status_Bool_Exp>;
  leave_type?: InputMaybe<Leave_Type_Bool_Exp>;
  readBy?: InputMaybe<Jsonb_Comparison_Exp>;
  start?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<Leave_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave" */
export enum Leave_Constraint {
  /** unique or primary key constraint on columns "id" */
  LeavePkey = 'leave_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Leave_Delete_At_Path_Input = {
  readBy?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Leave_Delete_Elem_Input = {
  readBy?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Leave_Delete_Key_Input = {
  readBy?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "leave" */
export type Leave_Inc_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "leave" */
export type Leave_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  leave_status?: InputMaybe<Leave_Status_Obj_Rel_Insert_Input>;
  leave_type?: InputMaybe<Leave_Type_Obj_Rel_Insert_Input>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Leave_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Leave_Max_Fields = {
  __typename?: 'leave_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "leave" */
export type Leave_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Leave_Min_Fields = {
  __typename?: 'leave_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  details?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  start?: Maybe<Scalars['timestamptz']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "leave" */
export type Leave_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "leave" */
export type Leave_Mutation_Response = {
  __typename?: 'leave_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Leave>;
};

/** on_conflict condition type for table "leave" */
export type Leave_On_Conflict = {
  constraint: Leave_Constraint;
  update_columns?: Array<Leave_Update_Column>;
  where?: InputMaybe<Leave_Bool_Exp>;
};

/** Ordering options when selecting data from "leave". */
export type Leave_Order_By = {
  created_at?: InputMaybe<Order_By>;
  details?: InputMaybe<Order_By>;
  duration?: InputMaybe<Order_By>;
  end?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  leave_status?: InputMaybe<Leave_Status_Order_By>;
  leave_type?: InputMaybe<Leave_Type_Order_By>;
  readBy?: InputMaybe<Order_By>;
  start?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave */
export type Leave_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Leave_Prepend_Input = {
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "leave" */
export enum Leave_Select_Column {
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

/** input type for updating data in table "leave" */
export type Leave_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Leave_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** columns and relationships of "leave_status" */
export type Leave_Status = {
  __typename?: 'leave_status';
  status: Scalars['String']['output'];
};

/** aggregated selection of "leave_status" */
export type Leave_Status_Aggregate = {
  __typename?: 'leave_status_aggregate';
  aggregate?: Maybe<Leave_Status_Aggregate_Fields>;
  nodes: Array<Leave_Status>;
};

/** aggregate fields of "leave_status" */
export type Leave_Status_Aggregate_Fields = {
  __typename?: 'leave_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Leave_Status_Max_Fields>;
  min?: Maybe<Leave_Status_Min_Fields>;
};


/** aggregate fields of "leave_status" */
export type Leave_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Leave_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "leave_status". All fields are combined with a logical 'AND'. */
export type Leave_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Leave_Status_Bool_Exp>>;
  _not?: InputMaybe<Leave_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Leave_Status_Bool_Exp>>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave_status" */
export enum Leave_Status_Constraint {
  /** unique or primary key constraint on columns "status" */
  LeaveStatusPkey = 'leave_status_pkey'
}

/** input type for inserting data into table "leave_status" */
export type Leave_Status_Insert_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Leave_Status_Max_Fields = {
  __typename?: 'leave_status_max_fields';
  status?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Leave_Status_Min_Fields = {
  __typename?: 'leave_status_min_fields';
  status?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "leave_status" */
export type Leave_Status_Mutation_Response = {
  __typename?: 'leave_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Leave_Status>;
};

/** input type for inserting object relation for remote table "leave_status" */
export type Leave_Status_Obj_Rel_Insert_Input = {
  data: Leave_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Leave_Status_On_Conflict>;
};

/** on_conflict condition type for table "leave_status" */
export type Leave_Status_On_Conflict = {
  constraint: Leave_Status_Constraint;
  update_columns?: Array<Leave_Status_Update_Column>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "leave_status". */
export type Leave_Status_Order_By = {
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave_status */
export type Leave_Status_Pk_Columns_Input = {
  status: Scalars['String']['input'];
};

/** select columns of table "leave_status" */
export enum Leave_Status_Select_Column {
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "leave_status" */
export type Leave_Status_Set_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "leave_status" */
export type Leave_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Leave_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Leave_Status_Stream_Cursor_Value_Input = {
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "leave_status" */
export enum Leave_Status_Update_Column {
  /** column name */
  Status = 'status'
}

export type Leave_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Leave_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Leave_Status_Bool_Exp;
};

/** aggregate stddev on columns */
export type Leave_Stddev_Fields = {
  __typename?: 'leave_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "leave" */
export type Leave_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Leave_Stddev_Pop_Fields = {
  __typename?: 'leave_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "leave" */
export type Leave_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Leave_Stddev_Samp_Fields = {
  __typename?: 'leave_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "leave" */
export type Leave_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  details?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
  start?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Leave_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type Leave_Sum_Fields = {
  __typename?: 'leave_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "leave" */
export type Leave_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** columns and relationships of "leave_type" */
export type Leave_Type = {
  __typename?: 'leave_type';
  bgColor: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "leave_type" */
export type Leave_Type_Aggregate = {
  __typename?: 'leave_type_aggregate';
  aggregate?: Maybe<Leave_Type_Aggregate_Fields>;
  nodes: Array<Leave_Type>;
};

/** aggregate fields of "leave_type" */
export type Leave_Type_Aggregate_Fields = {
  __typename?: 'leave_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Leave_Type_Max_Fields>;
  min?: Maybe<Leave_Type_Min_Fields>;
};


/** aggregate fields of "leave_type" */
export type Leave_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Leave_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "leave_type". All fields are combined with a logical 'AND'. */
export type Leave_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Leave_Type_Bool_Exp>>;
  _not?: InputMaybe<Leave_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Leave_Type_Bool_Exp>>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "leave_type" */
export enum Leave_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  LeaveTypePkey = 'leave_type_pkey'
}

export enum Leave_Type_Enum {
  /** #ce8df3 */
  Holiday = 'holiday',
  /** #fb923c */
  Maternity = 'maternity',
  /** #facc14 */
  Paternity = 'paternity',
  /** #7fdee1 */
  SickLeave = 'sickLeave',
  /** #ef4444 */
  UnpaidLeave = 'unpaidLeave'
}

/** Boolean expression to compare columns of type "leave_type_enum". All fields are combined with logical 'AND'. */
export type Leave_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Leave_Type_Enum>;
  _in?: InputMaybe<Array<Leave_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Leave_Type_Enum>;
  _nin?: InputMaybe<Array<Leave_Type_Enum>>;
};

/** input type for inserting data into table "leave_type" */
export type Leave_Type_Insert_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Leave_Type_Max_Fields = {
  __typename?: 'leave_type_max_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Leave_Type_Min_Fields = {
  __typename?: 'leave_type_min_fields';
  bgColor?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "leave_type" */
export type Leave_Type_Mutation_Response = {
  __typename?: 'leave_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Leave_Type>;
};

/** input type for inserting object relation for remote table "leave_type" */
export type Leave_Type_Obj_Rel_Insert_Input = {
  data: Leave_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Leave_Type_On_Conflict>;
};

/** on_conflict condition type for table "leave_type" */
export type Leave_Type_On_Conflict = {
  constraint: Leave_Type_Constraint;
  update_columns?: Array<Leave_Type_Update_Column>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "leave_type". */
export type Leave_Type_Order_By = {
  bgColor?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: leave_type */
export type Leave_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "leave_type" */
export enum Leave_Type_Select_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "leave_type" */
export type Leave_Type_Set_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "leave_type" */
export type Leave_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Leave_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Leave_Type_Stream_Cursor_Value_Input = {
  bgColor?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "leave_type" */
export enum Leave_Type_Update_Column {
  /** column name */
  BgColor = 'bgColor',
  /** column name */
  Value = 'value'
}

export type Leave_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Leave_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Leave_Type_Bool_Exp;
};

/** update columns of table "leave" */
export enum Leave_Update_Column {
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

export type Leave_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Leave_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Leave_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Leave_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Leave_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Leave_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Leave_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Leave_Set_Input>;
  /** filter the rows which have to be updated */
  where: Leave_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Leave_Var_Pop_Fields = {
  __typename?: 'leave_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "leave" */
export type Leave_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Leave_Var_Samp_Fields = {
  __typename?: 'leave_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "leave" */
export type Leave_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Leave_Variance_Fields = {
  __typename?: 'leave_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "leave" */
export type Leave_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "availability" */
  delete_availability?: Maybe<Availability_Mutation_Response>;
  /** delete single row from the table: "availability" */
  delete_availability_by_pk?: Maybe<Availability>;
  /** delete data from the table: "leave" */
  delete_leave?: Maybe<Leave_Mutation_Response>;
  /** delete single row from the table: "leave" */
  delete_leave_by_pk?: Maybe<Leave>;
  /** delete data from the table: "leave_status" */
  delete_leave_status?: Maybe<Leave_Status_Mutation_Response>;
  /** delete single row from the table: "leave_status" */
  delete_leave_status_by_pk?: Maybe<Leave_Status>;
  /** delete data from the table: "leave_type" */
  delete_leave_type?: Maybe<Leave_Type_Mutation_Response>;
  /** delete single row from the table: "leave_type" */
  delete_leave_type_by_pk?: Maybe<Leave_Type>;
  /** delete data from the table: "organization" */
  delete_organization?: Maybe<Organization_Mutation_Response>;
  /** delete single row from the table: "organization" */
  delete_organization_by_pk?: Maybe<Organization>;
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
  /** insert data into the table: "leave" */
  insert_leave?: Maybe<Leave_Mutation_Response>;
  /** insert a single row into the table: "leave" */
  insert_leave_one?: Maybe<Leave>;
  /** insert data into the table: "leave_status" */
  insert_leave_status?: Maybe<Leave_Status_Mutation_Response>;
  /** insert a single row into the table: "leave_status" */
  insert_leave_status_one?: Maybe<Leave_Status>;
  /** insert data into the table: "leave_type" */
  insert_leave_type?: Maybe<Leave_Type_Mutation_Response>;
  /** insert a single row into the table: "leave_type" */
  insert_leave_type_one?: Maybe<Leave_Type>;
  /** insert data into the table: "organization" */
  insert_organization?: Maybe<Organization_Mutation_Response>;
  /** insert a single row into the table: "organization" */
  insert_organization_one?: Maybe<Organization>;
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
  /** update data of the table: "leave" */
  update_leave?: Maybe<Leave_Mutation_Response>;
  /** update single row of the table: "leave" */
  update_leave_by_pk?: Maybe<Leave>;
  /** update multiples rows of table: "leave" */
  update_leave_many?: Maybe<Array<Maybe<Leave_Mutation_Response>>>;
  /** update data of the table: "leave_status" */
  update_leave_status?: Maybe<Leave_Status_Mutation_Response>;
  /** update single row of the table: "leave_status" */
  update_leave_status_by_pk?: Maybe<Leave_Status>;
  /** update multiples rows of table: "leave_status" */
  update_leave_status_many?: Maybe<Array<Maybe<Leave_Status_Mutation_Response>>>;
  /** update data of the table: "leave_type" */
  update_leave_type?: Maybe<Leave_Type_Mutation_Response>;
  /** update single row of the table: "leave_type" */
  update_leave_type_by_pk?: Maybe<Leave_Type>;
  /** update multiples rows of table: "leave_type" */
  update_leave_type_many?: Maybe<Array<Maybe<Leave_Type_Mutation_Response>>>;
  /** update data of the table: "organization" */
  update_organization?: Maybe<Organization_Mutation_Response>;
  /** update single row of the table: "organization" */
  update_organization_by_pk?: Maybe<Organization>;
  /** update multiples rows of table: "organization" */
  update_organization_many?: Maybe<Array<Maybe<Organization_Mutation_Response>>>;
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
export type Mutation_RootDelete_LeaveArgs = {
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Leave_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Leave_StatusArgs = {
  where: Leave_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Leave_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Leave_TypeArgs = {
  where: Leave_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Leave_Type_By_PkArgs = {
  value: Scalars['String']['input'];
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
export type Mutation_RootInsert_LeaveArgs = {
  objects: Array<Leave_Insert_Input>;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_OneArgs = {
  object: Leave_Insert_Input;
  on_conflict?: InputMaybe<Leave_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_StatusArgs = {
  objects: Array<Leave_Status_Insert_Input>;
  on_conflict?: InputMaybe<Leave_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_Status_OneArgs = {
  object: Leave_Status_Insert_Input;
  on_conflict?: InputMaybe<Leave_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_TypeArgs = {
  objects: Array<Leave_Type_Insert_Input>;
  on_conflict?: InputMaybe<Leave_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Leave_Type_OneArgs = {
  object: Leave_Type_Insert_Input;
  on_conflict?: InputMaybe<Leave_Type_On_Conflict>;
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
export type Mutation_RootUpdate_LeaveArgs = {
  _append?: InputMaybe<Leave_Append_Input>;
  _delete_at_path?: InputMaybe<Leave_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Leave_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Leave_Delete_Key_Input>;
  _inc?: InputMaybe<Leave_Inc_Input>;
  _prepend?: InputMaybe<Leave_Prepend_Input>;
  _set?: InputMaybe<Leave_Set_Input>;
  where: Leave_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_By_PkArgs = {
  _append?: InputMaybe<Leave_Append_Input>;
  _delete_at_path?: InputMaybe<Leave_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Leave_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Leave_Delete_Key_Input>;
  _inc?: InputMaybe<Leave_Inc_Input>;
  _prepend?: InputMaybe<Leave_Prepend_Input>;
  _set?: InputMaybe<Leave_Set_Input>;
  pk_columns: Leave_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_ManyArgs = {
  updates: Array<Leave_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_StatusArgs = {
  _set?: InputMaybe<Leave_Status_Set_Input>;
  where: Leave_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_Status_By_PkArgs = {
  _set?: InputMaybe<Leave_Status_Set_Input>;
  pk_columns: Leave_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_Status_ManyArgs = {
  updates: Array<Leave_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_TypeArgs = {
  _set?: InputMaybe<Leave_Type_Set_Input>;
  where: Leave_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_Type_By_PkArgs = {
  _set?: InputMaybe<Leave_Type_Set_Input>;
  pk_columns: Leave_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Leave_Type_ManyArgs = {
  updates: Array<Leave_Type_Updates>;
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
  createdAt: Scalars['timestamptz']['output'];
  holidayAllowance: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  yearEnd: Scalars['timestamptz']['output'];
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
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  holidayAllowance?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  holidayAllowance?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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

/** on_conflict condition type for table "organization" */
export type Organization_On_Conflict = {
  constraint: Organization_Constraint;
  update_columns?: Array<Organization_Update_Column>;
  where?: InputMaybe<Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "organization". */
export type Organization_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  holidayAllowance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
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

/** columns and relationships of "position" */
export type Position = {
  __typename?: 'position';
  bgColor?: Maybe<Scalars['String']['output']>;
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
  leave: Array<Leave>;
  /** An aggregate relationship */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table: "leave_status" */
  leave_status: Array<Leave_Status>;
  /** fetch aggregated fields from the table: "leave_status" */
  leave_status_aggregate: Leave_Status_Aggregate;
  /** fetch data from the table: "leave_status" using primary key columns */
  leave_status_by_pk?: Maybe<Leave_Status>;
  /** fetch data from the table: "leave_type" */
  leave_type: Array<Leave_Type>;
  /** fetch aggregated fields from the table: "leave_type" */
  leave_type_aggregate: Leave_Type_Aggregate;
  /** fetch data from the table: "leave_type" using primary key columns */
  leave_type_by_pk?: Maybe<Leave_Type>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
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
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
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


export type Query_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
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


export type Query_RootLeave_StatusArgs = {
  distinct_on?: InputMaybe<Array<Leave_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Status_Order_By>>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};


export type Query_RootLeave_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Status_Order_By>>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};


export type Query_RootLeave_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Query_RootLeave_TypeArgs = {
  distinct_on?: InputMaybe<Array<Leave_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Type_Order_By>>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
};


export type Query_RootLeave_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Type_Order_By>>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
};


export type Query_RootLeave_Type_By_PkArgs = {
  value: Scalars['String']['input'];
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
  leave: Array<Leave>;
  /** An aggregate relationship */
  leave_aggregate: Leave_Aggregate;
  /** fetch data from the table: "leave" using primary key columns */
  leave_by_pk?: Maybe<Leave>;
  /** fetch data from the table: "leave_status" */
  leave_status: Array<Leave_Status>;
  /** fetch aggregated fields from the table: "leave_status" */
  leave_status_aggregate: Leave_Status_Aggregate;
  /** fetch data from the table: "leave_status" using primary key columns */
  leave_status_by_pk?: Maybe<Leave_Status>;
  /** fetch data from the table in a streaming manner: "leave_status" */
  leave_status_stream: Array<Leave_Status>;
  /** fetch data from the table in a streaming manner: "leave" */
  leave_stream: Array<Leave>;
  /** fetch data from the table: "leave_type" */
  leave_type: Array<Leave_Type>;
  /** fetch aggregated fields from the table: "leave_type" */
  leave_type_aggregate: Leave_Type_Aggregate;
  /** fetch data from the table: "leave_type" using primary key columns */
  leave_type_by_pk?: Maybe<Leave_Type>;
  /** fetch data from the table in a streaming manner: "leave_type" */
  leave_type_stream: Array<Leave_Type>;
  /** fetch data from the table: "organization" */
  organization: Array<Organization>;
  /** fetch aggregated fields from the table: "organization" */
  organization_aggregate: Organization_Aggregate;
  /** fetch data from the table: "organization" using primary key columns */
  organization_by_pk?: Maybe<Organization>;
  /** fetch data from the table in a streaming manner: "organization" */
  organization_stream: Array<Organization>;
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
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
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


export type Subscription_RootLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
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


export type Subscription_RootLeave_StatusArgs = {
  distinct_on?: InputMaybe<Array<Leave_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Status_Order_By>>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};


export type Subscription_RootLeave_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Status_Order_By>>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};


export type Subscription_RootLeave_Status_By_PkArgs = {
  status: Scalars['String']['input'];
};


export type Subscription_RootLeave_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Leave_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Leave_Status_Bool_Exp>;
};


export type Subscription_RootLeave_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Leave_Stream_Cursor_Input>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


export type Subscription_RootLeave_TypeArgs = {
  distinct_on?: InputMaybe<Array<Leave_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Type_Order_By>>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
};


export type Subscription_RootLeave_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Type_Order_By>>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
};


export type Subscription_RootLeave_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootLeave_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Leave_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Leave_Type_Bool_Exp>;
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
  contactDetails?: Maybe<Scalars['jsonb']['output']>;
  contractedHours?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  lastName: Scalars['String']['output'];
  lastSeen?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  leave: Array<Leave>;
  /** An aggregate relationship */
  leave_aggregate: Leave_Aggregate;
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
export type UserLeaveArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLeave_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Leave_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Leave_Order_By>>;
  where?: InputMaybe<Leave_Bool_Exp>;
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

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  payDetails?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  authId?: InputMaybe<String_Comparison_Exp>;
  bgColor?: InputMaybe<String_Comparison_Exp>;
  contactDetails?: InputMaybe<Jsonb_Comparison_Exp>;
  contractedHours?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  leave?: InputMaybe<Leave_Bool_Exp>;
  leave_aggregate?: InputMaybe<Leave_Aggregate_Bool_Exp>;
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
  contactDetails?: InputMaybe<Scalars['jsonb']['input']>;
  contractedHours?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']['input']>;
  leave?: InputMaybe<Leave_Arr_Rel_Insert_Input>;
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

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  authId?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
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
  contactDetails?: InputMaybe<Order_By>;
  contractedHours?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  firstName?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastName?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  leave_aggregate?: InputMaybe<Leave_Aggregate_Order_By>;
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

/** input type for updating data in table "user" */
export type User_Set_Input = {
  authId?: InputMaybe<Scalars['String']['input']>;
  bgColor?: InputMaybe<Scalars['String']['input']>;
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

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
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

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AuthId = 'authId',
  /** column name */
  BgColor = 'bgColor',
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

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  contractedHours?: Maybe<Scalars['Float']['output']>;
  pay_rate?: Maybe<Scalars['Float']['output']>;
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

export type LeaveFragmentFragment = { __typename?: 'leave', id: any, created_at: any, updated_at: any, details: string, type: Leave_Type_Enum, status: string, start: any, end: any } & { ' $fragmentName'?: 'LeaveFragmentFragment' };

export type CreateLeaveOneMutationVariables = Exact<{
  object: Leave_Insert_Input;
}>;


export type CreateLeaveOneMutation = { __typename?: 'mutation_root', insert_leave_one?: (
    { __typename?: 'leave' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type UpdateLeaveByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  object: Leave_Set_Input;
}>;


export type UpdateLeaveByIdMutation = { __typename?: 'mutation_root', update_leave_by_pk?: (
    { __typename?: 'leave' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type DeleteLeaveByIdMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteLeaveByIdMutation = { __typename?: 'mutation_root', delete_leave_by_pk?: (
    { __typename?: 'leave' }
    & { ' $fragmentRefs'?: { 'LeaveFragmentFragment': LeaveFragmentFragment } }
  ) | null };

export type UpdateReadStatusMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  readBy?: InputMaybe<Scalars['jsonb']['input']>;
}>;


export type UpdateReadStatusMutation = { __typename?: 'mutation_root', update_leave_by_pk?: { __typename?: 'leave', id: any } | null };

export type GetLeaveQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetLeaveQuery = { __typename?: 'query_root', leave_by_pk?: { __typename?: 'leave', id: any, start: any, end: any, details: string, type: Leave_Type_Enum, status: string, readBy?: any | null, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null } | null };

export type GetLeaveAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaveAllQuery = { __typename?: 'query_root', leave: Array<{ __typename?: 'leave', id: any, start: any, end: any, details: string, type: Leave_Type_Enum, status: string, readBy?: any | null }> };

export type GetLeaveTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLeaveTypesQuery = { __typename?: 'query_root', leave_type: Array<{ __typename?: 'leave_type', value: string, bgColor: string }> };

export type GetPendingLeaveQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPendingLeaveQuery = { __typename?: 'query_root', leave: Array<{ __typename?: 'leave', id: any, start: any, end: any, details: string, type: Leave_Type_Enum, status: string, readBy?: any | null, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null }> };

export type GetApprovedLeaveQueryVariables = Exact<{ [key: string]: never; }>;


export type GetApprovedLeaveQuery = { __typename?: 'query_root', leave: Array<{ __typename?: 'leave', id: any, start: any, end: any, details: string, type: Leave_Type_Enum, status: string, readBy?: any | null, user?: { __typename?: 'user', id: any, firstName: string, lastName: string } | null }> };

export type AddOrganizationOneMutationVariables = Exact<{
  object: Organization_Insert_Input;
}>;


export type AddOrganizationOneMutation = { __typename?: 'mutation_root', insert_organization_one?: { __typename?: 'organization', id: any, name: string } | null };

export type GetOrganizationByNameQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetOrganizationByNameQuery = { __typename?: 'query_root', organization: Array<{ __typename?: 'organization', id: any, name: string }> };

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
  end: Scalars['timestamptz']['input'];
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


export type GetProfileByAuthIdQuery = { __typename?: 'query_root', user: Array<{ __typename?: 'user', id: any, email: string, organizationId?: any | null, firstName: string, lastName: string, onboarded: boolean, authId?: string | null, role?: { __typename?: 'role', name: string } | null }> };

export type ContractedHoursQueryVariables = Exact<{ [key: string]: never; }>;


export type ContractedHoursQuery = { __typename?: 'query_root', user_aggregate: { __typename?: 'user_aggregate', aggregate?: { __typename?: 'user_aggregate_fields', sum?: { __typename?: 'user_sum_fields', contractedHours?: number | null } | null } | null } };

export const LeaveFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<LeaveFragmentFragment, unknown>;
export const ShiftFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ShiftFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"shift"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<ShiftFragmentFragment, unknown>;
export const UserLinesFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserLines"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"user"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"contactDetails"}},{"kind":"Field","name":{"kind":"Name","value":"authId"}},{"kind":"Field","name":{"kind":"Name","value":"lastSeen"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"onboarded"}},{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserLinesFragment, unknown>;
export const CreateLeaveOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLeaveOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leave_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_leave_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<CreateLeaveOneMutation, CreateLeaveOneMutationVariables>;
export const UpdateLeaveByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLeaveById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"leave_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<UpdateLeaveByIdMutation, UpdateLeaveByIdMutationVariables>;
export const DeleteLeaveByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteLeaveById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LeaveFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LeaveFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"leave"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}}]} as unknown as DocumentNode<DeleteLeaveByIdMutation, DeleteLeaveByIdMutationVariables>;
export const UpdateReadStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateReadStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"readBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readBy"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateReadStatusMutation, UpdateReadStatusMutationVariables>;
export const GetLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeave"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetLeaveQuery, GetLeaveQueryVariables>;
export const GetLeaveAllDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveAll"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}}]}}]}}]} as unknown as DocumentNode<GetLeaveAllQuery, GetLeaveAllQueryVariables>;
export const GetLeaveTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeaveTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<GetLeaveTypesQuery, GetLeaveTypesQueryVariables>;
export const GetPendingLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPendingLeave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"pending","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetPendingLeaveQuery, GetPendingLeaveQueryVariables>;
export const GetApprovedLeaveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetApprovedLeave"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"leave"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"approved","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"readBy"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]}}]} as unknown as DocumentNode<GetApprovedLeaveQuery, GetApprovedLeaveQueryVariables>;
export const AddOrganizationOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addOrganizationOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"organization_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_organization_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AddOrganizationOneMutation, AddOrganizationOneMutationVariables>;
export const GetOrganizationByNameDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOrganizationByName"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationByNameQuery, GetOrganizationByNameQueryVariables>;
export const AddPositionOneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPositionOne"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"position_insert_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_position_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<AddPositionOneMutation, AddPositionOneMutationVariables>;
export const DeletePositionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deletePositionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_position_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<DeletePositionByIdMutation, DeletePositionByIdMutationVariables>;
export const UpdatePositionByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updatePositionById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"object"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"position_set_input"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_position_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"object"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]} as unknown as DocumentNode<UpdatePositionByIdMutation, UpdatePositionByIdMutationVariables>;
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
export const ShiftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shifts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftsQuery, ShiftsQueryVariables>;
export const ShiftToPrintDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftToPrint"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"positionId"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftToPrintQuery, ShiftToPrintQueryVariables>;
export const ShiftAggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftAggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ShiftAggregateQuery, ShiftAggregateQueryVariables>;
export const ShiftByEmployeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShiftByEmploye"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"employeeId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"commited"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}},{"kind":"Field","name":{"kind":"Name","value":"positionId"}},{"kind":"Field","name":{"kind":"Name","value":"employeeId"}},{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"payDetails"}}]}},{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShiftByEmployeQuery, ShiftByEmployeQueryVariables>;
export const HoursByPositionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByPosition"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"EnumValue","value":"positionId"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"position"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<HoursByPositionQuery, HoursByPositionQueryVariables>;
export const HoursByEmployeeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByEmployee"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"start"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"end"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"distinct_on"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"employeeId"}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"employee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"start"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"end"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"end"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}}]}}]}}]}}]} as unknown as DocumentNode<HoursByEmployeeQuery, HoursByEmployeeQueryVariables>;
export const HoursByDayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HoursByDay"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"monday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"friday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sundayE"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"timestamptz"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"monday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"monday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"tuesday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tuesday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"wednesday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"wednesday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"thursday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"thursday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"friday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"friday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"saturday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"saturday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"sunday"},"name":{"kind":"Name","value":"shift_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sunday"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"start"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_lt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sundayE"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HoursByDayQuery, HoursByDayQueryVariables>;
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
export const GetProfileByAuthIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfileByAuthId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"organizationId"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"onboarded"}},{"kind":"Field","name":{"kind":"Name","value":"authId"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileByAuthIdQuery, GetProfileByAuthIdQueryVariables>;
export const ContractedHoursDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ContractedHours"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractedHours"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContractedHoursQuery, ContractedHoursQueryVariables>;