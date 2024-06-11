import { ReactNode } from 'react';

import { Flex } from '../../flex';
import { Text } from '../../text';

type Props = {
  children: ReactNode;
  title: string;
  className?: string;
};

export const Article = ({ children, title, className }: Props) => {
  return (
    <Flex col gap={2} tag='article'>
      <Text className={className} opacity={0.5} tag='h3'>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
