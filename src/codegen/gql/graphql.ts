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
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
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

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** profiles */
export type Profiles = {
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export type Profiles_Constraint =
  /** unique or primary key constraint on columns "id" */
  'profiles_pkey';

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "profiles" */
export type Profiles_Select_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'name';

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "profiles" */
export type Profiles_Update_Column =
  /** column name */
  | 'id'
  /** column name */
  | 'name';

export type Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
};

export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
};

export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type GetProfilesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProfilesQuery = { profiles: Array<{ id: number; name: string }> };

export const GetProfilesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetProfiles' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profiles' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProfilesQuery, GetProfilesQueryVariables>;
