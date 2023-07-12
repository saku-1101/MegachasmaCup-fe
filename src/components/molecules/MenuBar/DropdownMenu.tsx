import { useState } from 'react';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { AccountButton } from '@/components/atoms/AccountButton/AccountButton';

export type MenuBarProps = {
  user: {
    id: string;
    name: string;
    email: string;
    faculty: string;
    year: number;
  };
};
const leftMenu = [
  { name: '投稿したノート', url: '/' },
  { name: 'いいねしたノート', url: '/' },
  { name: 'コメント一覧', url: '/' },
  { name: 'アカウント設定', url: '/' },
];

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

export const DropdownMenu = ({ user }: MenuBarProps) => {
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const leftMenuHeight = (leftMenu.length + 4) * 35;
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
                <Link key={i} className='item' href='/'>
                  {text.name}
                </Link>
              ))}
              <Link className='item text-error' href='/'>
                ログアウト
              </Link>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
