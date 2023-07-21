import { StyledCard, Div } from './CommentCard.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { Description } from '../../atoms/Description/Description';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetAccountSettingsDocument } from '@/codegen/gql/graphql';
import { AccountSvg } from '../../../../public';

export type CommentCardProps = {
  userId: string;
  comment: string;
};

export const CommentCard = async ({ userId, comment }: CommentCardProps) => {
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const user = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      userID: userId,
    },
  });
  return (
    <StyledCard>
      <Div className='justify-start'>
        {AccountSvg()}
        <div className='pl-[1rem] flex flex-col'>
          <p>{user.getUser[0].name}</p>
        </div>
      </Div>
      <div className='max-w-[100%] overflow-y-scroll break-all'>
        <Description description={comment} />
      </div>
    </StyledCard>
  );
};
