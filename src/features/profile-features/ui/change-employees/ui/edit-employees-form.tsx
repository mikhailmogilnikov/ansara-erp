'use client';

import { useState } from 'react';
import { PiFloppyDiskBold } from 'react-icons/pi';

import { EmployeesData } from '../config/table-data';
import { validateEmployees } from '../lib/validate-employees';

import { EmployeesTable } from './employees-table';
import { TableContainer } from './table-container';

import { Button } from '@/src/shared/ui/(buttons)/button';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { ModalWrapper } from '@/src/shared/ui/modal';
import { IEmployee } from '@/src/entities/employee';
import { useNotification } from '@/src/shared/ui/notification/model/notification-store';

export const EditEmployeesForm = () => {
  const [accEmployees, setAccEmployees] = useState<IEmployee[]>(EmployeesData);
  const [tasksEmployees, setTasksEmployees] = useState<IEmployee[]>(EmployeesData);
  const { addNotification } = useNotification();

  const handleSave = () => {
    validateEmployees(accEmployees).then((error) => {
      if (error) {
        addNotification({ text: error, type: 'danger' });
      } else {
        validateEmployees(tasksEmployees).then((error) => {
          if (error) {
            addNotification({ text: error, type: 'danger' });
          } else {
            addNotification({ text: 'Изменения успешно сохранены', type: 'success' });
          }
        });
      }
    });
  };

  return (
    <ModalWrapper
      actionButtons={
        <Button
          fullWidth
          className='-mt-10'
          color='success'
          variant={'shadow'}
          onPress={handleSave}
        >
          <PiFloppyDiskBold size={20} />
          Сохранить изменения
        </Button>
      }
      title='Сотрудники'
    >
      <Flex col className='mb-10' gap={20}>
        <TableContainer employees={accEmployees} setEmployees={setAccEmployees} title='Аккаунтинг'>
          <EmployeesTable employees={accEmployees} setEmployees={setAccEmployees} />
        </TableContainer>
        <TableContainer
          employees={tasksEmployees}
          setEmployees={setTasksEmployees}
          title='Таск-Трекер'
        >
          <EmployeesTable employees={tasksEmployees} setEmployees={setTasksEmployees} />
        </TableContainer>
      </Flex>
    </ModalWrapper>
  );
};
