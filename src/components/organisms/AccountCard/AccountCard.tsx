'use client';
import { AccountSvg } from '../../../../public';
import { StyledCard, StyledGrid } from './AccountCard.style';
import { InputField } from '../../atoms/InputField/InputField';
import { Button } from '../../atoms/Button/Button';
import { HTMLInputTypeAttribute, MutableRefObject, useRef } from 'react';
import { downloadImg, uploadImg } from '@/lib/storage';
import { useState } from 'react';
import Image from 'next/image';
export type AccountCardProps = {
  user: {
    id: string;
    name: string;
    email: string;
    school: string;
    faculty: string;
    year: number;
  };
};

export const AccountCard = ({ user }: AccountCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [imgURL, setImgURL] = useState('');
  const [loading, setLoading] = useState(false);
  const onFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    setLoading(true);
    if (!e.target.files) return;
    const file: File = e.target.files[0];
    await fileUpload(file);
    setLoading(false);
  };
  const fileUpload = async (file: File) => {
    const res = await uploadImg(file);
    if (!res) {
      alert('imageのアップロードに失敗しました');
      return;
    } else {
      const imgUrl = await downloadImg(res);
      setImgURL(imgUrl);
      return;
    }
  };

  return (
    <StyledCard>
      <div className='w-full flex flex-col justify-center items-center'>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className='w-[6rem] h-[6rem] flex justify-center items-center border rounded-full bg-subtleText hover:bg-slate-300'
        >
          {imgURL !== '' ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imgURL} alt='avatar picture' className='w-full h-full contain border rounded-full' />
          ) : (
            AccountSvg()
          )}
        </button>
        {loading ? <p>Uploading...</p> : ''}
        {isVisible ? <input type='file' accept='image/*' onChange={onFileInputChange} /> : ''}
      </div>
      <StyledGrid>
        <InputField name='name' inputType='text' label='ユーザ名' value={user.name} readonly={true} />
        <InputField name='email' inputType='email' label='メールアドレス' placeholder={user.email} readonly={false} />
        <InputField name='school' inputType='text' label='大学' value={user.school} readonly={true} />
      </StyledGrid>
      <Button label='更新する' isSecondaryBg={false} />
    </StyledCard>
  );
};
