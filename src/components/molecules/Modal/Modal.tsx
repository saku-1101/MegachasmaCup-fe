import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { Button } from '../../atoms/Button/Button';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export type ModalProps = {
  modalOpen: boolean;
  handleClose: () => void;
  title: string;
  subtitle: string;
  handleAction?: () => void;
};

export const Modal = ({ modalOpen, handleClose, title, subtitle }: ModalProps) => {
  const someAction = () => {
    return;
  };
  return (
    <AnimatePresence
      // Disable any initial animations on children that
      // are present when the component is first rendered
      initial={false}
      // Only render one component at a time.
      // The exiting component will finish its exit
      // animation before entering component is rendered
      mode='wait'
      // Fires when all exiting nodes have completed animating out
      onExitComplete={() => null}
    >
      {modalOpen && (
        <Backdrop onClick={handleClose}>
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
            <Button label='公開する' isSecondaryBg={false} handleAction={someAction} />
            <Button label='今はやめておく' isSecondaryBg={true} handleAction={handleClose} />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
