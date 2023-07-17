'use client';
import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { AccountButton } from '@/components/atoms/AccountButton/AccountButton';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
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
  img_url: string | undefined;
};

export const DropdownMenu = ({ user_id, img_url }: DropdownMenuProps) => {
  const leftMenu = [
    { name: '投稿したノート', url: `/user/${user_id}/your_notes` },
    { name: 'いいねしたノート', url: `/user/${user_id}/likes` },
    { name: '保存済みノート', url: `/user/${user_id}/private_notes` },
    { name: 'アカウント設定', url: `/user/${user_id}/setting` },
  ];
  const [isOpen, toggleDropdown] = useCycle(false, true);
  const leftMenuHeight = (leftMenu.length + 6) * 35;
  const [Mode, setMode] = useState(false);
  const [WindowState, setWindowState] = useState(false);
  const ToggleWindowState = () => {
    setWindowState(!WindowState);
  };
  const ToggleMode = () => {
    if (Mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setMode(!Mode);
  };
  useEffect(() => {
    ToggleMode();
  }, []);
  return (
    <>
      <div className='relative'>
        <AccountButton img_url={img_url} onClick={toggleDropdown} Mode={Mode} />
        <motion.div
          className='dropdown-container md:w-[15rem] w-[10rem] dark:border-[#646464] dark:bg-[#625E5E]'
          style={{ height: `${leftMenuHeight}px` }}
          initial='close'
          animate={isOpen ? 'open' : 'close'}
          variants={slideVerticalAnimation}
        >
          <motion.div className='dropdown' initial='left' variants={slideHorizontalAnimation}>
            <div className={WindowState ? 'visible' : 'hidden'}>
              <Modal
                title='ログアウト'
                subtitle='ログアウトしますか？'
                modalOpen={WindowState}
                handleClose={ToggleWindowState}
                label1='ログアウトする'
                user_id={user_id}
              ></Modal>
            </div>

            <motion.div className='flex flex-col h-full w-full relative font-bold text-[1rem] menu-categories'>
              <ul className='item-list'>
                {leftMenu.map((text, i) => (
                  <Link key={i} className='item' href={text.url}>
                    {text.name}
                  </Link>
                ))}
                <button onClick={ToggleMode} className='item text-black dark:text-white'>
                  Dark Mode : {Mode ? 'ON' : 'OFF'}
                </button>
                <a className='item text-error' onClick={ToggleWindowState}>
                  ログアウト
                </a>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
