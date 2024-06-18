import { PiPlusCircle } from 'react-icons/pi';

import { useModal } from '@/src/shared/ui/modal';

export const AddFinishedTask = ({ modalContent }: { modalContent: React.ReactNode }) => {
  const { setModal } = useModal();
  const handleAdd = () => {
    setModal(modalContent);
  };

  return (
    <button onClick={handleAdd}>
      <PiPlusCircle opacity={50} size={24} />
    </button>
  );
};
