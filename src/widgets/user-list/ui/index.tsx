import { users } from '../config/users';

import { User } from '@/src/entities/user';
import { Flex } from '@/src/shared/ui/(layout)/flex';

export const UserList = () => {
  return (
    <div className='w-full px-4 py-3'>
      <Flex col className='mt-3' gap={0}>
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </Flex>
    </div>
  );
};
