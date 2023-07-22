import { AccountCard } from '@/components/organisms/AccountCard/AccountCard';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';

type AccountPageProps = {
  userObj: GetAccountSettingsQuery;
};

export const AccountPage = ({ userObj }: AccountPageProps) => {
  return <AccountCard userObj={userObj} />;
};
