import { User, users } from '@/src/entities/user';

export const UsersList = () => {
  return (
    <div className='w-full p-5'>
      <div className='grid grid-cols-3 gap-5 w-full'>
        {users.map((user) => (
          <User {...user} key={user.id} />
        ))}
      </div>
    </div>
  );
};
