'use client';

import { RemoveScroll } from 'react-remove-scroll';

import { useModalStore } from '../lib/store/modal-store';

export const Modal = () => {
  const { modal } = useModalStore();

  return modal ? (
    <RemoveScroll className='fixed inset-0'>
      <div className='fixed w-full h-dvh bg-opacity-70 bg-black z-10' />
      <div className='absolute right-0  h-dvh w-[50vw] bg-default p-4 z-20' />
    </RemoveScroll>
  ) : null;
};
