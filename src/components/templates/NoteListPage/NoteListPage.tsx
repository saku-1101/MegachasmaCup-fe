import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { Div } from './NoteListPage.style';
import type { Note } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { gqlClient } from '@/lib/gqlClient';
import { GetNotesDocument } from '@/codegen/gql/graphql';
import { GetNotesQuery } from '../../../codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
export type NoteListPageProps = {
  user_id: string;
  class_id: string;
};

export const NoteListPage = async ({ user_id, class_id }: NoteListPageProps) => {
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const notes: GetNotesQuery = await gqlClient.request(GetNotesDocument, {
    input: {
      classID: class_id,
      isPublic: true,
    },
  });
  return (
    <Div>
      {notes.getNotes.map((el) => (
        <NoteCard
          key={el.id}
          note_id={el.id}
          user_id={user_id}
          class_id={class_id}
          idOfAuthor={el.userId}
          description={el.description}
          tags={el.tags}
          numOfLike={el.likeUser.length}
        />
      ))}
      <AddButton isNoteAdd={true} isCommentAdd={false} user_id={user_id} class_id={class_id} />
    </Div>
  );
};
