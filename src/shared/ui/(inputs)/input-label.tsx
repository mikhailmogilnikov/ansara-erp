import { PropsWithChildren } from 'react';

import { Flex } from '../(layout)/flex';
import { Text } from '../(layout)/text';

export const InputLabel = ({ children, title }: PropsWithChildren<{ title: string }>) => {
  return (
    <Flex col gap={0}>
      <Text className='-mt-1 mb-[6px]' size={16}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
