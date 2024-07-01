import { PiUserBold } from 'react-icons/pi';

import { EditEmployeesForm } from './edit-employees-form';

import { useModal } from '@/src/shared/ui/modal';
import { Text } from '@/src/shared/ui/(layout)/text';

interface Props {
  closeModal: VoidFunction;
}

export const ChangeEmployees = ({ closeModal }: Props) => {
  const { setModal } = useModal();
  const handleChangeEmployees = () => {
    closeModal();
    setModal(<EditEmployeesForm />);
  };

  return (
    <button
      className='px-2 h-12 rounded-2xl flex gap-3 items-center active:scale-95 transition-all outline-none'
      onClick={handleChangeEmployees}
    >
      <PiUserBold className='w-auto h-1/2 text-white' />
      <Text className='text-white font-medium'>Сотрудники</Text>
    </button>
  );
};
