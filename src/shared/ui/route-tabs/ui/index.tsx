'use client';

import { Tabs as NativeTabs, Tab } from '@nextui-org/tabs';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useEffect, useState } from 'react';

type Props = {
  items: { id: number; name: string; href: string }[];
};

export const RouteTabs = ({ items }: Props) => {
  const pathname = usePathname() as string;
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState(pathname);

  useEffect(() => {
    items.forEach(({ href }) => {
      router.prefetch(href);
    });
  }, []);

  const handleChange = (value: Key) => {
    setSelectedKey(value as string);
    router.replace(value as string);
  };

  return (
    <NativeTabs
      aria-label='Навигационные табы'
      classNames={{
        base: '-ml-4 w-[calc(100%+32px)] justify-center h-6',
        tabList: 'px-4 rounded-none',
        cursor: 'rounded-t-[14px] h-1 bg-white text-white',
        tabContent: 'font-medium group-data-[selected=true]:text-white mb-5',
      }}
      color='primary'
      radius='lg'
      selectedKey={selectedKey}
      size='lg'
      variant='underlined'
      onSelectionChange={handleChange}
    >
      {items.map(({ name, href }) => (
        <Tab key={href} title={name} />
      ))}
    </NativeTabs>
  );
};
