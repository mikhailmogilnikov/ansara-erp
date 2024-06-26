import { Textarea } from '@nextui-org/input';

export const TableStatus = () => {
  return (
    <Textarea
      classNames={{ inputWrapper: '!bg-default' }}
      placeholder='Введите текущий статус выполнения проекта'
      size='lg'
    />
  );
};
