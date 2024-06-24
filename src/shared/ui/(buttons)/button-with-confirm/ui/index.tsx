import { Button, ButtonProps } from '@nextui-org/button';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/modal';
import { ReactNode } from 'react';

import { ModalVariants } from '../config/animation-variants';

import { ConfirmModalContent } from './modal';

type Props = {
  icon?: ReactNode;
  children?: ReactNode;
  radius?: 'full';
  className?: string;
  description: string;
  confirmTitle?: string;
  confirmColor?: 'danger';
  actionFn: () => void | Promise<void>;
} & ButtonProps;

export const ButtonWithConfirm = ({
  icon,
  children,
  radius,
  className,
  description,
  confirmTitle,
  confirmColor,
  actionFn,
  ...buttonProps
}: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        size='lg'
        {...buttonProps}
        className={`font-medium ${className}`}
        radius={radius}
        startContent={icon}
        onPress={onOpen}
      >
        {children}
      </Button>
      <Modal
        backdrop='opaque'
        classNames={{
          base: 'bg-background border-1 border-white/10 rounded-b-none rounded-t-3xl sm:rounded-3xl shadow-lg m-0',
          closeButton: 'hidden',
        }}
        isOpen={isOpen}
        motionProps={ModalVariants}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <ConfirmModalContent
              actionFn={actionFn}
              confirmColor={confirmColor}
              confirmTitle={confirmTitle}
              description={description}
              icon={icon}
              onClose={onClose}
            />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
