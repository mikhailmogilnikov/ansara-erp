import { Updater } from 'use-immer';

import { TProjectModulesVisibility } from '../../model/modules-visibility.type';
import { EProjectModulesVisibility } from '../../model/modules.enum';
import { ProjectModulesNames } from '../../config/modules-names';

import { Button } from '@/src/shared/ui/(buttons)/button';

type Props = {
  modulesVisibility: TProjectModulesVisibility;
  setModulesVisibility: Updater<TProjectModulesVisibility>;
};

export const ProjectStatusMainControls = ({ modulesVisibility, setModulesVisibility }: Props) => {
  const handlePress = (e: any) => {
    const { id } = e.target;

    setModulesVisibility((draft) => {
      draft[id as 'stages'] = !draft[id as 'stages'];
    });
  };

  return (
    <div className='grid grid-cols-3 gap-2'>
      {Object.values(EProjectModulesVisibility).map((module) => {
        return (
          <Button
            key={module}
            color={modulesVisibility[module] ? 'secondary' : 'default'}
            id={module}
            onPress={handlePress}
          >
            {ProjectModulesNames[module]}
          </Button>
        );
      })}
    </div>
  );
};
