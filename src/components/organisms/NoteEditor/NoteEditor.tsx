import { StyledNoteEditor } from './NoteEditor.style';
import { MdEditor } from '../../molecules/MdEditor/MdEditor';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
export type NoteEditorProps = {
  user_id: string;
  class_id: string;
  note_id: string;
};

export const NoteEditor = ({ user_id, class_id, note_id }: NoteEditorProps) => {
  // fetch user name with user_id
  const data: {
    data: {
      user: {
        name: string;
      };
    };
  } = {
    data: {
      user: {
        name: 'Student',
      },
    },
  };
  return (
    <StyledNoteEditor>
      <LgTitle title={data.data.user.name + 'のノート'} />
      <MdEditor user_id={user_id} class_id={class_id} note_id={note_id} />
    </StyledNoteEditor>
  );
};
