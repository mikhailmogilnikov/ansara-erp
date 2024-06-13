export interface INotification {
  id: number;
  type?: 'danger' | 'default' | 'warning' | 'success';
  text: string;
  duration?: number | null;
}
