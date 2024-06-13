'use client';

import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TableElement } from '@/src/entities/projects-table-element';

type Props = {
  user?: string;
};

export const TableList = ({ user }: Props) => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Flex col gap={4}>
      {user && (
        <Text className='text-4xl mt-4' weight={600}>
          {user} <span className='ml-2 text-lg opacity-50'>4 проекта</span>
        </Text>
      )}

      <Flex col className='mt-2' gap={0}>
        <Reorder.Group axis='y' values={items} onReorder={setItems}>
          {items.map((item, index) => (
            <Reorder.Item key={item} value={item}>
              <TableElement isEven={index % 2 === 0} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </Flex>
    </Flex>
  );
};
