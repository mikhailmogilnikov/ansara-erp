import { UserTasksPage } from '@/src/page/user-tasks';

export default function UserTasks({ params }: { params: { id: number } }) {
  return <UserTasksPage id={params.id} />;
}
