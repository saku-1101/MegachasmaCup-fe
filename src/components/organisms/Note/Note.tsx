import { StyledNote } from './Note.style';
import { UserWithLike } from '../../molecules/UserWithLike/UserWithLike';
import { NoteContent, NoteContentWrapper } from './Note.style';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
import { TagSvg } from '../../../../public/index';
import { Tag } from '@/components/atoms/Tag/Tag';

export type NoteProps = {
  user: {
    id: string;
    name: string;
    faculty: string;
    year: number;
    note_id: string;
    note: {
      id: string;
      description: string;
      tags: Array<string>;
      content: string;
      like: number;
    };
  };
  numOfLike: number;
};

export const Note = ({ user, numOfLike }: NoteProps) => {
  return (
    <StyledNote>
      <NoteContentWrapper>
        <LgTitle title={user.name + 'のノート'} />
        <div className='md:basis-1/4 flex items-center md:justify-start justify-center md:m-2 m-5'>
          <div className='p-2'>{TagSvg()}</div>
          <div className='max-w-[80%] max-h-[100px] flex flex-wrap overflow-y-scroll'>
            {user.note.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <NoteContent> {user.note.content}</NoteContent>
      </NoteContentWrapper>
      <UserWithLike isLikeToComment={false} note_id={user.note_id} user={user} numOfLike={numOfLike} />
    </StyledNote>
  );
};
