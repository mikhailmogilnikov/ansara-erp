'use client';

import { IUser } from '../model/user.type';
import { useRouter } from 'next/navigation';

export const User = ({ name, id }: IUser) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/tasks/${id}`);
  };
  return (
    <button className='text-[100px] font-semibold text-left' onClick={handleNavigate}>
      {name}
    </button>
  );
};
