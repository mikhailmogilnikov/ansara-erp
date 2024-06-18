import { Text } from '@/src/shared/ui/(layout)/text';

export const Status = () => {
  return (
    <Text className='w-full line-clamp-2 font-medium min-w-40' size={15}>
      Пример отображаемого статуса в ЛК. Текст должен показываться максимум в 2 строчки
    </Text>
  );
};
