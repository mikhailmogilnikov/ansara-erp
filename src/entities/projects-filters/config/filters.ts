export type Filter = { id: string; name: string };

export const TaskStateFilters: Filter[] = [
  {
    id: 'active',
    name: 'Активные',
  },
  {
    id: 'archived',
    name: 'Завершённые',
  },
];
