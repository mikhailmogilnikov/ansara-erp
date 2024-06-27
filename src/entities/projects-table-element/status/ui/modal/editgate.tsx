import { Progress } from '@nextui-org/progress';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const ProjectsStatusEditGate = () => {
  return (
    <Flex col>
      <Text weight={600}>
        Правки до 17 ноября. <span className='opacity-50'>Осталось 6 дней.</span>
      </Text>
      <Progress value={30} />
      <Text opacity={0.5} size={14}>
        Подсказка: Вы можете изменить период правок в разделе &quot;Временные рамки&quot; .
      </Text>
    </Flex>
  );
};
