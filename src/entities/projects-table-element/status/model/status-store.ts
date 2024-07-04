import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { InitialStatusData } from '../config/test-lk';

import { IUserProfile, TProjectPhase } from './user-profile.type';
import { TStagesStates } from './stage.type';

import { TLink } from '@/src/shared/model/index.type';

export type TProjectStatusStore = {
  data: IUserProfile;
  setRates: (rate: string[] | File[] | null) => void;
  setVisibility: (key: keyof IUserProfile['modulesVisibility']) => void;
  setStages: <K extends keyof TStagesStates>(key: K, value: TStagesStates[K]) => void;
  setStatus: (status: string) => void;
  setTimegates: (key: keyof IUserProfile['timegatesHours'], value: number) => void;
  setPhases: (phases: TProjectPhase[]) => void;
  editPhase: <K extends keyof TProjectPhase>(id: Key, key: K, value: TProjectPhase[K]) => void;
  deletePhase: (id: Key) => void;
  editLink: <K extends keyof TLink>(phaseId: Key, id: Key, key: K, value: TLink[K]) => void;
  deleteLink: (phaseId: Key, id: Key) => void;
  reset: () => void;
};

export const useProjectStatusStore = create<TProjectStatusStore>()(
  devtools(
    immer((set) => ({
      data: InitialStatusData,

      setRates: (rate: string[] | File[] | null) =>
        set((state) => {
          state.data.ratesUrl = rate;
        }),

      setVisibility: (key: keyof IUserProfile['modulesVisibility']) =>
        set((state) => {
          state.data.modulesVisibility[key] = !state.data.modulesVisibility[key];
        }),

      setStages: <K extends keyof TStagesStates>(key: K, value: TStagesStates[K]) =>
        set((state) => {
          state.data.stages[key] = value;
        }),

      setStatus: (status: string) =>
        set((state) => {
          state.data.status = status;
        }),

      setTimegates: (key: keyof IUserProfile['timegatesHours'], value: number) =>
        set((state) => {
          state.data.timegatesHours[key] = value;
        }),

      setPhases: (phases: TProjectPhase[]) =>
        set((state) => {
          state.data.phases = phases;
        }),

      editPhase: <K extends keyof TProjectPhase>(id: Key, key: K, value: TProjectPhase[K]) =>
        set((state) => {
          const currentPhaseIndex = state.data.phases.findIndex((item) => item.id === id);

          state.data.phases[currentPhaseIndex][key] = value;
        }),

      deletePhase: (id: Key) =>
        set((state) => {
          const currentPhaseIndex = state.data.phases.findIndex((item) => item.id === id);

          state.data.phases.splice(currentPhaseIndex, 1);
        }),

      editLink: <K extends keyof TLink>(phaseId: Key, id: Key, key: K, value: TLink[K]) =>
        set((state) => {
          const currentPhaseIndex = state.data.phases.findIndex((item) => item.id === phaseId);
          const currentLinkIndex = state.data.phases[currentPhaseIndex].links.findIndex(
            (link) => link.id === id,
          );

          state.data.phases[currentPhaseIndex].links[currentLinkIndex][key] = value;
        }),

      deleteLink: (phaseId: Key, id: Key) =>
        set((state) => {
          const currentPhaseIndex = state.data.phases.findIndex((item) => item.id === phaseId);
          const currentLinkIndex = state.data.phases[currentPhaseIndex].links.findIndex(
            (link) => link.id === id,
          );

          state.data.phases[currentPhaseIndex].links.splice(currentLinkIndex, 1);
        }),

      reset: () =>
        set((state) => {
          state.data = InitialStatusData;
        }),
    })),
  ),
);

export const useProjectStatus = () => useProjectStatusStore((state) => state);
