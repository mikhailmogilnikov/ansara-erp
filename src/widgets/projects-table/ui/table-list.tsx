'use client';

import { Reorder } from 'framer-motion';
import { useState } from 'react';

import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TableElement } from '@/src/entities/projects-table-element';

export const TableList = () => {
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Flex col gap={6}>
      <Text className='text-4xl font-semibold mt-4 mb-2'>Арина</Text>
      <Flex col gap={0}>
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
