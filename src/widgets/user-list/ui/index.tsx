import { User } from '@/src/entities/user';
import { users } from '../config/users';
import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';

export const UserList = () => {
  return (
    <div className='w-full px-4 py-3'>
      <Flex className='mt-3' col gap={0}>
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </Flex>
    </div>
  );
};
