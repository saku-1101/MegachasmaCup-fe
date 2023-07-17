import { StyledCard } from './CommentAdder.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { User } from '@/app/models';
import { CommentEditor } from '../CommentEditor/CommentEditor';
export type CommentCardProps = {
  user_id: string | undefined;
  class_id: string | undefined;
  note_id: string | undefined;
  numOfLike: number;
};

export const CommentAdder = ({ user_id, class_id, note_id, numOfLike }: CommentCardProps) => {
  try {
    // TODO: fetch user with user_id
  } catch {
    // if the result of fetch is error
  }
  const data: User = {
    id: user_id!,
    image_url: '',
    name: 'student',
    email: 'example@email.com',
    school_id: '0',
  };
  return (
    <StyledCard className='dark:bg-[#535353]'>
      <UserWithLike isLikeToComment={true} user={data} numOfLike={numOfLike} />
      <CommentEditor user_id={user_id} class_id={user_id} note_id={user_id} />
    </StyledCard>
  );
};
