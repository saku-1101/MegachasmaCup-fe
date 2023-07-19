import { NextResponse, NextRequest } from 'next/server';
import { gqlClient } from '@/lib/gqlClient';
import { GetClassesDocument, GetSchoolsDocument } from '@/codegen/gql/graphql';

export async function GET(req: NextRequest, res: NextResponse) {
  const isSchool = req.nextUrl.searchParams.get('isSchool');
  const query = req.nextUrl.searchParams.get('query');
  const token = req.cookies.get('token')?.value;

  if (!token || !isSchool || !query) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    if (isSchool) {
      try {
        const res = async (value: string) => {
          const res = await gqlClient.request(GetSchoolsDocument, {
            searchWord: value,
          });
          return res;
        };
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
    } else {
      try {
        const res = await gqlClient.request(GetClassesDocument, {
          input: {
            searchWord: query,
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
}
