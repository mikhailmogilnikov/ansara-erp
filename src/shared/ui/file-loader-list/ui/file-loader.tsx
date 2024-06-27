import { PiPlusBold } from 'react-icons/pi';
import { ChangeEventHandler, useRef } from 'react';

import { IFileLoader } from '../model/file-loader-type';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const FileLoader = ({
  setFileList,
  fileList,
  buttonTitle,
  multiple,
  accept,
}: IFileLoader) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleOpenInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (files) {
      const newFilesArray = Object.values(files);

      setFileList([...fileList, ...newFilesArray]);
    }
  };

  return (
    <>
      <Button
        className='font-medium w-full'
        icon={<PiPlusBold size={18} />}
        size='lg'
        onPress={handleOpenInput}
      >
        {buttonTitle}
      </Button>

      <input
        ref={fileInputRef}
        accept={accept}
        className='hidden'
        multiple={multiple}
        type='file'
        onChange={handleInputChange}
      />
    </>
  );
};
