import { PiListChecksBold, PiPhoneBold, PiUserCircleBold, PiUserGearBold } from 'react-icons/pi';
import { TbPassword, TbUserScan } from 'react-icons/tb';

export const NotesUserVariants = [
  {
    id: 'name',
    icon: PiUserCircleBold,
    title: 'Заказчик',
    type: 'text',
  },
  {
    id: 'login',
    icon: TbUserScan,
    title: 'Логин ЛК',
    type: 'text',
  },
  {
    id: 'phone',
    icon: PiPhoneBold,
    title: 'Телефон',
    type: 'phone',
  },
  {
    id: 'password',
    icon: TbPassword,
    title: 'Пароль',
    type: 'text',
  },
  {
    id: 'accounterId',
    icon: PiUserGearBold,
    title: 'Аккаунтер',
    type: 'select',
    variants: [
      { id: 'arina', name: 'Арина' },
      { id: 'alexey', name: 'Алексей' },
    ],
  },
  {
    id: 'stages',
    icon: PiListChecksBold,
    title: 'Этапы',
    type: 'select',
    variants: [
      { id: 'arina', name: '1' },
      { id: 'alexey', name: '2' },
    ],
  },
] as const;
