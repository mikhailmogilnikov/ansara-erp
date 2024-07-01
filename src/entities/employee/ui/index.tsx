import { useEffect, useState } from 'react';
import { PiTrashBold } from 'react-icons/pi';

import { IEmployee } from '../model/employee.type';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ButtonWithConfirm } from '@/src/shared/ui/(buttons)/button-with-confirm';
import { PasswordInput } from '@/src/shared/ui/(inputs)/password-input';

interface Props extends IEmployee {
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
  employees: IEmployee[];
}

export const Employee = ({ name, login, password, order, setEmployees, employees }: Props) => {
  const [newName, setNewName] = useState(name);
  const [newLogin, setNewLogin] = useState(login);
  const [newPassword, setNewPassword] = useState(password);

  useEffect(() => {
    const newEmployees = [...employees];

    newEmployees[order] = { name: newName, login: newLogin, password: newPassword, order };
    setEmployees(newEmployees);
  }, [newName, newLogin, newPassword]);

  const handleDelete = () => {
    setEmployees((prev) => prev.filter((employee) => employee.order !== order));
  };

  return (
    <div className='flex items-center w-full py-4 border-b-1 border-divider relative'>
      <Flex className='grow'>
        <input
          className='bg-transparent outline-none'
          placeholder='Имя'
          type='text'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </Flex>
      <Flex className='grow'>
        <input
          className='bg-transparent outline-none'
          placeholder='Логин'
          type='text'
          value={newLogin}
          onChange={(e) => setNewLogin(e.target.value)}
        />
      </Flex>
      <Flex className='grow'>
        <PasswordInput
          className=' outline-none mr-10'
          classNames={{ inputWrapper: 'bg-transparent shadow-none' }}
          placeholder='Пароль'
          size='sm'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Flex>
      <ButtonWithConfirm
        isIconOnly
        actionFn={handleDelete}
        className='text-danger absolute right-0'
        confirmColor='danger'
        confirmTitle='Удалить'
        description='Вы уверены, что хотите удалить сотрудника? Это действие необратимо.'
        icon={<PiTrashBold size={18} />}
        size='sm'
      />
    </div>
  );
};
