import { Avatar } from '@nextui-org/avatar';
import { PiUserBold } from 'react-icons/pi';
import { useRef, useState } from 'react';

import { ModalWrapper } from '@/src/shared/ui/modal';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { FileLoader } from '@/src/shared/ui/file-loader';
import { Text } from '@/src/shared/ui/(layout)/text';

export const EditProfileModal = () => {
  const imgSize = useRef<{ width: number; height: number } | null>(null);

  const [avatar, setAvatar] = useState<File[]>([]);

  const handleSetNewAvatar = (fileList: File[]) => {
    if (fileList.length) {
      const newAvatar = fileList.at(-1) as File;

      setAvatar([newAvatar]);
    }
  };

  return (
    <ModalWrapper title='Редактировать профиль'>
      <Flex center>
        <Avatar
          className='w-64 h-64 flex-shrink-0 border-1 border-white/10 bg-zinc-800'
          fallback={<PiUserBold className='opacity-40 text-white w-28 h-28' size={24} />}
          src={avatar.length === 1 ? URL.createObjectURL(avatar[0]) : undefined}
          onClick={() => {}}
          onLoad={(e: any) =>
            (imgSize.current = { width: e.target.naturalWidth, height: e.target.naturalHeight })
          }
        />

        <Flex col>
          <Text size={24} weight={600}>
            Аватар
          </Text>
          <FileLoader
            fileList={avatar}
            setFileList={avatar.length > 1 ? setAvatar : handleSetNewAvatar}
          />
        </Flex>
      </Flex>
    </ModalWrapper>
  );
};
