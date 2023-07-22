import { StyledNote } from './Note.style';
import { UserWithLike } from '../../molecules/UserWithLike/UserWithLike';
import { NoteContent, NoteContentWrapper } from './Note.style';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
import { TagSvg } from '../../../../public/index';
import { Tag } from '@/components/atoms/Tag/Tag';
import { GetAccountSettingsQuery, GetNoteQuery } from '@/codegen/gql/graphql';

export type NoteProps = {
  author: GetAccountSettingsQuery;
  note: GetNoteQuery;
  numOfLike: number;
  didYouLiked: boolean;
};

export const Note = ({ author, note, numOfLike, didYouLiked }: NoteProps) => {
  return (
    <StyledNote>
      <NoteContentWrapper>
        <LgTitle title={author.getUser[0].name + 'のノート'} />
        <div className='md:basis-1/4 flex items-center md:justify-start justify-center md:m-2 m-5'>
          <div className='p-2'>{TagSvg()}</div>
          <div className='max-w-[80%] max-h-[100px] flex flex-wrap overflow-y-scroll'>
            {note.getNotes[0].tags.map((tag) => (
              <Tag key={tag.id} text={tag.name} />
            ))}
          </div>
        </div>
        <NoteContent> {note.getNotes[0].description}</NoteContent>
      </NoteContentWrapper>
      <UserWithLike note_id={note.getNotes[0].id} user={author} numOfLike={numOfLike} didYouLiked={didYouLiked}/>
    </StyledNote>
  );
};
