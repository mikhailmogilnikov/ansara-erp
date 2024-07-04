import { Input } from '@nextui-org/input';
import { PiPlusCircleBold, PiTrashBold } from 'react-icons/pi';

import { TProjectPhase } from '../../../model/user-profile.type';
import { TProjectStatusStore, useProjectStatusStore } from '../../../model/status-store';
import { createLink } from '../../../lib/create-phase';

import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { InputLabel } from '@/src/shared/ui/(inputs)/input-label';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Button } from '@/src/shared/ui/(buttons)/button';
import { Fader } from '@/src/shared/ui/(layout)/fader';

type Props = {
  phaseId: Key;
  links: TProjectPhase['links'];
};

export const ProjectsStatusPhasesLinks = ({ phaseId, links }: Props) => {
  const editPhase = useProjectStatusStore((state: TProjectStatusStore) => state.editPhase);
  const editLink = useProjectStatusStore((state: TProjectStatusStore) => state.editLink);
  const deleteLink = useProjectStatusStore((state: TProjectStatusStore) => state.deleteLink);

  const biggestId = links.reduce((acc, { id }) => (acc < (id as number) ? (id as number) : acc), 0);

  return (
    <InputLabel title='Ссылки'>
      <Flex col>
        {links.map(({ url, id, name }) => (
          <Fader key={id}>
            <Flex>
              <Input
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder='URL-адрес'
                size='lg'
                value={url}
                onChange={(e) => editLink(phaseId, id, 'url', e.target.value)}
              />
              <Input
                classNames={{ inputWrapper: '!bg-default' }}
                placeholder='Название ссылки'
                size='lg'
                value={name}
                onChange={(e) => editLink(phaseId, id, 'name', e.target.value)}
              />
              <ButtonWithConfirm
                isIconOnly
                actionFn={() => deleteLink(phaseId, id)}
                className='text-danger'
                confirmColor='danger'
                confirmTitle='Удалить'
                description={`Вы действительно хотите удалить ссылку "${name}"? Это действие нельзя отменить.`}
                icon={<PiTrashBold size={20} />}
              />
            </Flex>
          </Fader>
        ))}

        <Fader>
          <Button className='w-full' onPress={() => editPhase(phaseId, 'links', [...links, createLink(biggestId)])}>
            <PiPlusCircleBold size={20} />
            Добавить ссылку
          </Button>
        </Fader>
      </Flex>
    </InputLabel>
  );
};
