import { CreateUser } from '@/lib/graphql/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  let response = NextResponse.next();
  const name = req.nextUrl.searchParams.get('name');
  const email = req.nextUrl.searchParams.get('email');
  const password = req.nextUrl.searchParams.get('password');
  if (!name || !email || !password) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return;
  } else {
    try {
      const token = await CreateUser({ input: { name: name, email: email, password: password } });
      response.cookies.set('token', token, { httpOnly: true });
      const tokenCookie = response.cookies.get('token');
      console.log('**********************************');
      console.log('cookie value: ', tokenCookie?.value);
      console.log('**********************************');
      return NextResponse.json({ token: tokenCookie?.value });
    } catch (error) {
      console.log('**********************************');
      console.log(error);
      console.log('**********************************');
      return;
    }
  }
}
