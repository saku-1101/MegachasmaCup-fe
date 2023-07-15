import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { Div } from './NoteListPage.style';
import type { Note } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';
export type NoteListPageProps = {
  user_id: string;
  class_id: string;
};

export const NoteListPage = ({ user_id, class_id }: NoteListPageProps) => {
  // fetch notes with class_ids
  const notes: {
    data: Array<Note>;
  } = {
    data: [
      {
        id: '0',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '1',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '2',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '3',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '4',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '5',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '6',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '7',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '8',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
      {
        id: '9',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
      },
    ],
  };
  return (
    <Div>
      {notes.data.map((el) => (
        <NoteCard
          key={el.id}
          nameOfStudent={el.name}
          description={el.description}
          tags={el.tags}
          numOfLike={el.numOfLike}
        />
      ))}
      <AddButton isNoteAdd={true} user_id={user_id} class_id={class_id} />
    </Div>
  );
};
