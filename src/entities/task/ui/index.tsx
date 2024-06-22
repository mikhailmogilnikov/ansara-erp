import { ITask } from '../../../shared/model/task.type';

import { Text } from '@/src/shared/ui/(layout)/text';
import { TasksProjectsListConst } from '@/src/shared/config/tasks-project-list-const';
import { formatTime, getDuration } from '@/src/shared/lib/utils/format-time';
import { TasksUsersListConst } from '@/src/shared/config/tasks-users-list-const';
import { Flex } from '@/src/shared/ui/(layout)/flex';

interface TaskI extends ITask {
  isLarge?: boolean;
  showUsers?: boolean;
}

export const Task = ({
  body,
  startTime,
  endTime,
  projectId,
  isLarge,
  userId,
  showUsers,
}: TaskI) => {
  return (
    <Flex
      className={`w-full text-start py-5 border-b-1 border-divider cursor-pointer justify-between ${isLarge && 'gap-5'}`}
    >
      <Flex
        className={isLarge ? 'justify-between' : ''}
        col={!isLarge}
        gap={0}
        width={isLarge ? '60%' : '100%'}
      >
        <Text className='leading-3' size={16}>
          {body}
        </Text>
        <Text
          className={isLarge ? 'w-full max-w-[200px]' : ''}
          opacity={isLarge ? 1 : 0.5}
          size={16}
        >
          {showUsers
            ? TasksUsersListConst.find((user) => userId === user.id)?.name
            : TasksProjectsListConst.find((project) => projectId === project.id)?.name}
        </Text>
      </Flex>
      {isLarge && (
        <Text className={isLarge ? 'w-full max-w-[150px]' : ''} size={16}>
          {TasksUsersListConst.find((user) => userId === user.id)?.name}
        </Text>
      )}
      <Flex
        className={`justify-end
          ${isLarge ? 'items-center max-w-[180px] gap-6' : 'ml-5'}
        `}
        col={!isLarge}
        width={isLarge ? '100%' : 'auto'}
      >
        {startTime && endTime && (
          <>
            <Text className='text-end text-primary'>{formatTime(endTime - startTime)}</Text>
            <Text className='text-nowrap text-end' opacity={0.5} size={16}>
              {getDuration(startTime, endTime)}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};
