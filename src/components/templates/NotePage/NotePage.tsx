import { Note } from '@/components/organisms/Note/Note';
import { CommentCard } from '../../molecules/CommentCard/CommentCard';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { Comment } from '@/app/models';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
import { GetNoteDocument, GetAccountSettingsDocument } from '@/codegen/gql/graphql';

export type PropsToGetNote = {
  user_id: string;
  class_id: string;
  note_id: string;
};

export const NotePage = async ({ user_id, class_id, note_id }: PropsToGetNote) => {
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
  const school_id = user.getUser[0].userSchool[0].id;
  console.log('*****************************');
  console.log('school of current user: ', token, school_id, class_id, note_id);
  console.log('*****************************');

  const note = await gqlClient.request(GetNoteDocument, {
    input: {
      schoolID: school_id,
      classID: class_id,
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
      <div className='flex flex-col items-start md:gap-10 gap-5 md:mt-[3rem] mt-[2rem]'>
        <MdTitle title='このノートへのコメント' />
        {note.getNotes[0].comments.map((el: { id: string; comment: string; userId: string }) => (
          <CommentCard key={el.id} commentAuthorId={el.userId} comment={el.comment} />
        ))}
        <AddButton isNoteAdd={false} isCommentAdd={true} user={user} class_id={class_id} note_id={note_id} />
      </div>
    </>
  );
};
