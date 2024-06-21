import { Divider } from '@nextui-org/divider';
import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { TableTestTasks } from '../config/test-tasks';
import { TTableTask } from '../model/task.type';

import { TableTask } from './task';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const TableTasksList = () => {
  const [tasks, setTasks] = useState<TTableTask[]>(TableTestTasks);

  return (
    <Flex col>
      <Divider className='-mb-4' />
      <Reorder.Group axis='y' values={tasks} onReorder={setTasks}>
        {tasks.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            <TableTask item={item} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </Flex>
  );
};
