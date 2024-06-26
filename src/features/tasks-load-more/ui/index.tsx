import { PiDownloadBold } from 'react-icons/pi';

export const TasksLoadMore = () => {
  return (
    <button className='flex gap-3 items-center'>
      <PiDownloadBold opacity={0.5} size={18} />
      Загрузить еще
    </button>
  );
};
