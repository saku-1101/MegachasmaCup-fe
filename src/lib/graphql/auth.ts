import {
  CreateUserDocument,
  CreateUserMutationVariables,
  GetAccountSettingsDocument,
  GetJwtDocument,
  GetJwtProps,
} from '@/codegen/gql/graphql';
import { gqlClient } from '../client';

export async function GetUser(token: string) {
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const data = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });
  return data.getUser;
}
export async function CreateUser({ input }: CreateUserMutationVariables) {
  const { createUser } = await gqlClient.request(CreateUserDocument, {
    input: input,
  });
  const token = await GetJwt({ email: input.email, password: input.password });
  return token;
}

export async function GetJwt(input: GetJwtProps) {
  const { getJwt } = await gqlClient.request(GetJwtDocument, {
    input: input,
  });
  return getJwt.token;
}
