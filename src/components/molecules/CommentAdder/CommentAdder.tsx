import { StyledCard, Div } from './CommentAdder.style';
import { UserWithLike } from '../UserWithLike/UserWithLike';
import { User } from '@/app/models';
import { CommentEditor } from '../CommentEditor/CommentEditor';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';
import { AccountSvg } from '../../../../public';
export type CommentCardProps = {
  user: GetAccountSettingsQuery;
  class_id: string | undefined;
  note_id: string | undefined;
  numOfLike: number;
};

export const CommentAdder = ({ user, class_id, note_id, numOfLike }: CommentCardProps) => {
  return (
    <StyledCard>
      <Div>
        <Div className='justify-start'>
          {AccountSvg()}
          <div className='pl-[1rem] flex flex-col'>
            <p>{user.getUser[0].name}</p>
          </div>
        </Div>
      </Div>
      <CommentEditor user_id={user.getUser[0].id} class_id={class_id} note_id={note_id} />
    </StyledCard>
  );
};
