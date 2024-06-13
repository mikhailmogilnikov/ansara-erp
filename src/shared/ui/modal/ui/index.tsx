'use client';

import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, m } from 'framer-motion';

import { useModalStore } from '../lib/store/modal-store';

export const Modal = () => {
  const { modal, setModal } = useModalStore();

  const closeModal = () => {
    setModal(false);
  };

  return (
    <AnimatePresence>
      {modal ? (
        <RemoveScroll className='fixed inset-0 z-10'>
          <m.button
            animate={{ opacity: 1 }}
            className='fixed w-full h-dvh bg-opacity-70 bg-black z-10'
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeModal}
          />
          <m.div
            animate={{ x: 0 }}
            className='absolute right-0 h-dvh w-dvw lg:w-[50vw] bg-background dark:bg-default-50 z-20'
            exit={{ x: '100%' }}
            initial={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
          >
            {modal}
          </m.div>
        </RemoveScroll>
      ) : null}
    </AnimatePresence>
  );
};
