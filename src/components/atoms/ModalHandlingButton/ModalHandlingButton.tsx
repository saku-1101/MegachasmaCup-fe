'use client';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Modal } from '../../molecules/Modal/Modal';

export type ModalHandlingButtonProps = {
  label: string;
  isSecondaryBg: boolean;
};

export const ModalHandlingButton = ({ label, isSecondaryBg }: ModalHandlingButtonProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <>
      <Button label={label} isSecondaryBg={isSecondaryBg} handleAction={() => (modalOpen ? close() : open())} />
      <Modal modalOpen={modalOpen} handleClose={close} title='This is a modal' subtitle='This is a sentence' />
    </>
  );
};
