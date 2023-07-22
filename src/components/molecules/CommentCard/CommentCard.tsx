import { StyledCard, Div } from './CommentCard.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { Description } from '../../atoms/Description/Description';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetAccountSettingsDocument } from '@/codegen/gql/graphql';
import { AccountSvg } from '../../../../public';

export type CommentCardProps = {
  commentAuthorId: string;
  comment: string;
};

export const CommentCard = async ({ commentAuthorId, comment }: CommentCardProps) => {
  // TODO: commentAuthorIdを返す実装が完了したらコメントを表示できるようにする
  // const token = getToken();
  // gqlClient.setHeader('authorization', `Bearer ${token}`);
  // const commentAuthor = await gqlClient.request(GetAccountSettingsDocument, {
  //   input: {
  //     userID: commentAuthorId,
  //   },
  // });
  return (
    <StyledCard>
      <Div className='justify-start'>
        {AccountSvg()}
        {/* <div className='pl-[1rem] flex flex-col'>
          <p>{commentAuthor.getUser[0].name}</p>
        </div> */}
      </Div>
      <div className='max-w-[100%] overflow-y-scroll break-all'>
        <Description description={comment} />
      </div>
    </StyledCard>
  );
};
