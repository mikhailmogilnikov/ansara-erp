import { Avatar } from '@nextui-org/avatar';
import { m } from 'framer-motion';
import { PiUserBold } from 'react-icons/pi';
import { Divider } from '@nextui-org/divider';

import { ChangeTheme } from './change-theme';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { Button } from '@/src/shared/ui/(buttons)/button';

type Props = {
  onClose: VoidFunction;
};

export const ProfileModal = ({ onClose }: Props) => {
  return (
    <>
      <m.aside
        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
        className='w-80 bg-black absolute top-0 right-0 rounded-3xl border-1 border-white/10 z-50 origin-top-right p-6 flex flex-col gap-4'
        exit={{ scale: 0, opacity: 0, filter: 'blur(24px)' }}
        initial={{ scale: 0, opacity: 0, filter: 'blur(24px)' }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        <Flex className='items-center' tag='article'>
          <Avatar
            className='w-20 h-20 flex-shrink-0 border-1 border-white/10 bg-zinc-800'
            fallback={
              <PiUserBold className='opacity-40 text-white' size={32} />
            }
          />
          <Flex col gap={0}>
            <Text className='text-white font-semibold' size={20}>
              Родион
            </Text>
            <Text className='text-white font-medium' opacity={0.5} size={16}>
              Администратор
            </Text>
          </Flex>
        </Flex>
        <ChangeTheme />
        <Divider className='bg-zinc-800' />
        <Button streched className=' bg-zinc-800 text-danger'>
          Выйти
        </Button>
      </m.aside>
      <m.button
        animate={{ opacity: 1 }}
        className='fixed inset-0 bg-black/50 z-40'
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={onClose}
      />
    </>
  );
};
