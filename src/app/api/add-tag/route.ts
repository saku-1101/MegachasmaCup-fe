import { NextResponse, NextRequest } from 'next/server';
import { gqlClient } from '@/lib/gqlClient';
import { CreateTagDocument } from '@/codegen/gql/graphql';
export async function GET(req: NextRequest) {
  const tags = req.nextUrl.searchParams.get('tags');
  const token = req.cookies.get('token')?.value;
  console.log('**********************************');
  console.log('Array of tags: ', tags);
  console.log('**********************************');
  if (!token || !tags) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    try {
      const arrayOfTags = tags.split('*');
      console.log('**********************************');
      console.log('Array of tags: ', arrayOfTags);
      console.log('**********************************');
      for (const tag of arrayOfTags) {
        const res = await gqlClient.request(CreateTagDocument, {
          input: {
            name: tag,
          },
        });
        console.log('res: ', res);
      }
      return NextResponse.json({ res: { message: 'tags were successfully inserted!' } }, { status: 200 });
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
