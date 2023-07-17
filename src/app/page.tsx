'use client';
import { motion } from 'framer-motion';
import { WelcomePage } from '../components/templates/WelcomePage/WelcomePage';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // isAuthenticated === true
      // router.push('/user/' + {user_id} + '/class');
      // isAuthenticated === false
      router.push('/auth');
    }, 3 * 1000);
  }, [router]);
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
      className='mt-10vh flex h-[90vh] min-w-screen justify-center items-center dark:bg-[#3E3D38]'
    >
      <WelcomePage />
    </motion.div>
  );
}
