import { PiPlusCircleBold } from 'react-icons/pi';
import { ChangeEventHandler, useRef } from 'react';

import { IFileLoader } from '../model/file-loader-type';
import { Button } from '../../(buttons)/button';

export const FileLoader = ({
  setFileList,
  fileList,
  isSingle,
  buttonTitle,
  multiple,
  accept,
  imageLinks,
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
        icon={<PiPlusCircleBold size={20} />}
        isDisabled={isSingle && (fileList.length > 0 || (imageLinks && imageLinks.length > 0))}
        size='lg'
        onPress={handleOpenInput}
      >
        {buttonTitle || 'Добавить'}
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
