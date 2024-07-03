import { DateValue } from '@internationalized/date';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const initialState = {
  name: '',
  phone: '',
  login: '',
  password: '',
  stages: '',
  accounters: '',
  payed: 0,
  needPay: 0,
  payDate: new Date(),
  startDate: new Date(),
  endDate: new Date(),
};

export interface ProjectI {
  name: string;
  phone: string;
  login: string;
  password: string;
  stages: string;
  accounters: string;
  payed: number;
  needPay: number;
  payDate: Date | DateValue;
  startDate: Date | DateValue;
  endDate: Date | DateValue;
}

interface AddProjectStateI {
  project: ProjectI;
  setName: (name: string) => void;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  setPhone: (phone: string) => void;
  setStages: (stages: [string]) => void;
  setAccounters: (accounters: [string]) => void;
  setPayed: (sum: number) => void;
  setNeedPay: (sum: number) => void;
  setPayDate: (date: Date | DateValue) => void;
  setStartDate: (date: Date | DateValue) => void;
  setEndDate: (date: Date | DateValue) => void;
  reset: VoidFunction;
}

const useAddProjectStore = create<AddProjectStateI>()(
  devtools(
    immer((set) => ({
      project: initialState,
      setName: (name: string) =>
        set((state) => {
          state.project.name = name;
        }),
      setPhone: (phone: string) =>
        set((state) => {
          state.project.phone = phone;
        }),
      setLogin: (login: string) =>
        set((state) => {
          state.project.login = login;
        }),
      setPassword: (password: string) =>
        set((state) => {
          state.project.password = password;
        }),
      setStages: (stage: [string]) =>
        set((state) => {
          state.project.stages = [...stage][0];
        }),
      setAccounters: (accounters: [string]) =>
        set((state) => {
          state.project.accounters = [...accounters][0];
        }),
      setPayed: (sum: number) =>
        set((state) => {
          state.project.payed = sum;
        }),
      setNeedPay: (sum: number) =>
        set((state) => {
          state.project.needPay = sum;
        }),
      setPayDate: (date: Date | DateValue) =>
        set((state) => {
          state.project.payDate = date;
        }),
      setStartDate: (date: Date | DateValue) =>
        set((state) => {
          state.project.startDate = date;
        }),
      setEndDate: (date: Date | DateValue) =>
        set((state) => {
          state.project.endDate = date;
        }),
      reset: () =>
        set((state) => {
          state.project = initialState;
        }),
    })),
  ),
);

export const useAddProject = () => useAddProjectStore((state) => state);
