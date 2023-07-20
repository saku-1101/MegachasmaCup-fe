import { ClassCard } from '@/components/molecules/ClassCard/ClassCard';
import { Div } from './ClassPage.style';
import { AddButton } from '../../atoms/AddButton/AddButton';
import { GetClassesOfUserQuery } from '@/codegen/gql/graphql';
export type ClassPageProps = {
  classes: GetClassesOfUserQuery;
  user_id: string;
  school_id: string;
};

export const ClassPage = ({ classes, user_id, school_id }: ClassPageProps) => {
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
      <AddButton isNoteAdd={false} isCommentAdd={false} user_id={user_id} school_id={school_id} />
    </Div>
  );
};
