import { NoteListPage } from '@/components/templates/NoteListPage/NoteListPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type NoteListPageProps = {
  params: {
    user_id: string;
    class_id: string;
  };
};

export default function Note({ params: { user_id, class_id } }: NoteListPageProps) {
  return (
    <WrapperContainer>
      <CoreContainer>
        <NoteListPage user_id={user_id} class_id={class_id} />
      </CoreContainer>
    </WrapperContainer>
  );
}
