import { Button } from '@nextui-org/button';
import { PiArrowCircleRightBold, PiFileArchiveBold, PiUploadBold } from 'react-icons/pi';
import { FormEventHandler, useState } from 'react';
import { Tab, Tabs } from '@nextui-org/tabs';

import { Text } from '../../../(layout)/text';
import { Flex } from '../../../(layout)/flex';
import { FileLoaderList } from '../../../file-loader';
import { useModalStore } from '../../../modal/lib/store/modal-store';
import { ModalWrapper } from '../../../modal';

type Props = {
  actionFn: () => void | Promise<void>;
};

export const SendFilesModalContent = ({ actionFn }: Props) => {
  const [tab, setTab] = useState<Key>('link');
  const { setModal } = useModalStore();
  const [files, setFiles] = useState<File[]>([]);

  const handleClickAction: FormEventHandler = async (e) => {
    e.preventDefault();
    await actionFn();
    setModal(null);
  };

  return (
    <ModalWrapper title='Отправить материалы'>
      <Text className='py-1' opacity={0.5} weight={500}>
        Если вы хотите отправить много файлов большого объёма, загрузите их на Яндекс Диск или
        Google Диск, а затем вставьте ссылку на облако.
      </Text>
      <Text className='py-1' opacity={0.5} weight={500}>
        Если же вам нужно отправить документ, нажмите на вкладку «Отправить документ».
      </Text>
      <Tabs
        aria-label='Tabs variants'
        classNames={{
          tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
          cursor: 'w-full bg-primary',
          tab: 'max-w-fit px-0 h-12',
        }}
        color='primary'
        variant='underlined'
        onSelectionChange={setTab}
      >
        <Tab
          key={'link'}
          title={
            <Flex
              center
              className={`font-medium transition-colors ${tab === 'link' && 'text-primary'}`}
              gap={3}
            >
              <PiUploadBold size={18} />
              Облако
            </Flex>
          }
        />
        <Tab
          key={'file'}
          title={
            <Flex
              center
              className={`font-medium transition-colors ${tab === 'file' && 'text-primary'}`}
              gap={3}
            >
              <PiFileArchiveBold size={18} />
              Отправить документ
            </Flex>
          }
        />
      </Tabs>
      <form action='submit' onSubmit={handleClickAction}>
        {tab === 'file' ? (
          <FileLoaderList
            multiple
            buttonTitle='Добавить документ'
            fileList={files}
            setFileList={setFiles}
          />
        ) : (
          <></>
        )}
        <Button
          className='w-full font-medium'
          color='primary'
          size='lg'
          startContent={<PiArrowCircleRightBold size={18} />}
          type='submit'
          variant='shadow'
        >
          Отправить
        </Button>
      </form>
    </ModalWrapper>
  );
};
