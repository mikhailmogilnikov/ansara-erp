import { Progress } from '@nextui-org/progress';
import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { PiXBold } from 'react-icons/pi';

import { TStagesStatuses } from '../../../model/stage.type';
import { useProjectStatus } from '../../../model/status-store';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';

type Props = {
  value: string;
  status?: TStagesStatuses;
} & Pick<InputHTMLAttributes<HTMLInputElement>, 'onClick'>;

export const ProgressThumb = ({ value, status = 'wait', onClick }: Props) => {
  const { data, setStages: setStage } = useProjectStatus();
  const { stages } = data.stages;

  const states = {
    wait: 0,
    complete: 100,
    pending25: 25,
    pending50: 50,
    pending75: 75,
  } as const;

  const isPending = status === 'pending25' || status === 'pending50' || status === 'pending75';

  const textClassnames = clsx('transition-colors text-center', {
    'text-success': status === 'complete',
    'text-primary': isPending,
    'text-foreground': status === 'wait',
  });

  const handleDelete = () => {
    const index = stages.indexOf(value);
    const copyStages = [...stages];

    copyStages.splice(index, 1);

    setStage('stages', copyStages);
  };

  return (
    <Flex center col gap={3}>
      <Progress
        aria-label={value}
        className={isPending ? 'animate-pulse' : ''}
        color={isPending ? 'primary' : 'success'}
        size='lg'
        value={states[status]}
        onClick={onClick}
      />
      <Flex center className='justify-center' gap={2}>
        <Text className={textClassnames} size={15}>
          {value}
        </Text>

        <ButtonWithConfirm
          isIconOnly
          actionFn={handleDelete}
          className='bg-transparent min-w-0 min-h-0 w-4 h-4'
          confirmColor='danger'
          description={`Вы уверены что хотите удалить этап "${value}"? Это действие необратимо.`}
          icon={<PiXBold opacity={0.3} size={16} />}
          size='sm'
        />
      </Flex>
    </Flex>
  );
};
