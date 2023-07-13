import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { Div } from './NoteListPage.style';

export type NoteListPageProps = {
  class_id: string;
};

export const NoteListPage = ({ class_id }: NoteListPageProps) => {
  // fetch class details with class_ids
  const notes: {
    data: Array<{ id: string; name: string; description: string; tags: Array<string>; numOfLike: number }>;
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
    </Div>
  );
};
