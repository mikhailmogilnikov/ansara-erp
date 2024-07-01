import { ChangeEmployees } from '../ui/change-employees';
import { ChangeTheme } from '../ui/change-theme';

export const features = [
  { element: (props: { closeModal: VoidFunction }) => <ChangeEmployees {...props} /> },
  { element: () => <ChangeTheme /> },
];
