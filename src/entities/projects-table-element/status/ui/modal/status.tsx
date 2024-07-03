import { Textarea } from '@nextui-org/input';

import { useProjectStatus } from '../../model/status-store';

export const TableStatus = () => {
  const { data, setStatus } = useProjectStatus();

  return (
    <Textarea
      classNames={{ inputWrapper: '!bg-default' }}
      placeholder='Введите текущий статус выполнения проекта'
      size='lg'
      value={data.status}
      onChange={(e) => setStatus(e.target.value)}
    />
  );
};
