import { NoteListPage } from '@/components/templates/NoteListPage/NoteListPage';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';

export type NoteListPageProps = {
  params: {
    class_id: string;
  };
};

export default function Note({ params: { class_id = '0' } }: NoteListPageProps) {
  return (
    <WrapperContainer>
      <CoreContainer>
        <NoteListPage class_id={class_id} />
      </CoreContainer>
    </WrapperContainer>
  );
}
