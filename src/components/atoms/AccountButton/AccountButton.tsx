'use client';
import { Div } from './AccountButton.style';
import { AccountSvg } from '../../../../public';
import { useState } from 'react';

export type AccountButton = {
  img_url: string | undefined;
  onClick: () => void;
};
export const AccountButton = ({ img_url, onClick }: AccountButton) => {
  const [isHovered, setIsHovered] = useState('#131338');
  return (
    <button
      onMouseEnter={() => setIsHovered('#FAFCFE')}
      onMouseLeave={() => setIsHovered('#131338')}
      onClick={onClick}
      className='w-[4rem] h-[4rem] flex justify-center items-center'
    >
      {img_url !== undefined ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img_url} alt='avatar picture' className='w-full h-full contain border rounded-full' />
      ) : (
        AccountSvg(isHovered)
      )}
    </button>
  );
};
