import { ChangeEmployees } from '../ui/change-employees';
import { ChangeTheme } from '../ui/change-theme';
import { EditProfileButton } from '../ui/edit-profile';

export const features = [
  { element: (props: { closeModal: VoidFunction }) => <ChangeEmployees {...props} /> },
  { element: () => <ChangeTheme /> },
  { element: (props: { closeModal: VoidFunction }) => <EditProfileButton {...props} /> },
];
