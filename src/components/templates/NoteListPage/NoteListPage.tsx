import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { Div } from './NoteListPage.style';
import type { Note } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { Suspense } from 'react';
import { LoadingCard } from '@/components/atoms/LoadingCard/LoadingCard';
export type NoteListPageProps = {
  user_id: string;
  class_id: string;
  Mode: boolean;
};

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const notes = await res.json();

  return notes as { data: Array<Note> };
};

export const NoteListPage = async ({ user_id, class_id, Mode }: NoteListPageProps) => {
  // fetch notes with class_ids
  // const notes: {
  //   data: Array<Note>;
  // } = {
  //   data: [
  //     {
  //       id: '0',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '1',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '2',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '3',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '4',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '5',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '6',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '7',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '8',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //     {
  //       id: '9',
  //       name: 'student',
  //       description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
  //       tags: ['math', 'math', 'math'],
  //       numOfLike: 24,
  //     },
  //   ],
  // };
  const notes: { data: Array<Note> } = await getData();
  return (
    <Div>
      {notes.data.map((el) => (
        <NoteCard
          key={el.id}
          note_id={el.id}
          user_id={user_id}
          class_id={class_id}
          nameOfStudent={el.name}
          description={el.description}
          tags={el.tags}
          numOfLike={el.numOfLike}
          Mode={Mode}
        />
      ))}
      <AddButton isNoteAdd={true} isCommentAdd={false} user_id={user_id} class_id={class_id} />
    </Div>
  );
};
