import { ITask } from '../model/task.type';

import { Text } from '@/src/shared/ui/(layout)/text';

export const Task = ({ startTime, endTime, id, body }: ITask) => {
  return (
    <div className='w-full py-5 border-b-1 border-divider'>
      <Text size={16}>{body}</Text>
    </div>
  );
};
