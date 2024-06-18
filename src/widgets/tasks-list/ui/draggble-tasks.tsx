import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { EditTaskForm } from './task-form';

import { ITask, Task } from '@/src/entities/task';

interface IDraggbleTask extends ITask {
  order: number;
}

export const DraggbleTasks = ({ tasks }: { tasks: ITask[] }) => {
  const [draggbleTasks, setDraggbleTasks] = useState(
    tasks.map((task, index) => ({
      ...task,
      order: index,
    })) as IDraggbleTask[],
  );

  return (
    <Reorder.Group axis='y' values={draggbleTasks} onReorder={setDraggbleTasks}>
      {draggbleTasks.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <Task {...item} key={item.id} modalContent={<EditTaskForm {...item} />} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
