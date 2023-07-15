import { ClassCard } from '@/components/molecules/ClassCard/ClassCard';
import { Div } from './ClassPage.style';
import { Class } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';

export type ClassPageProps = {
  classes: Array<Class>;
  user_id: string;
};

export const ClassPage = ({ classes, user_id }: ClassPageProps) => {
  return (
    <Div>
      {classes.map((el) => (
        <ClassCard
          key={el.id}
          class_id={el.id}
          title={el.name}
          numOfStudent={el.numOfStudent}
          numOfNote={el.numOfNote}
          user_id={user_id}
        />
      ))}
      <AddButton isNoteAdd={false} isCommentAdd={false} user_id={user_id} />
    </Div>
  );
};
