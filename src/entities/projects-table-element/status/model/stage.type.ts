export type TStagesStatuses = 'wait' | 'complete' | 'pending25' | 'pending50' | 'pending75';

export type TStagesStates = {
  stages: string[];
  activeStage: string;
  status: TStagesStatuses;
};
