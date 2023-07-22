import { Note } from '@/components/organisms/Note/Note';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetNoteDocument, GetAccountSettingsDocument } from '@/codegen/gql/graphql';

export type PropsToGetNote = {
  user_id: string;
  note_id: string;
};

export const PrivateNotePage = async ({ user_id, note_id }: PropsToGetNote) => {
  // fetch note with note_id
  // ** mock
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);

  // fetch a current user
  const user = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });

  const note = await gqlClient.request(GetNoteDocument, {
    input: {
      isMy: true,
      isPublic: false,
      noteID: note_id,
    },
  });
  // fetch an author of the note with user_id
  const author = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      userID: note.getNotes[0].userId,
    },
  });

  const didYouLiked = (currentUserId: string): boolean => {
    return note.getNotes[0].likeUser.some((u) => u.id === currentUserId);
  };

  return (
    <>
      <Note
        author={author}
        note={note}
        numOfLike={note.getNotes[0].likeUser.length}
        didYouLiked={didYouLiked(user.getUser[0].id)}
      />
    </>
  );
};
