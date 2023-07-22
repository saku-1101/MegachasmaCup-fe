import { AccountPage } from '@/components/templates/AccountPage/AccountPage';
import { WrapperContainer } from '@/components/common/containers';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetAccountSettingsDocument, GetLikedNotesDocument } from '@/codegen/gql/graphql';

export default async function Setting() {
  // fetch account data here with user_id
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const userObj = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });

  return (
    <WrapperContainer>
      <div className='md:w-[40%] w-[90%]'>
        <AccountPage userObj={userObj} />
      </div>
    </WrapperContainer>
  );
}
