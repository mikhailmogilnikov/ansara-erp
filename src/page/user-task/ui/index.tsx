import { Text } from '@/src/shared/ui/(layout)/text';
import { CreationBar } from '@/src/widgets/creation-bar';
import { users } from '@/src/widgets/user-list/config/users';

export const UserTasksPage = ({ id }: { id: number }) => {
  const user = users.find((user) => user.id == id);
  return (
    <div className='py-3 px-4 mt-8 w-full flex justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Text size={24} className='mb-4'>
          {user?.name}
        </Text>
        <CreationBar />
      </div>
    </div>
  );
};
