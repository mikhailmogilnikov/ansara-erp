export interface ITask {
  id: number;
  startTime: null | number;
  endTime: null | number;
  body: string;
  projectId: number;
  userId: number;
}
export interface IEmptyTask {
  startTime: null | number;
  endTime: null | number;
  body: string;
  projectId: number | null;
  userId: number | null;
}
