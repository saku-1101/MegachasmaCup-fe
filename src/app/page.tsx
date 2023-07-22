'use client';
import { motion } from 'framer-motion';
import { WelcomePage } from '@/components/templates/WelcomePage/WelcomePage';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { getCookie } from 'cookies-next';

export default function Home() {
  const router = useRouter();
  const getUser = useCallback(async () => {
    const token = getCookie('token');
    if (token) {
      // isAuthenticated === true
      const res = await fetch(`http://localhost:3000/api/user?token=${token}`);
      const data = await res.json();

      const user_id = data.user[0].id;
      console.log('user_id in page:', user_id);
      router.push(`/user/${user_id}/class`);
      router.refresh();
    } else {
      // isAuthenticated === false
      router.push('/auth');
      router.refresh();
    }
  }, [router]);
  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 1 * 1000);
  }, [getUser]);
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }} // アンマウント時
      className='mt-10vh flex h-[90vh] min-w-screen justify-center items-center'
    >
      <WelcomePage />
    </motion.div>
  );
}
