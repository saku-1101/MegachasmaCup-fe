import { Div } from './CommentEditor.style';
import { TextareaField } from '@/components/atoms/TextareaField/TextareaField';
import { Button } from '@/components/atoms/Button/Button';
import { handleCommentRelease } from '@/lib/serverActions/handleCommentRelease';
export type CommentEditorProps = {
  user_id: string | undefined;
  class_id: string | undefined;
  note_id: string | undefined;
};

export const CommentEditor = ({ user_id, class_id, note_id }: CommentEditorProps) => {
  return (
    <Div>
      <form
        action={(formData: FormData) => handleCommentRelease(formData, user_id!, class_id!, note_id!)}
        id='commentForm'
        className='w-full h-full'
      >
        <TextareaField />
        <Button label='投稿' isSecondaryBg={false} type='submit' formId='commentForm' />
      </form>
    </Div>
  );
};
