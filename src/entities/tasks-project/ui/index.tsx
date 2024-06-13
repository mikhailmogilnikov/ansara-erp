import { useRouter } from 'next/navigation';

import { ITasksProject } from '../model/tasks-project.type';

import { Text } from '@/src/shared/ui/(layout)/text';

export const TasksProject = ({ id, name, tasks }: ITasksProject) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <button
      className='font-semibold text-left p-6 rounded-2xl bg-default hover:bg-default/50 transition-colors shadow-base'
      onClick={handleNavigate}
    >
      <Text className='font-semibold -mt-3' size={40}>
        {name}
      </Text>
      <Text className='font-medium mt-5'>Количество пользователей {tasks.length}</Text>
    </button>
  );
};
