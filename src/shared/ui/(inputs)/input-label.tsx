import { PropsWithChildren } from 'react';

import { Flex } from '../(layout)/flex';
import { Text } from '../(layout)/text';

export const InputLabel = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title: string; className?: string }>) => {
  return (
    <Flex col gap={0}>
      <Text className={`-mt-1 mb-[6px] ${className}`} size={16}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
