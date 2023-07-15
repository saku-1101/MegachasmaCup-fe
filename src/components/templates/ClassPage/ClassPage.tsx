import { ClassCard } from '@/components/molecules/ClassCard/ClassCard';
import { Div } from './ClassPage.style';
import { Class } from '@/app/models';
import { AddButton } from '../../atoms/AddButton/AddButton';

export type ClassPageProps = {
  classes: Array<Class>;
};

export const ClassPage = ({ classes }: ClassPageProps) => {
  return (
    <Div>
      {classes.map((el) => (
        <ClassCard key={el.id} title={el.name} numOfStudent={el.numOfStudent} numOfNote={el.numOfNote} />
      ))}
      <AddButton isNoteAdd={false} />
    </Div>
  );
};
