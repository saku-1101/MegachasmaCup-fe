import { cookies } from 'next/headers';

export const getToken = (): string => {
  const cookieStore = cookies();
  const cookie = cookieStore.get('token')?.value;
  if (!cookie) {
    throw new Error('Token not found');
  } else {
    return cookie;
  }
};
