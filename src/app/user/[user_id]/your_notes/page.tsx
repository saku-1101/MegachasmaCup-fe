import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';
import type { Note } from '@/app/models';
import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { LgTitle } from '../../../../components/atoms/LgTitle/LgTitle';

export type PrivateNotesProps = {
  params: {
    user_id: string;
  };
};
export default function YourNotes({ params: { user_id } }: PrivateNotesProps) {
  // TODO: fetch user notes with user_id under the condition of is_private === false
  const notes: {
    data: Array<{
      id: string;
      name: string;
      description: string;
      tags: Array<string>;
      numOfLike: number;
      class_id: string;
    }>;
  } = {
    data: [
      {
        id: '0',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '1',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '2',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '3',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '4',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '5',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '6',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
      {
        id: '7',
        name: 'student',
        description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescription',
        tags: ['math', 'math', 'math'],
        numOfLike: 24,
        class_id: '0',
      },
    ],
  };
  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>
          <LgTitle title='投稿したノートたち' />
          {notes.data.map((el) => (
            <NoteCard
              key={el.id}
              note_id={el.id}
              user_id={user_id}
              class_id={el.class_id}
              nameOfStudent={el.name}
              description={el.description}
              tags={el.tags}
              numOfLike={el.numOfLike}
            />
          ))}
        </Div>
      </CoreContainer>
    </WrapperContainer>
  );
}
