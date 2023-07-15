'use client';
import { Div } from './CommentEditor.style';
import { TextareaField } from '@/components/atoms/TextareaField/TextareaField';
import { Button } from '@/components/atoms/Button/Button';
export type CommentEditorProps = {
  user_id: string | undefined;
  class_id: string | undefined;
  note_id: string | undefined;
};

export const CommentEditor = ({ user_id, class_id, note_id }: CommentEditorProps) => {
  const handleRelease = () => {
    // POST or PUT data with user_id, class_id, note_id
    return;
  };
  return (
    <Div>
      <TextareaField />
      <Button label='公開' isSecondaryBg={false} handleAction={handleRelease} />
    </Div>
  );
};
