import { NextResponse, NextRequest } from 'next/server';
import { gqlClient } from '@/lib/gqlClient';
import {
  CreateClassDocument,
  CreateSchoolDocument,
  GetClassesDocument,
  GetSchoolsDocument,
} from '@/codegen/gql/graphql';

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  const token = req.cookies.get('token')?.value;

  if (!token || !name) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    try {
      const res = await gqlClient.request(CreateSchoolDocument, {
        input: {
          name: name,
        },
      });
      console.log('res: ', res);
      return NextResponse.json({ res }, { status: 200 });
    } catch (error) {
      console.log('**********************************');
      console.log(error);
      console.log('**********************************');
      return NextResponse.json(
        { error: "Internal Server Error: Couldn't get the result with token." },
        { status: 500 },
      );
    }
  }
}
