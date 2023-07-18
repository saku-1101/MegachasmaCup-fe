// import { getToken } from '@/lib/cookie';
import { CreateUser } from '@/lib/graphql/auth';
import { NextRequest, NextResponse } from 'next/server';
import type { NextApiRequest, NextApiResponse } from 'next';

// const cookieStore = cookies();
export async function GET(nReq: NextRequest, nRes: NextResponse, req: NextApiRequest, res: NextApiResponse) {
  const name = nReq.nextUrl.searchParams.get('name');
  const email = nReq.nextUrl.searchParams.get('email');
  const password = nReq.nextUrl.searchParams.get('password');
  if (!name || !email || !password) {
    console.log('**********************************');
    console.log('Missed parameters are detected error');
    console.log('**********************************');
    return;
  } else {
    try {
      const token = await CreateUser({ input: { name: name, email: email, password: password } });
      console.log('**********************************');
      console.log('user is created: ', token);
      console.log('**********************************');
      // response.cookies.set('token', token, { httpOnly: true });
      return NextResponse.json({ token: token });
    } catch (error) {
      console.log('**********************************');
      console.log(error);
      console.log('**********************************');
      return;
    }
  }
}
