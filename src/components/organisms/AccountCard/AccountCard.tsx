'use client';
import { AccountSvg } from '../../../../public';
import { StyledCard, StyledGrid } from './AccountCard.style';
import { InputField } from '../../atoms/InputField/InputField';
import { Button } from '../../atoms/Button/Button';
import { downloadImg, uploadImg } from '@/lib/storage';
import { useState } from 'react';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';
import { handleUpdateAccount } from '@/lib/serverActions/handleUpdateAccount';
import Image from 'next/image';
export type AccountCardProps = {
  userObj: GetAccountSettingsQuery;
};

export const AccountCard = ({ userObj }: AccountCardProps) => {
  const user = userObj.getUser[0];
  const [isVisible, setIsVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(user.imageUrl);
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
      const imageUrl = await downloadImg(res);
      setImageUrl(imageUrl);
      return;
    }
  };

  return (
    <StyledCard>
      <form
        id='updateAccountForm'
        action={(formData) => handleUpdateAccount(formData, user.id, imageUrl)}
        className='w-full h-full'
      >
        <div className='w-full flex flex-col justify-center items-center'>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className='w-[6rem] h-[6rem] flex justify-center items-center border rounded-full bg-subtleText hover:bg-slate-300'
          >
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageUrl} alt='avatar picture' className='w-full h-full contain border rounded-full' />
            ) : (
              AccountSvg()
            )}
          </button>
          {loading ? <p>Uploading...</p> : ''}
          {isVisible ? (
            <div className='w-full flex justify-center px-[1rem]'>
              <input type='file' accept='image/*' onChange={onFileInputChange} />
            </div>
          ) : (
            ''
          )}
        </div>
        <StyledGrid>
          <InputField name='name' inputType='text' label='ユーザ名' value={user.name} readonly={true} />
          <InputField name='email' inputType='email' label='メールアドレス' placeholder={user.email} readonly={false} />
          <InputField name='school' inputType='text' label='大学' value={user.userSchool[0].name} readonly={true} />
        </StyledGrid>
        <Button type='submit' formId='updateAccountForm' label='更新する' isSecondaryBg={false} />
      </form>
    </StyledCard>
  );
};
