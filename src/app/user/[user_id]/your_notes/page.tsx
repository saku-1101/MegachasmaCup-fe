import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';
import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { LgTitle } from '@/components/atoms/LgTitle/LgTitle';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetAccountSettingsDocument, GetMyNotesDocument, GetNotesDocument } from '@/codegen/gql/graphql';
export type PrivateNotesProps = {
  params: {
    user_id: string;
  };
};
export default async function YourNotes({ params: { user_id } }: PrivateNotesProps) {
  // TODO: fetch user notes with user_id under the condition of is_private === false
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const notesObj = await gqlClient.request(GetMyNotesDocument, {
    input: {
      isMy: true,
      isPublic: true,
    },
  });
  const notes = notesObj.getNotes;
  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>
          <LgTitle title='投稿したノートたち' />
          {notes.map((el) => (
            <NoteCard key={el.id} note={el} user_id={user_id} class_id={el.classId} />
          ))}
        </Div>
      </CoreContainer>
    </WrapperContainer>
  );
}
