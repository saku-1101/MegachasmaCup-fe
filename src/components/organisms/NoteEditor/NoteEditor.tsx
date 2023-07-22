import { StyledNoteEditor } from './NoteEditor.style';
import { MdEditor } from '../../molecules/MdEditor/MdEditor';
import { LgTitle } from '../../atoms/LgTitle/LgTitle';
import { GetAccountSettingsDocument } from '@/codegen/gql/graphql';
import { gqlClient } from '@/lib/gqlClient';
import { getToken } from '@/lib/cookie';
export type NoteEditorProps = {
  user_id: string;
  class_id: string;
};

export const NoteEditor = async ({ user_id, class_id }: NoteEditorProps) => {
  // fetch user name with user_id
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const res = await gqlClient.request(GetAccountSettingsDocument, {
    input: {
      isMe: true,
    },
  });
  return (
    <StyledNoteEditor>
      <LgTitle title={res.getUser[0].name + 'のノート'} />
      <MdEditor user_id={user_id} class_id={class_id} school_id={res.getUser[0].userSchool[0].id} />
    </StyledNoteEditor>
  );
};
