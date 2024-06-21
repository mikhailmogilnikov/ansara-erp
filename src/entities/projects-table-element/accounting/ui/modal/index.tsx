import { AccountingHeader } from './header';
import { AccountingStoryList } from './story-list';

import { ModalWrapper } from '@/src/shared/ui/modal';

export const ProjectAccountingModal = () => {
  return (
    <ModalWrapper title='Аккаунтинг'>
      <AccountingHeader />
      <AccountingStoryList />
    </ModalWrapper>
  );
};
