'use client';
import { Div } from './CommentEditor.style';
import { TextareaField } from '@/components/atoms/TextareaField/TextareaField';
import { Button } from '@/components/atoms/Button/Button';
import { useRouter } from 'next/navigation';
import { FormEventHandler } from 'react';
export type CommentEditorProps = {
  user_id: string | undefined;
  class_id: string | undefined;
  note_id: string | undefined;
};

export const CommentEditor = ({ user_id, class_id, note_id }: CommentEditorProps) => {
  const router = useRouter();
  const handleRelease: FormEventHandler<HTMLFormElement> = async (event) => {
    const { value: comment } = (event.target as any).comment;
    const escapedComment = escape(comment!);
    // POST or PUT data with user_id, class_id, note_id
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api/add-comment?noteId=${note_id}&comment=${escapedComment}`,
    );
    router.push(`/user/${user_id}/class/${class_id}/note`);
    router.refresh();
  };
  return (
    <Div>
      <form onSubmit={handleRelease} id='commentForm'>
        <TextareaField />
        <Button label='公開' isSecondaryBg={false} type='submit' formId='commentForm' />
      </form>
    </Div>
  );
};
