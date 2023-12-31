import { NoteEditor } from '@/components/organisms/NoteEditor/NoteEditor';
export type NoteEditPageProps = {
  user_id: string;
  class_id: string;
};

export const NoteEditPage = ({ user_id, class_id }: NoteEditPageProps) => {
  return <NoteEditor user_id={user_id} class_id={class_id}/>;
};
