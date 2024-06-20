import { PiListChecksBold, PiPhoneBold, PiUserCircleBold, PiUserGearBold } from 'react-icons/pi';
import { TbPassword, TbUserScan } from 'react-icons/tb';

import { NoteVariant } from '../model/note-variant.type';

export const NotesUserVariants: NoteVariant[] = [
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
      { id: 'arina', title: 'Арина' },
      { id: 'alexey', title: 'Алексей' },
    ],
  },
  {
    id: 'stages',
    icon: PiListChecksBold,
    title: 'Этапы',
    type: 'select',
    variants: [
      { id: 'arina', title: '1' },
      { id: 'alexey', title: '2' },
    ],
  },
];
