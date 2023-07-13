import { ClassPage } from '@/components/templates/ClassPage/ClassPage';
import { EmptyPage } from '@/components/templates/EmptyPage/EmptyPage';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';

export type UserProps = {
  params: { user_id: string };
};
export default function User({ params: { user_id } }: UserProps) {
  // fetch user's subject and note content with user_id
  // *** mock
  const user = {
    class_ids: ['0', '1', '2'],
    note_ids: [],
  };
  if (user.class_ids.length === 0) {
    return (
      <WrapperContainer>
        <CoreContainer>
          <EmptyPage />
        </CoreContainer>
      </WrapperContainer>
    );
  }
  return (
    <WrapperContainer>
      <CoreContainer>
        <ClassPage class_ids={user.class_ids} />
      </CoreContainer>
    </WrapperContainer>
  );
}
