import { Progress } from '@nextui-org/progress';

import { Flex } from '../../(layout)/flex';
import { Text } from '../../(layout)/text';

type Props = {
  title: string;
  progress?: number;
};

export const ProgressThumb = ({ title, progress = 0 }: Props) => {
  return (
    <Flex center col gap={3}>
      <Progress size='lg' value={progress} />
      <Text size={15} weight={600}>
        {title}
      </Text>
    </Flex>
  );
};
