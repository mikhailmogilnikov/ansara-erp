import { BackButton } from '@/src/features/back-button';
import { CreationBar } from '@/src/features/tasks-create-task';
import { TasksListConst } from '@/src/shared/config/tasks-list-const';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { TasksList } from '@/src/widgets/tasks-list';

interface Props {
  id: number;
}

export const ProjectTasksPage = ({ id }: Props) => {
  const project = TasksProjectsListConst.find((project) => project.id == id);
  const tasks = TasksListConst.filter((task) => task.projectId == id);

  return (
    <Flex className='py-3 px-4 mt-8 justify-center items-center'>
      <div className='w-full max-w-[500px]'>
        <Flex className='mb-3 items-center' gap={3}>
          <BackButton />
          <Text className='font-semibold' size={30} tag='h2'>
            {project?.name}
          </Text>
        </Flex>
        <CreationBar />
        <TasksList showUser tasks={tasks} />
      </div>
    </Flex>
  );
};
