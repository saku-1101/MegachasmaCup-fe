'use client';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { AccountButton } from '@/components/atoms/AccountButton/AccountButton';
import { useState } from 'react';
const slideVerticalAnimation = {
  open: {
    rotateX: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      mass: 0.8,
      type: 'spring',
    },
    display: 'block',
  },
  close: {
    rotateX: -15,
    y: -320,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const slideHorizontalAnimation = {
  left: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  right: {
    x: -250,
    transition: {
      duration: 0.3,
    },
  },
};

export type DropdownMenuProps = {
  user_id: string;
};

export const DropdownMenu = ({ user_id }: DropdownMenuProps) => {
  const leftMenu = [
    { name: '投稿したノート', url: `/user/${user_id}/your_notes` },
    { name: 'いいねしたノート', url: `/user/${user_id}/likes` },
    { name: '保存済みノート', url: `/user/${user_id}/private_notes` },
    { name: 'アカウント設定', url: `/user/${user_id}/setting` },
  ];
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const leftMenuHeight = (leftMenu.length + 6) * 35;
  const [Mode, setMode] = useState(false);
  const ToggleMoads = () => {
    if (Mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMode(!Mode);
  };
  return (
    <div className='relative'>
      <AccountButton onClick={toggleDropdown} />
      <motion.div
        className='dropdown-container md:w-[15rem] w-[10rem]'
        style={{ height: `${leftMenuHeight}px` }}
        initial='close'
        animate={isOpen ? 'open' : 'close'}
        variants={slideVerticalAnimation}
      >
        <motion.div className='dropdown' initial='left' variants={slideHorizontalAnimation}>
          <motion.div className='flex flex-col h-full w-full relative font-bold text-[1rem] menu-categories'>
            <ul className='item-list'>
              {leftMenu.map((text, i) => (
                <Link key={i} className='item' href={text.url}>
                  {text.name}
                </Link>
              ))}
              <Link className='item text-error' href='/'>
                ログアウト
              </Link>

              <button onClick={ToggleMoads} className='item text-black dark:text-white'>
                Dark Mode : {Mode ? 'ON' : 'OFF'}
              </button>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
