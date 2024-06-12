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
      className='font-semibold text-left p-5 rounded-2xl bg-white hover:bg-zinc-200 transition-colors'
      onClick={handleNavigate}
    >
      <Text size={40}>{name}</Text>
      <Text className='font-normal mt-5'>Общее количество задач - {tasksQuantity}</Text>
      <Text className='font-normal text-blue-600'>Общее затраченое время - {formatTime(time)}</Text>
    </button>
  );
};
