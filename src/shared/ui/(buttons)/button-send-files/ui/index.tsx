'use client';

import { Button, ButtonProps } from '@nextui-org/button';
import { PiUploadBold } from 'react-icons/pi';

import { useModal } from '../../../modal';

import { SendFilesModalContent } from './add-files-form';

type Props = {
  radius?: 'full';
  className?: string;
  actionFn: () => void | Promise<void>;
} & ButtonProps;

export const ButtonSendFiles = ({ radius, className, actionFn, ...buttonProps }: Props) => {
  const { setModal } = useModal();

  const uploadFileHandler = () => {
    setModal(<SendFilesModalContent actionFn={actionFn} />);
  };

  return (
    <>
      <Button
        size='lg'
        {...buttonProps}
        className={`font-medium ${className}`}
        color='primary'
        radius={radius}
        startContent={<PiUploadBold />}
        onPress={uploadFileHandler}
      >
        Отправить материалы
      </Button>
    </>
  );
};
