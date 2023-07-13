import { AccountCard } from '@/components/organisms/AccountCard/AccountCard';
import { Div } from './AccountPage.style';
export type AccountPageProps = {
  user: {
    id: string;
    name: string;
    email: string;
    school: string;
    faculty: string;
    year: number;
  };
};

export const AccountPage = ({ user }: AccountPageProps) => {
  return <AccountCard user={user} />;
};
