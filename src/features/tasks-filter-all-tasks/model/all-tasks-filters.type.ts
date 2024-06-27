export interface AllTasksFiltersI {
  projectId: number | null;
  users: string[];
  dateDuration: DateDurationI | null;
}

export type DateDurationI = {
  start: string;
  end: string;
};
