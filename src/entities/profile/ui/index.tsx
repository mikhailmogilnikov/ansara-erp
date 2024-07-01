'use client';

import { Avatar } from '@nextui-org/avatar';
import { PiUserBold } from 'react-icons/pi';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ProfileModal } from './profile-modal';

import { Flex } from '@/src/shared/ui/(layout)/flex';

interface Props {
  profileFeatures: (closeModal: VoidFunction) => React.ReactNode;
}

export const Profile = ({ profileFeatures }: Props) => {
  const [isOpened, setIsOpened] = useState(false);

  const closeModal = () => {
    setIsOpened(false);
  };

  return (
    <Flex className='!w-48 items-center flex-shrink-0 justify-end relative'>
      <Avatar
        className='w-12 h-12 flex-shrink-0 border-1 border-white/10 bg-zinc-800'
        fallback={<PiUserBold className='opacity-40 text-white' size={24} />}
        onClick={() => setIsOpened(true)}
      />

      <AnimatePresence>
        {isOpened && <ProfileModal profileFeatures={profileFeatures} onClose={closeModal} />}
      </AnimatePresence>
    </Flex>
  );
};
