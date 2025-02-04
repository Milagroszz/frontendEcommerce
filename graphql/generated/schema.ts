import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  products: Product;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateProductInput = {
  /** Brand of product */
  brand: Scalars['String']['input'];
  /** Description of product */
  description: Scalars['String']['input'];
  /** Image of product */
  image: Scalars['String']['input'];
  /** Name of product */
  name: Scalars['String']['input'];
  /** Price of product */
  price: Scalars['Float']['input'];
  /** Stock of product */
  stock: Scalars['Float']['input'];
};

export type CreateUserInput = {
  /** UUID of user creator */
  createdBy: Scalars['String']['input'];
  /** Email of user */
  email: Scalars['String']['input'];
  /** Name of user */
  firstname: Scalars['String']['input'];
  /** LastName of user */
  lastname: Scalars['String']['input'];
  /** Password of user */
  password: Scalars['String']['input'];
};

export type LoginAuthDto = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage: Scalars['String']['output'];
  createProduct: Product;
  createUser: User;
  createUserAdmin: User;
  login: SigninResponse;
  removeProduct: Product;
  removeUserActivity: UserActivity;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  args: CreateProductInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationCreateUserAdminArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLoginArgs = {
  args: LoginAuthDto;
};


export type MutationRemoveProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserActivityArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  product: Product;
  quantity: Scalars['Int']['output'];
  totalPrice: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type Product = {
  __typename?: 'Product';
  brand: Scalars['String']['output'];
  category: Category;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orders: Order;
  price: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
  product: Product;
  products: Array<Product>;
  role: Role;
  roles: Array<Role>;
  user: User;
  userActivity: UserActivity;
  users: Array<User>;
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoleArgs = {
  value: Scalars['String']['input'];
};


export type QueryUserArgs = {
  uuid: Scalars['String']['input'];
};


export type QueryUserActivityArgs = {
  uuid: Scalars['Int']['input'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users: Role;
  uuid: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SigninResponse = {
  __typename?: 'SigninResponse';
  role: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded: Scalars['String']['output'];
};

export type UpdateProductInput = {
  /** Brand of product */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** Description of product */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** Image of product */
  image?: InputMaybe<Scalars['String']['input']>;
  /** Name of product */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Price of product */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Stock of product */
  stock?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstname?: Maybe<Scalars['String']['output']>;
  lastLoginAt: Scalars['DateTime']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  orders: Order;
  profilePicture?: Maybe<Scalars['String']['output']>;
  refreshToken: Scalars['String']['output'];
  role: Role;
  sessionUuid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  uuid: Scalars['String']['output'];
};

export type UserActivity = {
  __typename?: 'UserActivity';
  createdAt: Scalars['DateTime']['output'];
  endTime: Scalars['DateTime']['output'];
  platform: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  uuid: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'SigninResponse', status: string, role: string } };

export type CreateProductMutationVariables = Exact<{
  args: CreateProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: { __typename?: 'Product', uuid: string, name: string, description?: string | null, price: number, image: string, brand: string } };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', uuid: string, name: string, description?: string | null, price: number, image: string, brand: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', uuid: string, email: string, createdAt: any, firstname?: string | null, lastname?: string | null }> };


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(args: {email: $email, password: $password}) {
    status
    role
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($args: CreateProductInput!) {
  createProduct(args: $args) {
    uuid
    name
    description
    price
    image
    brand
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const GetAllProductsDocument = gql`
    query getAllProducts {
  products {
    uuid
    name
    description
    price
    image
    brand
  }
}
    `;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    uuid
    email
    createdAt
    firstname
    lastname
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;