import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const NEXT_PUBLIC_HASURA_GRAPHQL_URL =
  process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL || 'https://jsonplaceholder.ir/graphql';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: NEXT_PUBLIC_HASURA_GRAPHQL_URL,
    }),
  });
});
