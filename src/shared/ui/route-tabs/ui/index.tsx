'use client';

import { Tabs as NativeTabs, Tab } from '@nextui-org/tabs';
import { usePathname, useRouter } from 'next/navigation';
import { Key, useEffect } from 'react';

type Props = {
  items: { id: number; name: string; href: string }[];
};

export const NavigationTabs = ({ items }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    items.forEach(({ href }) => {
      router.prefetch(href);
    });
  }, []);

  const pathWithoutLocation = pathname.slice(3);
  const truePath = pathWithoutLocation === '' ? '/' : pathWithoutLocation;

  const handleChange = (value: Key) => {
    router.replace(value as string);
  };

  return (
    <NativeTabs
      aria-label='Tabs'
      classNames={{
        base: '-ml-4 w-[calc(100%+32px)]',
        tabList: 'px-4 rounded-none',
        cursor: 'rounded-[14px]',
        tabContent: 'font-medium',
      }}
      color='primary'
      radius='lg'
      selectedKey={truePath}
      size='lg'
      variant='light'
      onSelectionChange={handleChange}
    >
      {items.map(({ name, href }) => (
        <Tab key={href} title={name} />
      ))}
    </NativeTabs>
  );
};
