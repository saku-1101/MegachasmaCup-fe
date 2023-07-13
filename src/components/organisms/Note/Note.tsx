import { StyledNote } from './Note.style';
import { MdEditor } from '../../molecules/MdEditor/MdEditor';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
export type NoteProps = {
  title: string;
};

export const Note = ({ title }: NoteProps) => {
  return (
    <StyledNote>
      <LgTitle title={title + 'のノート'} />
      <MdEditor />
    </StyledNote>
  );
};
