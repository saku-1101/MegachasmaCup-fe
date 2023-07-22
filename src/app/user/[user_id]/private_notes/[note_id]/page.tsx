import { PrivateNotePage } from '@/components/templates/PrivateNotePage/PrivateNotePage';
import { WrapperContainer, CoreContainer } from '@/components/common/containers';
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
        <PrivateNotePage user_id={user_id} note_id={note_id} />
      </CoreContainer>
    </WrapperContainer>
  );
}
