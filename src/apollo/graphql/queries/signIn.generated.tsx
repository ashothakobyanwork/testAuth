import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CreateTokensQueryVariables = Types.Exact<{
  login: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type CreateTokensQuery = { __typename?: 'Query', createTokens: { __typename?: 'ErrorWithFields', fields: Array<string>, status: Types.ErrorStatus } | { __typename?: 'TokenPair', accessToken: string, refreshToken: string } };


export const CreateTokensDocument = gql`
    query CreateTokens($login: String!, $password: String!) {
  createTokens(login: $login, password: $password) {
    ... on ErrorWithFields {
      fields
      status
    }
    ... on TokenPair {
      accessToken
      refreshToken
    }
  }
}
    `;

/**
 * __useCreateTokensQuery__
 *
 * To run a query within a React component, call `useCreateTokensQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreateTokensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreateTokensQuery({
 *   variables: {
 *      login: // value for 'login'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateTokensQuery(baseOptions: Apollo.QueryHookOptions<CreateTokensQuery, CreateTokensQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CreateTokensQuery, CreateTokensQueryVariables>(CreateTokensDocument, options);
      }
export function useCreateTokensLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CreateTokensQuery, CreateTokensQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CreateTokensQuery, CreateTokensQueryVariables>(CreateTokensDocument, options);
        }
export type CreateTokensQueryHookResult = ReturnType<typeof useCreateTokensQuery>;
export type CreateTokensLazyQueryHookResult = ReturnType<typeof useCreateTokensLazyQuery>;
export type CreateTokensQueryResult = Apollo.QueryResult<CreateTokensQuery, CreateTokensQueryVariables>;