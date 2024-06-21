'use client';

import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Task } from '@/src/entities/task';
import { EditTask } from '@/src/features/tasks-edit-task';
import { ITask } from '@/src/shared/model/task.type';
import { Text } from '@/src/shared/ui/(layout)/text';

interface IDraggbleTask extends ITask {
  order: number;
}

export const DraggbleTasks = ({ tasks, showUsers }: { tasks: ITask[]; showUsers?: boolean }) => {
  const [draggbleTasks, setDraggbleTasks] = useState(
    tasks.map((task, index) => ({
      ...task,
      order: index,
    })) as IDraggbleTask[],
  );

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <Reorder.Group axis='y' values={draggbleTasks} onReorder={setDraggbleTasks}>
      {draggbleTasks.map((task) => (
        <Reorder.Item
          key={task.id}
          value={task}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          <EditTask isDragging={isDragging} task={task}>
            <Task {...task} showUsers={showUsers} />
          </EditTask>
        </Reorder.Item>
      ))}
      {!draggbleTasks.length && (
        <Text className='mt-3' tag='h1'>
          Нет текущих задач
        </Text>
      )}
    </Reorder.Group>
  );
};
