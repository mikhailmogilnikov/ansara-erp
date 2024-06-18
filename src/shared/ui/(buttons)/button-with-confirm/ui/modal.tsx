import { ModalBody, ModalHeader } from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { ReactNode } from 'react';

type Props = {
  onClose: () => void;
  icon?: ReactNode;
  description: string;
  confirmTitle?: string;
  confirmColor?: 'danger';
  actionFn: () => void | Promise<void>;
};

export const ConfirmModalContent = ({
  onClose,
  icon,
  description,
  confirmTitle,
  confirmColor,
  actionFn,
}: Props) => {
  const handleClickAction = async () => {
    await actionFn();
    onClose();
  };

  return (
    <>
      <ModalHeader className='flex flex-col gap-1'>
        <h2 className='text-xl p-2 pb-0 pt-3'> Подтвердите действие</h2>
      </ModalHeader>
      <ModalBody>
        <p className='opacity-50 font-medium px-2 py-1'>{description}</p>
      </ModalBody>
      <div className='w-full flex gap-4 px-6 pb-6 pt-4'>
        <Button
          className='w-full shadow-base font-medium'
          color='default'
          size='lg'
          onPress={onClose}
        >
          Отмена
        </Button>
        <Button
          className='w-full font-medium'
          color={confirmColor || 'primary'}
          size='lg'
          startContent={icon}
          variant='shadow'
          onPress={handleClickAction}
        >
          {confirmTitle || 'Подтвердить'}
        </Button>
      </div>
    </>
  );
};
