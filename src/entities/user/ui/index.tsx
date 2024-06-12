'use client';

import { useRouter } from 'next/navigation';

import { IUser } from '../model/user.type';

import { Text } from '@/src/shared/ui/(layout)/text';
import { formatTime } from '@/src/shared/lib/format-time';

export const User = ({ name, id, tasksQuantity, time }: IUser) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/tasks/${id}`);
  };

  return (
    <button
      className='font-semibold text-left p-6 rounded-2xl bg-default hover:bg-default/50 transition-colors shadow-base'
      onClick={handleNavigate}
    >
      <Text className='font-semibold -mt-4' size={40}>
        {name}
      </Text>
      <Text className='font-normal mt-5'>Задач на сегодня: {tasksQuantity}</Text>
      <Text className='font-normal text-primary'>Затрачено времени: {formatTime(time)}</Text>
    </button>
  );
};
