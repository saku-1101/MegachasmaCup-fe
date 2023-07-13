import { NoteEditor } from '@/components/organisms/NoteEditor/NoteEditor';
export type NoteEditPageProps = {
  user: {
    user_id: string;
    name: string;
  };
};

export const NoteEditPage = ({ user }: NoteEditPageProps) => {
  const name = user.name;
  return <NoteEditor title={name} />;
};
