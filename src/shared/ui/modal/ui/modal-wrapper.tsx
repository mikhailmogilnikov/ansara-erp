import { PropsWithChildren } from 'react';
import { Button } from '@nextui-org/button';
import { PiXBold } from 'react-icons/pi';

import { Flex } from '../../(layout)/flex';
import { Text } from '../../(layout)/text';
import { useModal } from '../lib/store/modal-store';

type Props = { title: string } & PropsWithChildren;

export const ModalWrapper = ({ title, children }: Props) => {
  const { setModal } = useModal();

  const handleClose = () => {
    setModal(null)
  }

  return (
    <Flex col className='p-8' gap={8}>
      <Text className='max-sm:text-2xl text-4xl' weight={700}>
        {title}
      </Text>
      {children}
      <Button isIconOnly className='fixed right-9 top-9 shadow-base' radius='full' onPress={handleClose}>
        <PiXBold className='w-1/2 h-1/2' />
      </Button>
    </Flex>
  );
};
