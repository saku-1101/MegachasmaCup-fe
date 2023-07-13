'use client';
import { motion } from 'framer-motion';
import { WelcomePage } from '../components/templates/WelcomePage/WelcomePage';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push('/auth');
  }, 3 * 1000);
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
