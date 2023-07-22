'use server';
import { gqlClient } from '@/lib/gqlClient';
import { CreateCommentDocument } from '@/codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
import { revalidatePath } from 'next/cache';

export const handleCommentRelease = async (formData: FormData, user_id: string, class_id: string, note_id: string) => {
  'use server';
  const comment = formData.get('comment');
  if (!comment) return;
  // const escapedComment = escape(comment!);
  // POST or PUT data with user_id, class_id, note_id
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const res = await gqlClient.request(CreateCommentDocument, {
    input: {
      noteID: note_id!,
      comment: comment.toString(),
    },
  });
  console.log('comment is successfully published: ', res);
  revalidatePath(`/user/${user_id}/class/${class_id}/note/${note_id}`);
};
