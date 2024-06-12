import { Text } from '@/src/shared/ui/(layout)/text';
import { CreationBar } from '@/src/widgets/creation-bar';
import { users } from '@/src/widgets/user-list/config/users';

export const UserTasksPage = ({ id }: { id: number }) => {
  const user = users.find((user) => user.id == id);

  return (
    <>
      <div className='py-3 px-4'>
        <Text className='font-nolmal' size={20}>
          {user?.name}
        </Text>
      </div>
      <CreationBar />
    </>
  );
};
