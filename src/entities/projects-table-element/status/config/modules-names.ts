import { EProjectModulesVisibility } from '../model/modules.enum';

export const ProjectModulesNames: Record<EProjectModulesVisibility, string> = {
  [EProjectModulesVisibility.PHASES]: 'Этапы',
  [EProjectModulesVisibility.STAGES]: 'Стадии',
  [EProjectModulesVisibility.STATUS]: 'Статус',
  [EProjectModulesVisibility.TIMEGATES]: 'Временные рамки',
  [EProjectModulesVisibility.EDITGATES]: 'Окно правок',
};
