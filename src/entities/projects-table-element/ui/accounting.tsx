import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const Accounting = () => {
  return (
    <Flex col gap={0}>
      <Text className='w-full font-medium' opacity={0.5} size={15}>
        вт, 12 декабря, 14:18
      </Text>
      <Text className='w-full line-clamp-1 font-medium' size={15}>
        Прошедший аккаунтинг, максимум в 1 строчку
      </Text>
    </Flex>
  );
};
