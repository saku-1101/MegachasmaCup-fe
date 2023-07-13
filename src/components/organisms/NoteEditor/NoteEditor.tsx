import { StyledNoteEditor } from './NoteEditor.style';
import { MdEditor } from '../../molecules/MdEditor/MdEditor';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
export type NoteEditorProps = {
  title: string;
};

export const NoteEditor = ({ title }: NoteEditorProps) => {
  return (
    <StyledNoteEditor>
      <LgTitle title={title + 'のノート'} />
      <MdEditor />
    </StyledNoteEditor>
  );
};
