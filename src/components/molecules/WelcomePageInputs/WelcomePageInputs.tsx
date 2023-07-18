import { Button } from '@/components/atoms/Button/Button';
import { FirstEngagementButton } from '@/components/atoms/FirstEngagementButton/FirstEngagementButton';
import { CreateUser, GetJwt } from '@/lib/graphql/auth';
import { useRouter } from 'next/navigation';
import { FormEventHandler, useState } from 'react';
import { InputField } from '../../atoms/InputField/InputField';
import { Div } from './WelcomePageInputs.style';
import { GetUser } from '@/lib/graphql/auth';

export type WelcomePageInputsProps = {
  buttonLabel: string;
  handleAction: (user_id: string) => void | undefined;
};

export const WelcomePageInputs = ({ buttonLabel, handleAction }: WelcomePageInputsProps) => {
  const [isLogin, setIsLogin] = useState(false);

  // 親cmpがどのみちclient cmpなのでuseRouter使う
  const router = useRouter();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    console.log('submit!!');
    event.preventDefault();
    if (!isLogin) {
      // 初回
      const { value: user_name } = (event.target as any).userName;
      const { value: email } = (event.target as any).email;
      const { value: password } = (event.target as any).password;
      // auth
      // passwordなど漏洩してしまうのでawait CreateUserしてtoeknを返し，それをパラメータとしてrscに渡してapiを通してではなくrscでクッキーに保存する
      const res = await fetch(`http://localhost:3000/api/auth?name=${user_name}&email=${email}&password=${password}`);
      // const token = await CreateUser({ input: { name: user_name, email: email, password: password } });
      const JSONres = await res.json();
      const token = JSONres.token;

      if (token) {
        console.log('**********************************');
        console.log('token here: ', token);
        console.log('**********************************');
        const res = await fetch(`http://localhost:3000/api/user?token=${token}`);
        const data = await res.json();
        console.log('user :', data);
        handleAction(data.user[0].id);
      } else {
        return console.log('token was not found in cookieStore');
      }
    } else {
      const { value: email } = (event.target as any).email;
      const { value: password } = (event.target as any).password;
      const token = await GetJwt({ email: email, password: password });
      console.log('**********************************');
      console.log('getjwt : ', token);
      console.log('**********************************');
      const res = await fetch(`http://localhost:3000/api/user?token=${token}`);
      const data = await res.json();
      // const user = await GetUser(token);
      console.log('user :', data);
      // *** mock
      const user_id = data.user[0].id;
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
          pattern="[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(\.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*(\.[-a-zA-Z0-9_]+)*\.([cC][oO][mM]))(:[0-9]{1,5})?"
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
