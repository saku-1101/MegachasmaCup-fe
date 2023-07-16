import { FormEventHandler, useState } from 'react';
import { Div } from './WelcomePageInputs.style';
import { InputField } from '../../atoms/InputField/InputField';
import { SelectField } from '../../atoms/SelectField/SelectField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/Button/Button';
export type WelcomePageInputsProps = {
  buttonLabel: string;
};

export const WelcomePageInputs = ({ buttonLabel }: WelcomePageInputsProps) => {
  const [isLogin, setIsLogin] = useState(false);
  // 親cmpがどのみちclient cmpなのでuseRouter使う
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { value: user_name } = (event.target as any).userName;
    const { value: email } = (event.target as any).email;
    const { value: school } = (event.target as any).school;
    const { value: password } = (event.target as any).password;
    console.log(`userName: ${user_name} \n email: ${email} \n school: ${school} \n password: ${password}`);

    // fetch auth result
    // *** mock
    const user_id = '0';
    router.push(`/user/${user_id}/class`);
    router.refresh();
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
        {isLogin ? '' : <SelectField name='school' label='大学' placeholder='Select' />}
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
