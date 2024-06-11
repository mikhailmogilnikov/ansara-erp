import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const TableHeader = () => {
  return (
    <Flex className='absolute !w-[calc(100%-32px)] min-w-[1000px] top-0 left-4 h-12 bg-primary-100/80 backdrop-blur-lg rounded-2xl items-center pb-[2px] px-4'>
      <Text className='text-primary-700 font-semibold w-32 flex-shrink-0' size={15}>
        Заказчик
      </Text>
      <Text className='text-primary-700 font-semibold w-full' size={15}>
        Аккаунтинг
      </Text>
      <Text className='text-primary-700 font-semibold w-full' size={15}>
        Следующая задача
      </Text>
      <Text className='text-primary-700 font-semibold w-72 flex-shrink-0' size={15}>
        Временные рамки
      </Text>
      <Text className='text-primary-700 font-semibold w-full' size={15}>
        Отображаемый статус
      </Text>
      <Text className='text-primary-700 font-semibold w-28 flex-shrink-0' size={15}>
        Оплачено
      </Text>
      <Text className='text-primary-700 font-semibold' size={15}>
        Осталось
      </Text>
    </Flex>
  );
};
