
import { Input } from "@nextui-org/input";
import { PiPlusCircleBold, PiTrashBold } from "react-icons/pi";

import { ButtonWithConfirm } from "@/src/shared/ui/(buttons)/button-with-confirm";
import { InputLabel } from "@/src/shared/ui/(inputs)/input-label";
import { Flex } from "@/src/shared/ui/(layout)/flex";
import { Button } from "@/src/shared/ui/(buttons)/button";


export const ProjectsStatusPhasesLinks = () => {
  return (
    <InputLabel title='Ссылки'>
      <Flex col>
        <Flex>
          <Input classNames={{ inputWrapper: '!bg-default' }} placeholder='URL-адрес' size='lg' />
          <Input
            classNames={{ inputWrapper: '!bg-default' }}
            placeholder='Название ссылки'
            size='lg'
          />
          <ButtonWithConfirm
            isIconOnly
            actionFn={() => {}}
            className='text-danger'
            confirmColor='danger'
            confirmTitle='Удалить'
            description='Вы действительно хотите удалить эту ссылку? Это действие нельзя отменить.'
            icon={<PiTrashBold size={20} />}
          />
        </Flex>
        <Button>
          <PiPlusCircleBold size={20} />
          Добавить
        </Button>
      </Flex>
    </InputLabel>
  );
};
