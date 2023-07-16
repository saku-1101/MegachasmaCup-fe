import { AccountSvg } from '../../../../public';
import { Div } from './UserWithLike.style';
import { LikeButton } from '../../atoms/LikeButton/LikeButton';
export type UserWithLikeProps = {
  isLikeToComment: boolean;
  note_id?: string;
  comment_id?: string;
  user: { id: string; name: string };
  numOfLike: number;
};

export const UserWithLike = ({ isLikeToComment, note_id, comment_id, user, numOfLike }: UserWithLikeProps) => {
  return (
    <Div>
      <Div className='justify-start'>
        {AccountSvg()}
        <div className='pl-[1rem] flex flex-col'>
          <p>{user.name}</p>
        </div>
      </Div>
      <LikeButton isLikeToComment={isLikeToComment} note_id={note_id} comment_id={comment_id} numOfLike={numOfLike} />
    </Div>
  );
};
