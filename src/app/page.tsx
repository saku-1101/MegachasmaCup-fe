import Image from 'next/image';
import { Test } from '../components/atoms/Test/Test';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Test />
    </main>
  );
}
