import { NextResponse, NextRequest } from 'next/server';
import { gqlClient } from '@/lib/gqlClient';
import { CreateNoteDocument } from '@/codegen/gql/graphql';

export async function GET(req: NextRequest) {
  const class_id = req.nextUrl.searchParams.get('class_id');
  const school_id = req.nextUrl.searchParams.get('school_id');
  const description = req.nextUrl.searchParams.get('description');
  const title = req.nextUrl.searchParams.get('title');
  const isPublic = req.nextUrl.searchParams.get('isPublic');
  const token = req.cookies.get('token')?.value;
  console.log('**********************************');
  console.log('params : ', class_id, school_id, description, title, isPublic);
  console.log('**********************************');
  if (!token || !class_id || !school_id || !description || !title) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    gqlClient.setHeader('authorization', `Bearer ${token}`);
    try {
      const res = await gqlClient.request(CreateNoteDocument, {
        input: {
          classID: class_id,
          schoolID: school_id,
          description: description,
          title: title,
          isPublic: JSON.parse(isPublic!.toLowerCase()),
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
