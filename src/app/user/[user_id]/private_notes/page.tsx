import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';
import { PrivateNoteCard } from '@/components/molecules/PrivateNoteCard/PrivateNoteCard';
import { LgTitle } from '../../../../components/atoms/LgTitle/LgTitle';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';

import { GetNotesDocument } from '@/codegen/gql/graphql';
export type PrivateNotesProps = {
  params: {
    user_id: string;
  };
};
export default async function PrivateNotes({ params: { user_id } }: PrivateNotesProps) {
  // TODO: fetch user notes with user_id under the condition of is_private === true
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const notesObj = await gqlClient.request(GetNotesDocument, {
    input: {
      isMy: true,
      isPublic: false,
    },
  });
  const notes = notesObj.getNotes;
  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>
          <LgTitle title='保存しているノートたち' />
          {notes.map((el) => (
            <PrivateNoteCard key={el.id} note={el} user_id={user_id} />
          ))}
        </Div>
      </CoreContainer>
    </WrapperContainer>
  );
}
