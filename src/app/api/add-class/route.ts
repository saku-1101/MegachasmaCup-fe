import { NextResponse, NextRequest } from 'next/server';
import { gqlClient } from '@/lib/gqlClient';
import { CreateClassDocument, GetClassesDocument, GetSchoolsDocument } from '@/codegen/gql/graphql';

export async function GET(req: NextRequest) {
  const schoolID = req.nextUrl.searchParams.get('schoolID');
  const name = req.nextUrl.searchParams.get('name');
  const token = req.cookies.get('token')?.value;

  if (!token || !schoolID || !name) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    try {
      const res = await gqlClient.request(CreateClassDocument, {
        input: {
          name: name,
          schoolID: schoolID,
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
