import Link from 'next/link';
import { Test } from '../components/atoms/Test/Test';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Test />
      <>
        <h1>Hello, Next.js 13 App Directory!</h1>
        <p>
          <Link href='/client-side'>Use Apollo Client inside Client Side Component</Link>
        </p>
        <p>
          <Link href='/server-side'>Use Apollo Client inside React Server Component (RSC)</Link>
        </p>
      </>
    </main>
  );
}
