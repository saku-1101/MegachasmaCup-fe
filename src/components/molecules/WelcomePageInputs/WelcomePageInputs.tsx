import { FormEventHandler, useState } from 'react';
import { Div } from './WelcomePageInputs.style';
import { InputField } from '../../atoms/InputField/InputField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/Button/Button';
import useLocalStorage from '@/hooks/useLocalStorage';
import { gqlClient } from '@/lib/client';
import { CreateUserDocument } from '@/codegen/gql/graphql';

export type WelcomePageInputsProps = {
  buttonLabel: string;
  handleAction: (user_id: string) => void | undefined;
};

export const WelcomePageInputs = ({ buttonLabel, handleAction }: WelcomePageInputsProps) => {
  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!isLogin) {
      // 初回
      const { value: user_name } = (event.target as any).userName;
      const { value: email } = (event.target as any).email;
      const { value: password } = (event.target as any).password;
      // auth
      const res = await gqlClient.request(CreateUserDocument, {
        input: {
          name: user_name,
          password: password,
          email: email,
        },
      });

      // go to school registration popup
      // get a user id returned by mutation
      const user_id = '0'; // this is returned value by mutation
      handleAction(user_id);
    } else {
      const { value: email } = (event.target as any).email;
      const { value: password } = (event.target as any).password;
      // *** mock
      const user_id = '0';
      router.push(`/user/${user_id}/class`);
      router.refresh();
    }
  };

  return (
    <Div>
      <form className='w-[80%] max-w-[600px]' onSubmit={handleSubmit} id='authForm'>
        {isLogin ? (
          ''
        ) : (
          <InputField name='userName' inputType='text' label='ユーザ名' placeholder='Username' pattern='.{3,}' />
        )}
        <InputField
          name='email'
          inputType='email'
          label='メールアドレス'
          placeholder='Email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
        />
        <InputField
          name='password'
          inputType='password'
          label='パスワード'
          placeholder='Password'
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
        />
        {isLogin ? '' : <FirstEngagementButton formId='authForm' label={buttonLabel} />}
        {isLogin ? <Button formId='authForm' type='submit' isSecondaryBg={true} label='ログイン' /> : ''}
        {isLogin ? (
          <p className='text-sm text-subtleText text-center'>
            新規登録はここから &gt;&gt;{' '}
            <span className='text-accent hover:text-secondary' onClick={() => setIsLogin(false)}>
              新規登録へ進む
            </span>
          </p>
        ) : (
          <p className='text-sm text-subtleText text-center'>
            ログインはここから &gt;&gt;{' '}
            <span className='text-accent hover:text-secondary' onClick={() => setIsLogin(true)}>
              ログインへ進む
            </span>
          </p>
        )}
      </form>
    </Div>
  );
};
