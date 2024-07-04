import { PiPencilSimpleBold } from 'react-icons/pi';
import { ChangeEventHandler, useRef, useState } from 'react';

import { Text } from '@/src/shared/ui/(layout)/text';

interface Props {
  closeModal: VoidFunction;
}

export const EditProfileButton = ({ closeModal }: Props) => {
  const [avatar, setAvatar] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangeEmployees = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;

    if (files) {
      setAvatar(files[0]);
    }
  };

  return (
    <>
      <button
        className='px-2 h-12 rounded-2xl flex gap-3 items-center active:scale-95 transition-all outline-none'
        onClick={handleChangeEmployees}
      >
        <PiPencilSimpleBold className='w-auto h-1/2 text-white' />
        <Text className='text-white font-medium'>Изменить аватар</Text>
      </button>
      <input ref={fileInputRef} className='hidden' type='file' onChange={handleInputChange} />
    </>
  );
};
