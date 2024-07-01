import { PropsWithChildren, ReactNode } from 'react';
import { Button } from '@nextui-org/button';
import { PiXBold } from 'react-icons/pi';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { Flex } from '../../(layout)/flex';
import { Text } from '../../(layout)/text';
import { useModal } from '../lib/store/modal-store';

type Props = { title: string; actionButtons?: ReactNode } & PropsWithChildren;

export const ModalWrapper = ({ title, children, actionButtons }: Props) => {
  const { setModal } = useModal();

  const handleClose = () => {
    setModal(null);
  };

  return (
    <Flex col className='p-8 h-dvh' gap={8}>
      <Text className='max-sm:text-2xl text-4xl' weight={700}>
        {title}
      </Text>
      <Button
        isIconOnly
        className='fixed right-9 top-9 shadow-base'
        radius='full'
        onPress={handleClose}
      >
        <PiXBold className='w-1/2 h-1/2' />
      </Button>
      <ScrollShadow className='flex flex-col gap-8 scrollbar-hide -my-6 py-6 min-h-[calc(100dvh-172px)]'>
        {children}
      </ScrollShadow>
      <Flex>{actionButtons}</Flex>
    </Flex>
  );
};
