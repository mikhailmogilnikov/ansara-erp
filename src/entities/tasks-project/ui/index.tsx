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
      <button className='w-full items-center justify-between flex gap-10' onClick={handleNavigate}>
        <Text className='font-semibold ' size={20}>
          {name}
        </Text>
        <Text className='font-medium' opacity={0.5}>
          Количество исполнителей - {usersIds.length}
        </Text>
      </button>
      {editButton}
      <ButtonWithConfirm
        isIconOnly
        actionFn={deleteProject}
        className='text-danger'
        confirmColor='danger'
        confirmTitle='Удалить'
        description='Вы уверены, что хотите удалить проект? Это действие необратимо.'
        icon={<PiTrashBold size={18} />}
        size='sm'
      />
    </Flex>
  );
};
