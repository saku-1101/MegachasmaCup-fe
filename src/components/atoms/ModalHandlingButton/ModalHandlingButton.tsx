'use client';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../../molecules/Modal/Modal';

export type ModalHandlingButtonProps = {
  label: string;
  isSecondaryBg: boolean;
  user_id: string;
  class_id?: string;
  formId?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

export const ModalHandlingButton = ({
  label,
  isSecondaryBg,
  user_id,
  class_id,
  formId,
  type = 'button',
}: ModalHandlingButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <>
      <Button label={label} isSecondaryBg={isSecondaryBg} handleAction={() => (modalOpen ? close() : open())} />
      <Modal
        modalOpen={modalOpen}
        handleClose={close}
        title='⚠️'
        subtitle='本当に公開しますか？'
        user_id={user_id}
        class_id={class_id}
        type={type}
        formId={formId}
      />
    </>
  );
};
