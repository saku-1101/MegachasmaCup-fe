import { GetUser } from '@/lib/graphql/auth';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const token = req.cookies.get('token')?.value;
  if (!token) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return NextResponse.json({ error: 'Internal Server Error: Missed parameters are detected.' }, { status: 500 });
  } else {
    try {
      const user = await GetUser(token);
      console.log('user: ', user);
      return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
      console.log('**********************************');
      console.log(error);
      console.log('**********************************');
      return NextResponse.json({ error: "Internal Server Error: Couldn't get the user with token." }, { status: 500 });
    }
  }
}
