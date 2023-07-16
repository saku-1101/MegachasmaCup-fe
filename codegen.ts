import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/graphql/schema/schema.graphql',
  config: {
    skipTypename: true,
    enumsAsTypes: true,
    scalars: {
      numeric: 'number',
    },
  },
  documents: ['src/graphql/query/queries.graphql', 'src/graphql/mutation/mutations.graphql'],
  generates: {
    'src/codegen/gql/': {
      preset: 'client',
      config: {},
      plugins: [],
    },
  },
};

export default config;
