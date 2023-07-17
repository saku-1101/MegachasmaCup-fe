import { downloadImg, uploadImg } from '@/lib/storage';

const fileUploader = async (file: File) => {
  const res = await uploadImg(file);
  if (!res) {
    alert('imageのアップロードに失敗しました');
    return;
  } else {
    const imgUrl = await downloadImg(res);
    return imgUrl;
  }
};

export default fileUploader;
