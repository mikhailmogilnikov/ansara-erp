import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { TasksListConst } from '@/src/shared/config/tasks-list-const';
import { TasksList } from '@/src/widgets/tasks-list';
import { BackButton } from '@/src/features/back-button';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { TasksCreateTask } from '@/src/features/tasks-create-task';
import { TasksLoadMore } from '@/src/features/tasks-load-more';

export const UserTasksPage = ({ id }: { id: number }) => {
  const user = TasksUsersListConst.find((user) => user.id == id);
  const tasks = TasksListConst.filter((task) => task.userId == id);

  return (
    <Flex className='py-3 px-4 mt-8 justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Flex className='mb-3 items-center' gap={3}>
          <BackButton />
          <Text className='font-semibold' size={30} tag='h2'>
            {user?.name}
          </Text>
        </Flex>
        <TasksCreateTask />
        <TasksList tasks={tasks} />
        <div className='mt-20'>
          <TasksLoadMore />
        </div>
      </div>
    </Flex>
  );
};
