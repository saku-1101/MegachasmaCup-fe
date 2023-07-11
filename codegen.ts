import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL!,
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: 'number',
    },
  },
  documents: 'src/graphql/query/queries.graphql',
  generates: {
    'src/codegen/gql/': {
      preset: 'client',
      config: {},
      plugins: [],
    },
  },
};

export default config;
