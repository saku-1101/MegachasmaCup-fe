import { ClassPage } from '@/components/templates/ClassPage/ClassPage';
import { EmptyPage } from '@/components/templates/EmptyPage/EmptyPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
import type { Class } from '@/app/models';

export type UserProps = {
  params: { user_id: string };
};

const getData = async () => {
  const data = await fetch('http://localhost:3000/api/classes');
  const classes = await data.json();

  return classes as { data: Array<Class> };
};

export default async function User({ params: { user_id } }: UserProps) {
  // fetch user's classes with user_id
  // *** mock
  // const classes: { data: Array<Class> } = {
  //   data: [
  //     { id: '0', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '1', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '2', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '3', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '4', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '5', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '6', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '7', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '8', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //     { id: '9', name: '微分積分', numOfStudent: 24, numOfNote: 24 },
  //   ],
  // };

  const classes: { data: Array<Class> } = await getData();

  return (
    <WrapperContainer>
      <CoreContainer>
        {classes.data.length === 0 ? <EmptyPage /> : <ClassPage classes={classes.data} user_id={user_id} />}
      </CoreContainer>
    </WrapperContainer>
  );
}
