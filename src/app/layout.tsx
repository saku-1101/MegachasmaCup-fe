import { Header } from '@/components/molecules/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { gqlClient } from '@/lib/client';
import { GetAccountSettingsDocument } from '@/codegen/gql/graphql';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const getUser = async () => {
  const res = await fetch('http://localhost:3000/api/user');
  if (!res.ok) {
    throw new Error('error');
  }

  const user = await res.json();

  return user as {data: { id: string; name: string; email: string; img_url: string | undefined }};
};
// async function getUser() {
//   const data = await gqlClient.request(GetAccountSettingsDocument, {});
// }
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // user Data fetch after the authentication
  // useEffectを使用する必要があるならheaderコンポーネントでuseEffectしてuserの変更を検知し，
  // dropdownにauth済みユーザを反映する
  const user = await getUser();
  console.log('***************************');
  console.log(user);
  console.log('***************************');

  return (
    <html lang='en' className='w-screen overflow-x-hidden'>
      <body className={inter.className}>
        <Suspense fallback='loading...'>
          <Header user={user.data} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
