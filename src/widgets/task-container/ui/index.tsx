
import { formatDate } from '@/src/shared/lib/utils/format-date';
import { formatTime } from '@/src/shared/lib/utils/format-time';
import { getDateWithoutTime } from '@/src/shared/lib/utils/get-date-without-time';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const TaskContainer = ({
  date,
  time,
  children,
}: {
  date: number;
  time: number;
  children: React.ReactNode;
}) => {
  const givenDate = new Date(date);
  const givenDateWithoutTime = getDateWithoutTime(givenDate);
  const currentDate = new Date();
  const currentDateWithoutTime = getDateWithoutTime(currentDate);
  const isToday = givenDateWithoutTime.toString() === currentDateWithoutTime.toString();

  return (
    <>
      <Flex className='mt-20 justify-between pb-4 border-b-1 border-divider'>
        <div>
          <Text size={20}>{isToday ? 'Сегодня' : formatDate(givenDate)}</Text>
        </div>
        <Text className='text-primary' size={20}>
          {formatTime(time)}
        </Text>
      </Flex>
      <div>{children}</div>
    </>
  );
};
