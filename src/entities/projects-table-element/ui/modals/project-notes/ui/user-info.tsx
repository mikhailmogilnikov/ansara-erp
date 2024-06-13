import { useImmer } from 'use-immer';

import { NotesUserVariants } from '../config/notes-user';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const NotesProjectInfo = () => {
  const userInfo = {
    name: 'das',
    phone: 'dsdaas',
    accounterId: 1,
    login: 'dassda',
    password: 'dasdsa',
    stages: 2,
  };

  const [user, setUser] = useImmer(userInfo);

  return (
    <section className='w-full grid grid-cols-2 gap-2'>
      {NotesUserVariants.map(({ id, title }) => (
        <Flex key={id}>
          <Text opacity={0.5}>{title}</Text>
        </Flex>
      ))}
    </section>
  );
};
