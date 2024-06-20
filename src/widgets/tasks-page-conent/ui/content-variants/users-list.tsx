import { User } from '@/src/entities/user/user-card';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';

export const UsersList = () => {
  return (
    <div className='grid grid-cols-3 gap-5 w-full'>
      {TasksUsersListConst.map((user) => (
        <User {...user} key={user.id} />
      ))}
    </div>
  );
};
