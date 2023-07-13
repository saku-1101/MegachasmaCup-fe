import { NotePage } from '@/components/templates/NotePage/NotePage';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';
export type NoteProps = {
  params: {
    user_id: string;
    note_id: string;
  };
};
export default function Note({ params: { user_id, note_id } }: NoteProps) {
  return (
    <WrapperContainer>
      <CoreContainer>
        <NotePage user_id={user_id} note_id={note_id} />
      </CoreContainer>
    </WrapperContainer>
  );
}
