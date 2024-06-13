import { ProjectTasksPage } from '@/src/page/project-tasks';

export default function UserTasks({ params }: { params: { id: number } }) {
  return <ProjectTasksPage id={Number(params.id)} />;
}
