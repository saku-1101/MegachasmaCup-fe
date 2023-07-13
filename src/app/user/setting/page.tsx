import { AccountPage } from '@/components/templates/AccountPage/AccountPage';
import { WrapperContainer } from '@/components/styles/containers';

export type SettingProps = {
  user_id: string;
};
export default function Setting({ user_id }: SettingProps) {
  // fetch account data here with user_id
  // *** mock
  const user: {
    data: {
      id: string;
      name: string;
      email: string;
      school: string;
      faculty: string;
      year: number;
    };
  } = {
    data: {
      id: user_id,
      name: 'ロエム・イプサム',
      email: 'example@email.com',
      school: 'XX University',
      faculty: 'Informatics',
      year: 4,
    },
  };
  return (
    <WrapperContainer>
      <div className='md:w-[40%] w-[90%]'>
        <AccountPage user={user.data} />
        </div>
    </WrapperContainer>
  );
}
