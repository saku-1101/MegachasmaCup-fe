import { AccountSvg } from '../../../../public';
import { Div } from './UserWithLike.style';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
import { gqlClient } from '@/lib/gqlClient';
import { IncrementLikeDocument, DecrementLikeDocument } from '@/codegen/gql/graphql';
export type UserWithLikeProps = {
  note_id?: string;
  comment_id?: string;
  user: GetAccountSettingsQuery;
  numOfLike: number;
  didYouLiked: boolean;
};

export const UserWithLike = ({ note_id, comment_id, user, numOfLike, didYouLiked }: UserWithLikeProps) => {
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);

  const handleIncrementLike = async () => {
    'use server';
    const res = await gqlClient.request(IncrementLikeDocument, {
      noteID: note_id!,
    });
  };
  const handleDecrementLike = async () => {
    'use server';
    const res = await gqlClient.request(DecrementLikeDocument, {
      noteID: note_id!,
    });
  };
  return (
    <Div>
      <Div className='justify-start'>
        {AccountSvg()}
        <div className='pl-[1rem] flex flex-col'>
          <p>{user.getUser[0].name}</p>
        </div>
      </Div>
      <LikeButton
        didYouLiked={didYouLiked}
        note_id={note_id}
        comment_id={comment_id}
        numOfLike={numOfLike}
        incrementLikeToNote={handleIncrementLike}
        decrementLikeToNote={handleDecrementLike}
      />
    </Div>
  );
};
