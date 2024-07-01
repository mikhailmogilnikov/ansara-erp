import { Button } from '@nextui-org/button';
import { PiArrowCircleRightBold } from 'react-icons/pi';
import { FormEventHandler, useState } from 'react';
import { AnimatePresence, LayoutGroup, m } from 'framer-motion';
import { Input } from '@nextui-org/input';

import { Text } from '../../../(layout)/text';
import { FileLoaderList } from '../../../file-loader-list';
import { useModalStore } from '../../../modal/lib/store/modal-store';
import { ModalWrapper } from '../../../modal';
import { useNotification } from '../../../notification/model/notification-store';
import { UnderlinedTabs } from '../../../tabs/underlined-tabs';
import { tabsList } from '../config/tabslist';

type Props = {
  actionFn: () => void | Promise<void>;
};

const urlPattern =
  /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|\d{1,3}(\.\d{1,3}){3})(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(\#[-a-zA-Z\d_]*)?$/;

const isValidUrl = (str: string) => {
  return urlPattern.test(str);
};

export const SendFilesModalContent = ({ actionFn }: Props) => {
  const [tab, setTab] = useState<Key | null>(null);
  const { setModal } = useModalStore();
  const [files, setFiles] = useState<File[]>([]);
  const [link, setLink] = useState<string>('');
  const { addNotification } = useNotification();

  const handleClickAction: FormEventHandler = async (e) => {
    e.preventDefault();
    if (tab === 'file' && files.length === 0) {
      addNotification({ text: 'Добавьте хотя бы один файл', type: 'danger' });
    } else if (tab === 'link' && link.length === 0) {
      addNotification({ text: 'Вставьте ссылку', type: 'danger' });
    } else if (tab === 'link' && !isValidUrl(link)) {
      addNotification({ text: 'Некорректная ссылкка', type: 'danger' });
    } else {
      addNotification({ text: 'Материалы успешно отправлены', type: 'success' });
      await actionFn();
      setModal(null);
    }
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
      <UnderlinedTabs setTab={setTab} tabValue={tab} tabs={tabsList} />
      <form action='submit' onSubmit={handleClickAction}>
        <LayoutGroup>
          <AnimatePresence mode='wait'>
            {tab === 'file' ? (
              <m.div
                key='file'
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                initial={{ x: -300, opacity: 0 }}
              >
                <FileLoaderList
                  multiple
                  buttonTitle='Добавить документ'
                  fileList={files}
                  setFileList={setFiles}
                />
              </m.div>
            ) : (
              <m.div
                key='link'
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                initial={{ x: tab ? 300 : 0, opacity: 0 }}
              >
                <Input
                  classNames={{ inputWrapper: '!bg-default' }}
                  placeholder='Введите ссылку на облачное хранилище (Яндекс Диск или Google Диск)'
                  size='lg'
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </m.div>
            )}
          </AnimatePresence>
          <m.div layout>
            <Button
              className='w-full font-medium mt-8'
              color='primary'
              size='lg'
              startContent={<PiArrowCircleRightBold size={18} />}
              type='submit'
              variant='shadow'
            >
              Отправить
            </Button>
          </m.div>
        </LayoutGroup>
      </form>
    </ModalWrapper>
  );
};
