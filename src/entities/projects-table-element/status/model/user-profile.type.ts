import { TProjectModulesVisibility } from './modules-visibility.type';
import { TStagesStates } from './stage.type';

import { TLink } from '@/src/shared/model/index.type';

export type TProjectPhase = {
  id: Key;
  name: string;
  date: string;
  description: string;
  images: string[];
  links: TLink[];
};

export interface IUserProfile {
  modulesVisibility: TProjectModulesVisibility;
  ratesUrl: string | null;
  stages: TStagesStates;
  status: string;
  editgate: {
    start: string;
    end: string;
  };
  timegatesHours: {
    all: number;
    remain: number;
  };
  phases: TProjectPhase[];
}
