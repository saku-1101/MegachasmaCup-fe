'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { WelcomePageInputs } from '@/components/molecules/WelcomePageInputs/WelcomePageInputs';
import { SelectField } from '@/components/atoms/SelectField/SelectField';

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
};

export const PopUpWindow = ({ title, subtitle, isWelcomePage, buttonLabel }: PopUpWindowProps) => {
  const someAction = () => {
    console.log('yay!');
  };
  return (
    <AnimatePresence initial={true} mode='wait' onExitComplete={() => null}>
      <div className='backdrop'>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className='modal orange-gradient'
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <MdTitle title={title} />
          <Description description={subtitle} />
          {isWelcomePage ? <WelcomePageInputs /> : <SelectField label='講義名' placeholder='Select' />}
          <FirstEngagementButton label={buttonLabel} handleAction={someAction} />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
