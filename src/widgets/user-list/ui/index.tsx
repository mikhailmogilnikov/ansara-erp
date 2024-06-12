import { User, users } from '@/src/entities/user';

export const UserList = () => {
  return (
    <div className='w-full p-5'>
      {/* <Flex col wrap className='mt-3' gap={3}>
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </Flex> */}
      <div className='grid grid-cols-3 gap-5 w-full'>
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
