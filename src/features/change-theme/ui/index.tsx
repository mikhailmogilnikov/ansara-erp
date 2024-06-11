import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { useTheme } from 'next-themes';

import { ThemeIcons } from '../config/theme-icons';
import { ThemeNames } from '../config/theme-names';

import { Text } from '@/src/shared/ui/(layout)/text';

export const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();

  const ThemeIcon = ThemeIcons[theme as 'light' | 'dark' | 'system'];

  return (
    <Dropdown backdrop='blur' placement='bottom'>
      <DropdownTrigger>
        <button
          className='px-2 h-12 rounded-2xl flex gap-3 items-center active:scale-95 transition-all outline-none'
          type='button'
        >
          <ThemeIcon className='w-auto h-1/2 text-white' />
          <Text className='text-white font-medium'>Оформление</Text>
        </button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label='Theme selector'
        closeOnSelect={false}
        selectedKeys={new Set([theme as 'light' | 'dark' | 'system'])}
        selectionMode='single'
      >
        <DropdownItem key='light' onPress={() => setTheme('light')}>
          {ThemeNames.light}
        </DropdownItem>
        <DropdownItem key='dark' onPress={() => setTheme('dark')}>
          {ThemeNames.dark}
        </DropdownItem>
        <DropdownItem key='system' onPress={() => setTheme('system')}>
          {ThemeNames.system}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
