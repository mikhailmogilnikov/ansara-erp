import { TProjectModulesVisibility } from './modules-visibility.type';
import { TStagesStates } from './stage.type';

import { TLink } from '@/src/shared/model/index.type';

export type TProjectTimegates = {
  all: number;
  remain: number;
};

export type TProjectPhase = {
  id: Key;
  name: string;
  date: string;
  description: string;
  urlImages: string[];
  fileImages: File[];
  links: TLink[];
};

export interface IUserProfile {
  modulesVisibility: TProjectModulesVisibility;
  ratesUrl: string[] | null | File[];
  stages: TStagesStates;
  status: string;
  editgate: {
    start: string;
    end: string;
  };
  timegatesHours: TProjectTimegates;
  phases: TProjectPhase[];
}
