import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { Div } from './NoteListPage.style';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { GetNotesQuery } from '../../../codegen/gql/graphql';

export type NoteListPageProps = {
  notesObj: GetNotesQuery;
  user_id: string;
  class_id: string;
};

export const NoteListPage = async ({ notesObj, user_id, class_id }: NoteListPageProps) => {
  const notes = notesObj.getNotes;

  return (
    <Div>
      {notes.map((el) => (
        <NoteCard key={el.id} note={el} user_id={user_id} class_id={class_id} />
      ))}
      <AddButton isNoteAdd={true} isCommentAdd={false} user_id={user_id} class_id={class_id} />
    </Div>
  );
};
