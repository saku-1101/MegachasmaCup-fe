import { ClassCard } from '@/components/molecules/ClassCard/ClassCard';
import { Div } from './ClassPage.style';

export type ClassPageProps = {
  class_ids: Array<string>;
};

export const ClassPage = ({ class_ids }: ClassPageProps) => {
  // fetch class details with class_ids
  const classes: { data: Array<{ id: string; name: string; numOfStudent: number; numOfNote: number }> } = {
    data: [
      { id: '0', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '1', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '2', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '3', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '4', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '5', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '6', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '7', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '8', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
      { id: '9', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
    ],
  };
  return (
    <Div>
      {classes.data.map((el) => (
        <ClassCard key={el.id} title={el.name} numOfStudent={el.numOfStudent} numOfNote={el.numOfNote} />
      ))}
    </Div>
  );
};
