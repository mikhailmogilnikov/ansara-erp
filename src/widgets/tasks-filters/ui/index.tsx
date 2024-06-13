'use client';

import { Divider } from '@nextui-org/divider';
import { Button } from '@nextui-org/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { Flex } from '@/src/shared/ui/(layout)/flex';

export const TasksFilters = ({ addProject }: { addProject: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filter = searchParams.get('filter');

  useEffect(() => {
    if (!filter) {
      router.push(pathname + '?' + createQueryString('filter', 'projects'));
    }
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <Flex className='py-4 items-center px-4 overflow-x-scroll scrollbar-hide' tag='aside'>
      {addProject}

      <Divider className='w-[2px] h-6 rounded-sm' orientation='vertical' />

      <Flex className='!w-fit' gap={2}>
        <Button
          className='text-[14px]'
          color={filter === 'projects' ? 'primary' : 'default'}
          radius='full'
          size='sm'
          onPress={() => {
            router.push(pathname + '?' + createQueryString('filter', 'projects'));
          }}
        >
          Проекты
        </Button>
        <Button
          className='text-[14px]'
          color={filter === 'users' ? 'primary' : 'default'}
          radius='full'
          size='sm'
          onPress={() => {
            router.push(pathname + '?' + createQueryString('filter', 'users'));
          }}
        >
          Пользователи
        </Button>
      </Flex>
    </Flex>
  );
};
