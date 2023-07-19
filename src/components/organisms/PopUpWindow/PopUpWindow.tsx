'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { WelcomePageInputs } from '@/components/molecules/WelcomePageInputs/WelcomePageInputs';
import { SubjectSelectComponent } from '@/components/molecules/SubjectSelectComponent/SubjectSelectComponent';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SearchField } from '@/components/atoms/SearchField/SearchField';

const dropIn = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
};

export type PopUpWindowProps = {
  title: string;
  subtitle: string;
  isWelcomePage: boolean;
  isFirstNoteErrorPage: boolean;
  isSchoolRegistration?: boolean;
  buttonLabel: string;
  user_id?: string;
  school_id?: string;
  class_id?: string;
  handleShowModal?: (user_id: string) => void;
};

export const PopUpWindow = ({
  title,
  subtitle,
  isWelcomePage,
  isFirstNoteErrorPage,
  isSchoolRegistration,
  buttonLabel,
  user_id,
  school_id,
  class_id,
  handleShowModal,
}: PopUpWindowProps) => {
  const router = useRouter();
  const handleCreateNote = () => {
    const note_id = '0'; // TODO: note_idのuuid作成する
    router.push(`/user/${user_id}/class/${class_id}/note/${note_id}/edit`);
  };
  const handleHandleShowModal = (user_id: string) => {
    handleShowModal!(user_id);
  };

  return (
    <AnimatePresence initial={true} mode='wait' onExitComplete={() => null}>
      <div className='backdrop'>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='modal'
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <MdTitle title={title} />
          <Description description={subtitle} />
          {isWelcomePage ? (
            isFirstNoteErrorPage ? (
              // to Note add page
              <FirstEngagementButton label={buttonLabel} handleAction={handleCreateNote} type='button' />
            ) : (
              // ユーザ認証
              <WelcomePageInputs buttonLabel={buttonLabel} handleAction={handleHandleShowModal} />
            )
          ) : (
            // 大学登録・教科登録
            <SubjectSelectComponent
              isSchoolRegistration={isSchoolRegistration}
              buttonLabel={buttonLabel}
              user_id={user_id}
              school_id={school_id}
            />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
