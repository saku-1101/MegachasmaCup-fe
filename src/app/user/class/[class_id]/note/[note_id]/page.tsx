import { NotePage } from '@/components/templates/NotePage/NotePage';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';
export type NoteProps = {
  user_id: string;
  params: {
    note_id: string;
  };
};
export default function Note({ user_id, params: { note_id } }: NoteProps) {
  return (
    <WrapperContainer>
    <CoreContainer>
    <NotePage user_id={user_id} note_id={note_id} />
    </CoreContainer>
  </WrapperContainer>
  );
}
