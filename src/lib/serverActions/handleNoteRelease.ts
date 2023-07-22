'use server';
import { CreateNoteDocument, CreateTagDocument } from '@/codegen/gql/graphql';
import { getToken } from '../cookie';
import { gqlClient } from '../gqlClient';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const handleNoteRelease = async (
  formData: FormData,
  user_id: string,
  school_id: string,
  class_id: string,
  markdown: string | undefined,
  isPublic: boolean,
  tags: string[],
) => {
  const comment = formData.get('comment');

  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const resCreateNote = await gqlClient.request(CreateNoteDocument, {
    input: {
      classID: class_id,
      schoolID: school_id,
      description: markdown || ' ',
      title: comment?.toString() || '',
      isPublic: isPublic,
    },
  });
  console.log('create note res: ', resCreateNote);

  for (const tag of tags) {
    const res = await gqlClient.request(CreateTagDocument, {
      input: {
        name: tag,
      },
    });
    console.log('res: ', res);
  }

  revalidatePath(`/user/${user_id}/class/${class_id}/note/${resCreateNote.createNote.id}`);
  redirect(`/user/${user_id}/class/${class_id}/note`);
};
