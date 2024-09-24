import { LoginForm } from '@/src/features/login';
import { AnsaraTitle } from '@/src/shared/assets/anara-title';
import { Flex } from '@/src/shared/ui/(layout)/flex';
import { Text } from '@/src/shared/ui/(layout)/text';

export const LoginPage = () => {
  return (
    <>
      <Flex
        col
        className='absolute top-[50%] left-[50%] -mt-14 -translate-y-1/2 -translate-x-1/2 w-full max-w-[360px]'
      >
        <Text weight={600}>Вход в аккаунт</Text>
        <LoginForm />
      </Flex>
      <Flex className='absolute top-8 left-8' width={'160px'}>
        <AnsaraTitle />
      </Flex>
    </>
  );
};
