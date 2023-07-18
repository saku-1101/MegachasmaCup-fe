import { ClassPage } from '@/components/templates/ClassPage/ClassPage';
import { EmptyPage } from '@/components/templates/EmptyPage/EmptyPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
import type { Class } from '@/app/models';
import { gqlClient } from '@/lib/client';
import { GetClassesOfUserDocument } from '@/codegen/gql/graphql';
import { NextResponse, NextRequest } from 'next/server';
import { getToken } from '@/lib/cookie';
import { getCookie } from 'cookies-next';
import type { NextApiRequest, NextApiResponse } from 'next';

export type UserProps = {
  params: { user_id: string };
};

// const getData = async () => {
//   const data = await fetch('http://localhost:3000/api/classes');
//   const classes = await data.json();

//   return classes as { data: Array<Class> };
// };

export default async function User({ params: { user_id } }: UserProps, req: NextApiRequest, res: NextApiResponse) {
  // fetch user's classes with user_id
  // *** mock
  // const token = getCookie('token', { req, res });
  const token = getToken();
  console.log('**********************************');
  console.log('token here: ', token);
  console.log('**********************************');
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const classes = await gqlClient.request(GetClassesOfUserDocument, {
    input: {
      userID: user_id,
    },
  });

  // const classes: { data: Array<Class> } = await getData();

  return (
    <WrapperContainer>
      <CoreContainer>
        {classes.getClasses.length === 0 ? <EmptyPage /> : <ClassPage classes={classes} user_id={user_id} />}
      </CoreContainer>
    </WrapperContainer>
  );
}
