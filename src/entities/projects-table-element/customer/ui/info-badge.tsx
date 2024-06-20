import { ElementType, ReactNode } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export type InfoBadgeProps = {
  children: ReactNode;
  icon: ElementType;
  title: string;
};

export const InfoBadge = ({ icon: Icon, children, title }: InfoBadgeProps) => {
  return (
    <Flex className='items-center flex-shrink-0' gap={3}>
      <Icon className='flex-shrink-0' opacity={0.5} size={22} />
      <Text className='w-24 flex-shrink-0' opacity={0.5}>
        {title}
      </Text>
      {children}
    </Flex>
  );
};
