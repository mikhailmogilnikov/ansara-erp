import { features } from '../config/features';

import { Flex } from '@/src/shared/ui/(layout)/flex';

interface Props {
  closeModal: VoidFunction;
}

export const ProfileFeaturesList = ({ closeModal }: Props) => {
  return (
    <Flex col gap={0}>
      {features.map((feature, index) => (
        <div key={index} className='w-full'>
          {feature.element({ closeModal })}
        </div>
      ))}
    </Flex>
  );
};
