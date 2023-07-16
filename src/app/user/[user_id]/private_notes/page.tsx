import { WrapperContainer, CoreContainer, Div } from '@/components/common/containers';
import type { Note } from '@/app/models';
import { NoteCard } from '@/components/molecules/NoteCard/NoteCard';
import { LgTitle } from '../../../../components/atoms/LgTitle/LgTitle';

export type PrivateNotesProps = {
  params: {
    user_id: string;
  };
};
export default function PrivateNotes({ params: { user_id } }: PrivateNotesProps) {
  // TODO: fetch user notes with user_id under the condition of is_private === true
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
    ],
  };
  return (
    <WrapperContainer>
      <CoreContainer>
        <Div>
          <LgTitle title='保存しているノートたち' />
          {notes.data.map((el) => (
            <NoteCard
              key={el.id}
              note_id={el.id}
              user_id={user_id}
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
