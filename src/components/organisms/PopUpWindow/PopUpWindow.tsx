'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { WelcomePageInputs } from '@/components/molecules/WelcomePageInputs/WelcomePageInputs';
import { SubjectSelectComponent } from '@/components/molecules/SubjectSelectComponent/SubjectSelectComponent';

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
  buttonLabel: string;
  user_id?: string;
};

export const PopUpWindow = ({ title, subtitle, isWelcomePage, buttonLabel, user_id }: PopUpWindowProps) => {
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
            <WelcomePageInputs buttonLabel={buttonLabel} />
          ) : (
            <SubjectSelectComponent buttonLabel={buttonLabel} user_id={user_id} />
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
