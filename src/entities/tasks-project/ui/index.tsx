import { useRouter } from 'next/navigation';
import { PiTrashBold } from 'react-icons/pi';

import { ITasksProject } from '../model/tasks-project.type';

import { Text } from '@/src/shared/ui/(layout)/text';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';

interface Props extends ITasksProject {
  editButton: React.ReactNode;
}

export const TasksProject = ({ id, name, editButton, usersIds }: Props) => {
  const router = useRouter();

  const deleteProject = () => {};

  const handleNavigate = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <Flex className=' border-b-1 border-divider py-4'>
      <button className='w-full items-center flex gap-10' onClick={handleNavigate}>
        <Text className='font-semibold ' size={20}>
          {name}
        </Text>
        <Text className='font-medium' opacity={0.5}>
          Количество пользователей {usersIds.length}
        </Text>
      </button>
      {editButton}
      <ButtonWithConfirm
        actionFn={deleteProject}
        description='Вы уверены, что хотите удалить проект'
        icon={<PiTrashBold />}
      />
    </Flex>
  );
};
