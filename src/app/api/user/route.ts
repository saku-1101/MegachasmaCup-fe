import { GetUser } from '@/lib/graphql/auth';
import { cookies } from 'next/dist/client/components/headers';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  const token = req.nextUrl.searchParams.get('token');
  // const tokenCookie = response.cookies.getAll('token');
  console.log('**********************************');
  console.log('user token in cookie: ', token);
  console.log('**********************************');
  if (!token) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return;
  } else {
    try {
      const user = await GetUser(token);
      console.log('user: ', user);
      return NextResponse.json({ user });
    } catch (error) {
      console.log('**********************************');
      console.log(error);
      console.log('**********************************');
      return;
    }
  }
}
