import { StyledCard } from './CommentCard.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { Description } from '../../atoms/Description/Description';

export type CommentCardProps = {
  comment_id: string;
  user: { id: string; name: string };
  numOfLike: number;
  comment: string;
};

export const CommentCard = ({ comment_id, user, numOfLike, comment }: CommentCardProps) => {
  return (
    <StyledCard className='dark:bg-[#535353] dark:border-[#646464]'>
      <UserWithLike isLikeToComment={true} comment_id={comment_id} user={user} numOfLike={numOfLike} />
      <div className='max-w-[100%] overflow-y-scroll break-all'>
        <Description description={comment} />
      </div>
    </StyledCard>
  );
};
