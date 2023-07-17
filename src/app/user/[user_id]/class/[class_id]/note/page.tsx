import { NoteListPage } from '@/components/templates/NoteListPage/NoteListPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';

export type NoteListPageProps = {
  params: {
    user_id: string;
    class_id: string;
    Mode: boolean;
  };
};

export default function Note({ params: { user_id, class_id, Mode } }: NoteListPageProps) {
  return (
    <WrapperContainer>
      <CoreContainer>
        <NoteListPage user_id={user_id} class_id={class_id} Mode={Mode} />
      </CoreContainer>
    </WrapperContainer>
  );
}
