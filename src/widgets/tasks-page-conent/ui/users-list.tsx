import { User, users } from '@/src/entities/user';

export const UsersList = () => {
  return (
    <>
      {users.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </>
  );
};
