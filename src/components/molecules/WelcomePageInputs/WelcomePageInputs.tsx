import { FormEventHandler, useState } from 'react';
import { Div } from './WelcomePageInputs.style';
import { InputField } from '../../atoms/InputField/InputField';
import { SelectField } from '../../atoms/SelectField/SelectField';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { useRouter } from 'next/navigation';
export type WelcomePageInputsProps = {
  buttonLabel: string;
};

export const WelcomePageInputs = ({ buttonLabel }: WelcomePageInputsProps) => {
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
        <InputField name='userName' inputType='text' label='ユーザ名' placeholder='Username' pattern='.{3,}' />
        <InputField
          name='email'
          inputType='email'
          label='メールアドレス'
          placeholder='Email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
        />
        <SelectField name='school' label='大学' placeholder='Select' />
        <InputField
          name='password'
          inputType='password'
          label='パスワード'
          placeholder='Password'
          pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
        />
        <FirstEngagementButton formId='authForm' label={buttonLabel} />
      </form>
    </Div>
  );
};
