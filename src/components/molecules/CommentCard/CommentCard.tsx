import { StyledCard } from './CommentCard.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { Description } from '../../atoms/Description/Description';
export type CommentCardProps = {
  user: {
    id: string;
    name: string;
    faculty: string;
    year: number;
  };
  numOfLike: number;
  comment: string;
};

export const CommentCard = ({ user, numOfLike, comment }: CommentCardProps) => {
  return (
    <StyledCard>
      <UserWithLike user={user} numOfLike={numOfLike} />
      <div className='max-w-[100%] overflow-y-scroll break-all'>
        <Description description={comment} />
      </div>
    </StyledCard>
  );
};
