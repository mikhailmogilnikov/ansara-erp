import { Tab, Tabs } from '@nextui-org/tabs';

import { Flex } from '../(layout)/flex';

interface Props {
  setTab: (value: Key | null) => void;
  tabs: {
    key: string;
    title: string;
    icon?: React.ReactNode;
  }[];
  tabValue: null | Key;
}

export const UnderlinedTabs = ({ setTab, tabs, tabValue }: Props) => {
  return (
    <Tabs
      aria-label='Tabs variants'
      classNames={{
        tabList: 'gap-6 w-full relative rounded-none p-0 border-b border-divider',
        cursor: 'w-full bg-primary',
        tab: 'max-w-fit px-0 h-12',
      }}
      color='primary'
      variant='underlined'
      onSelectionChange={setTab}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.key}
          title={
            <Flex
              center
              className={`font-medium transition-colors ${tabValue === tab.key && 'text-primary'}`}
              gap={3}
            >
              {tab.icon}
              {tab.title}
            </Flex>
          }
        />
      ))}
    </Tabs>
  );
};
