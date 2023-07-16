import { v4 as uuidv4 } from 'uuid';

export const uploadImg = async (file: File) => {
  const fileName = uuidv4();
  const res = await fetch(`/api/upload-image?file=${fileName}`);
  console.log('after api launch:', res);

  const { url, fields } = await res.json();
  const body = new FormData();
  Object.entries({ ...fields, file }).forEach(([key, value]) => {
    body.append(key, value as string | Blob);
  });
  const upload = await fetch(url, { method: 'POST', body });

  if (!upload.ok) {
    console.log('upload failed');
    return '';
  }
  return fileName;
};

export const downloadImg = async (fileName: string) => {
  const res = await fetch(`/api/get-image?file=${fileName}`);
  const JSONRes = await res.json();
  return JSONRes.url;
};
