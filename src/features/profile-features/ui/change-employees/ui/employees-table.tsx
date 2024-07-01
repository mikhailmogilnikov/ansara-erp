import { Reorder } from 'framer-motion';

import { TableHeaderData } from '../config/table-data';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Employee, IEmployee } from '@/src/entities/employee';

interface Props {
  employees: IEmployee[];
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
}

export const EmployeesTable = ({ employees, setEmployees }: Props) => {
  return (
    <div className='w-full'>
      <Flex className='py-4 border-b-1 border-divider w-full' gap={0}>
        {TableHeaderData.map((obj) => (
          <Flex key={obj.key} className='opacity-50 grow'>
            {obj.title}
          </Flex>
        ))}
      </Flex>
      <Reorder.Group axis='y' className='w-full' values={employees} onReorder={setEmployees}>
        {employees.map((employee) => (
          <Reorder.Item key={employee.order} className='w-full' value={employee}>
            <Employee {...employee} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};
