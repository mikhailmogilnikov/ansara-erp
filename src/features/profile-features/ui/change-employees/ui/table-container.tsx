import { Button } from '@nextui-org/button';
import { PiPlusCircleBold } from 'react-icons/pi';

import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';
import { IEmployee } from '@/src/entities/employee';

interface Props {
  title: string;
  children: React.ReactNode;
  setEmployees: React.Dispatch<React.SetStateAction<IEmployee[]>>;
  employees: IEmployee[];
}

export const TableContainer = ({ title, children, setEmployees, employees }: Props) => {
  const handleAdd = () => {
    const newEmplyees = [
      ...employees,
      { name: '', login: '', password: '', order: employees.length },
    ];

    setEmployees(newEmplyees);
  };

  return (
    <Flex col>
      <Flex center>
        <Text className='mb-2' size={28} tag='h2'>
          {title}
        </Text>
        <Button isIconOnly radius='full' variant='light' onPress={handleAdd}>
          <PiPlusCircleBold size={22} />
        </Button>
      </Flex>
      {children}
    </Flex>
  );
};
