import { PiCalendarCheckBold, PiTrashBold, PiUserGearBold } from 'react-icons/pi';
import { Textarea } from '@nextui-org/input';
import { Divider } from '@nextui-org/divider';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';

export const AccountingStoryList = () => {
  return (
    <Flex col>
      <Flex col className='relative' gap={1}>
        <Flex center className='opacity-50' gap={3}>
          <PiUserGearBold size={20} />
          <Text size={16}>Арина</Text>
        </Flex>
        <Flex center className='opacity-50' gap={3}>
          <PiCalendarCheckBold size={20} />
          <Text size={16}>Чт, 5 апреля 10:00</Text>
        </Flex>
        <Textarea
          className='outline-none mt-2'
          classNames={{
            inputWrapper: '!bg-transparent p-0 shadow-none min-h-0',
            input: 'font-medium',
          }}
          id='description'
          maxRows={10}
          minRows={0}
          placeholder='Введите результат аккаунтинга'
          size='lg'
        />
        <ButtonWithConfirm
          isIconOnly
          actionFn={() => {}}
          className='absolute top-0 right-0 text-danger shadow-base'
          confirmColor='danger'
          description='Вы действительно хотите удалить результат аккаунтинга? Это действие необратимо.'
          icon={<PiTrashBold size={20} />}
          size='md'
        />
      </Flex>

      <Divider />

      <Flex col className='relative' gap={1}>
        <Flex center className='opacity-50' gap={3}>
          <PiUserGearBold size={20} />
          <Text size={16}>Арина</Text>
        </Flex>
        <Flex center className='opacity-50' gap={3}>
          <PiCalendarCheckBold size={20} />
          <Text size={16}>Чт, 4 апреля 10:00</Text>
        </Flex>
        <Textarea
          className='mt-2'
          classNames={{
            inputWrapper: '!bg-transparent p-0 shadow-none min-h-0',
            input: 'font-medium',
          }}
          id='description'
          maxRows={10}
          minRows={1}
          placeholder='Введите результат аккаунтинга'
          size='lg'
        />
        <ButtonWithConfirm
          isIconOnly
          actionFn={() => {}}
          className='absolute top-0 right-0 text-danger shadow-base'
          confirmColor='danger'
          description='Вы действительно хотите удалить результат аккаунтинга? Это действие необратимо.'
          icon={<PiTrashBold size={20} />}
          size='md'
        />
      </Flex>
    </Flex>
  );
};
