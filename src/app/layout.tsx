import { Header } from '@/components/molecules/Header/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { GetAccountSettingsDocument } from '@/codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
import { gqlClient } from '@/lib/gqlClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // user Data fetch after the authentication
  // useEffectを使用する必要があるならheaderコンポーネントでuseEffectしてuserの変更を検知し，
  // dropdownにauth済みユーザを反映する
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const userObj = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });

  return (
    <html lang='en' className='w-screen overflow-x-hidden'>
      <body className={inter.className}>
        <Suspense fallback='loading...'>
          <Header userObj={userObj} />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
