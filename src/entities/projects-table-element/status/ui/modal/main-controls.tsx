import { EProjectModulesVisibility } from '../../model/modules.enum';
import { ProjectModulesNames } from '../../config/modules-names';
import { useProjectStatus } from '../../model/status-store';

import { Button } from '@/src/shared/ui/(buttons)/button';

export const ProjectStatusMainControls = () => {
  const { data, setVisibility } = useProjectStatus();
  const { modulesVisibility } = data;

  const handlePress = (e: any) => {
    const { id } = e.target;

    setVisibility(id);
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
