'use server';
import { gqlClient } from '@/lib/gqlClient';
import { UpdateUserDocument } from '@/codegen/gql/graphql';
import { getToken } from '@/lib/cookie';
import { revalidatePath } from 'next/cache';

export const handleUpdateAccount = async (
  formData: FormData,
  user_id: string,
  imageUrl: string,
) => {
  'use server';
  const email = formData.get('email');
  console.log('****************************');
  console.log('email: ', user_id, email!.toString());
  console.log('****************************');

  // POST or PUT data with user_id, class_id, note_id
  const token = getToken();
  gqlClient.setHeader('authorization', `Bearer ${token}`);
  const res = await gqlClient.request(UpdateUserDocument, {
    id: user_id,
    input: {
      email: email?.toString(),
      imageUrl: imageUrl,
    },
  });
  console.log('user is successfully updated: ', res);
  revalidatePath(`/user/${user_id}/setting`);
};
