import { PiDownloadBold, PiLinkSimpleBold } from 'react-icons/pi';
import { Divider } from '@nextui-org/divider';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const NotesActions = () => {
  return (
    <Flex col>
      <Flex col gap={0}>
        <Text opacity={0.5} size={16}>
          Ср, 3 апреля 9:45
        </Text>
        <Text size={16}>Заказчик отправил материалы</Text>
        <Button shadow className='mt-2 w-fit' size='md'>
          <PiDownloadBold size={18} />
          Загрузить
        </Button>
      </Flex>

      <Divider />

      <Flex col gap={0}>
        <Text opacity={0.5} size={16}>
          Вт, 2 апреля 10:45
        </Text>
        <Text size={16}>Заказчик отправил материалы</Text>
        <Button shadow className='mt-2 w-fit text-primary' size='md'>
          <PiLinkSimpleBold size={18} />
          Открыть ссылку
        </Button>
      </Flex>
    </Flex>
  );
};
