import { NoteEditPage } from '@/components/templates/NoteEditPage/NoteEditPage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
type NoteEditProps = {
  params: {
    user_id: string;
    class_id: string;
  };
};
export default function NoteEdit({ params: { user_id, class_id } }: NoteEditProps) {
  return (
    <WrapperContainer>
      <CoreContainer>
        <NoteEditPage user_id={user_id} class_id={class_id} />
      </CoreContainer>
    </WrapperContainer>
  );
}
