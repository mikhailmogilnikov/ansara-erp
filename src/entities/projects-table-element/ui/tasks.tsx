import { ProjectTasksEditorModal } from './modals/tasks-editor';

import { Text } from '@/src/shared/ui/(layout)/text';
import { useModal } from '@/src/shared/ui/modal';

export const TableTasks = () => {
  const { setModal } = useModal();

  const handleClick = () => {
    setModal(<ProjectTasksEditorModal />);
  };

  return (
    <button className='h-fit text-start w-full min-w-40' type='button' onClick={handleClick}>
      <Text className='w-full line-clamp-2 font-medium ' size={15}>
        Пример задачи. Тест. Этот текст здесь должен отображаться максимум в 2 строчки
      </Text>
    </button>
  );
};
