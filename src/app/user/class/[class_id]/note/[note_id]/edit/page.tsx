import { NoteEditPage } from '@/components/templates/NoteEditPage/NoteEditPage';
import { WrapperContainer, CoreContainer } from '@/components/styles/containers';
type NoteEditProps = {
  user_id: string;
};
export default function NoteEdit({ user_id }: NoteEditProps) {
  // get user with user_id
  const user = {
    user_id: '0',
    name: 'student',
  };
  return (
    <WrapperContainer>
      <CoreContainer>
        <NoteEditPage user={user} />
      </CoreContainer>
    </WrapperContainer>
  );
}
