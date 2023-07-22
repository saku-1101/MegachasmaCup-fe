import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from './Backdrop';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { Description } from '../../atoms/Description/Description';
import { Button } from '../../atoms/Button/Button';
import { useRouter } from 'next/navigation';
import { deleteCookie } from 'cookies-next';

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
  type?: 'button' | 'submit' | 'reset' | undefined;
  label1?: string;
  label2?: string;
  user_id: string;
  class_id?: string;
  formId?: string;
};

export const Modal = ({
  modalOpen,
  handleClose,
  title,
  subtitle,
  user_id,
  class_id,
  label1,
  label2,
  type = 'button',
  formId,
}: ModalProps) => {
  const router = useRouter();
  const exectuteAction = () => {
    if (label1 === 'ログアウトする') {
      // delete cookies
      deleteCookie('token');
      router.push(`/`);
      router.refresh();
    } else {
      // create note as is_private false using ids
      // push to note list page
      // original function is defined in MdEditor
    }
  };
  if (label1 === undefined) {
    label1 = '公開する';
  }
  if (label2 === undefined) {
    label2 = '今はやめておく';
  }
  return (
    <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
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

            <Button label={label1} type={type} isSecondaryBg={false} handleAction={exectuteAction} formId={formId}/>
            <Button label={label2} isSecondaryBg={true} handleAction={handleClose} />
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};
