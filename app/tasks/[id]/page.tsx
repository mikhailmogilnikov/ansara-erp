import { UserTasksPage } from '@/src/page/user-task';

export default function UserTasks({ params }: { params: { id: number } }) {
  return <UserTasksPage id={params.id} />;
}
