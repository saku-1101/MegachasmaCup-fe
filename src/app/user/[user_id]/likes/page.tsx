import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';
import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { LgTitle } from '../../../../components/atoms/LgTitle/LgTitle';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetLikedNotesDocument } from '@/codegen/gql/graphql';

export type PrivateNotesProps = {
  params: {
    user_id: string;
  };
};
export default async function PrivateNotes({ params: { user_id } }: PrivateNotesProps) {
  // TODO: fetch user notes with user_id if there's more than a like
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const notesObj = await gqlClient.request(GetLikedNotesDocument, {
    input: {
      isMe: true,
    },
  });
  const notes = notesObj.getUser[0].userLikes;

  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>
          <LgTitle title='いいねしたノートたち' />
          {notes.map((el) => (
            <NoteCard key={el.id} note={el} user_id={user_id} class_id={el.classId} />
          ))}
        </Div>
      </CoreContainer>
    </WrapperContainer>
  );
}
