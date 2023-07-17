import { Note } from '@/components/organisms/Note/Note';
import { CommentCard } from '../../molecules/CommentCard/CommentCard';
import { MdTitle } from '../../atoms/MdTitle/MdTitle';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { Comment, User } from '@/app/models';

export type PropsToGetNote = {
  user_id: string;
  class_id: string;
  note_id: string;
};
export type NoteProps = {
  note: {
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
        comments: Array<{
          id: string;
          user: {
            id: string;
            name: string;
          };
          comment: string;
          like: number;
        }>;
      };
    };
  };
};

export const NotePage = ({ user_id, class_id, note_id }: PropsToGetNote) => {
  // fetch note with user_id and note_id
  // ** mock
  const { note }: NoteProps = {
    note: {
      user: {
        id: 'user123',
        name: 'John Doe',
        faculty: 'Computer Science',
        year: 2022,
        note_id: 'note456',
        note: {
          id: 'note456',
          description: 'Sample Note',
          tags: ['tag1', 'tag2', 'tag3'],
          content: 'This is a sample note.',
          like: 10,
          comments: [
            {
              id: '1',
              user: {
                id: 'user456',
                name: 'Jane Smith',
              },
              comment: 'Great note!',
              like: 5,
            },
            {
              id: '2',
              user: {
                id: 'user789',
                name: 'Bob Johnson',
              },
              comment: 'Very helpful information.',
              like: 2,
            },
            {
              id: '3',
              user: {
                id: 'user012',
                name: 'Alice Brown',
              },
              comment: 'I have a question regarding this topic.',
              like: 0,
            },
          ],
        },
      },
    },
  };

  return (
    <>
      <Note user={note.user} numOfLike={note.user.note.like} />
      <div className='flex flex-col items-start md:gap-10 gap-5 md:mt-[3rem] mt-[2rem] '>
        <MdTitle title='このノートへのコメント' />
        {note.user.note.comments.map((el: Comment) => (
          <CommentCard key={el.id} user={el.user} numOfLike={el.like} comment_id={el.id} comment={el.comment} />
        ))}
        <AddButton isNoteAdd={false} isCommentAdd={true} user_id={user_id} />
      </div>
    </>
  );
};
