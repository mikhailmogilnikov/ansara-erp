import { EditTaskForm } from './edit-task-form';

import { ITask } from '@/src/shared/model/task.type';
import { useModal } from '@/src/shared/ui/modal';

interface Props {
  children: React.ReactNode;
  task: ITask;
  isDragging?: boolean;
}

export const EditTask = ({ children, task, isDragging }: Props) => {
  const { setModal } = useModal();

  const handleEdit = () => {
    if (!isDragging) {
      setModal(<EditTaskForm task={task} />);
    }
  };

  return (
    <button className='w-full' onClick={handleEdit}>
      {children}
    </button>
  );
};
