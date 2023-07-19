import { ClassPage } from '@/components/templates/ClassPage/ClassPage';
import { EmptyPage } from '@/components/templates/EmptyPage/EmptyPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
import { GetAccountSettingsDocument, GetClassesOfUserDocument, GetSchoolsDocument } from '@/codegen/gql/graphql';
import type { NextApiRequest, NextApiResponse } from 'next';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';

export type UserProps = {
  params: { user_id: string };
};

export default async function User({ params: { user_id } }: UserProps, req: NextApiRequest, res: NextApiResponse) {
  // fetch user's classes with user_id
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const classes = await gqlClient.request(GetClassesOfUserDocument, {
    input: {
      userID: user_id,
    },
  });
  const user = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });

  return (
    <WrapperContainer>
      <CoreContainer>
        {classes.getClasses.length === 0 ? (
          <EmptyPage user={user} />
        ) : (
          <ClassPage classes={classes} user_id={user_id} />
        )}
      </CoreContainer>
    </WrapperContainer>
  );
}
