import { ClassCard } from '@/components/molecules/ClassCard/ClassCard';
import { Div } from './ClassPage.style';
import { Class } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { Suspense } from 'react';
import { LoadingCard } from '@/components/atoms/LoadingCard/LoadingCard';
import { GetClassesOfUserQuery } from '@/codegen/gql/graphql';

export type ClassPageProps = {
  classes: GetClassesOfUserQuery;
  user_id: string;
};

export const ClassPage = ({ classes, user_id }: ClassPageProps) => {
  return (
    <Div>
      {classes.getClasses.map((el) => (
        <>
          <ClassCard
            key={el.id}
            class_id={el.id}
            title={el.name}
            numOfStudent={el.classStudents.length}
            numOfNote={el.classNotes.length}
            user_id={user_id}
          />
        </>
      ))}
      <AddButton isNoteAdd={false} isCommentAdd={false} user_id={user_id} />
    </Div>
  );
};
