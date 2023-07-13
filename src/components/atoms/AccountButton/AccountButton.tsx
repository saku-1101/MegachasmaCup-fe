'use client';
import Link from 'next/link';
import { Div } from './AccountButton.style';
import { AccountSvg } from '../../../../public';
import { useState } from 'react';

export type AccountButton = {
  onClick: () => void;
};
export const AccountButton = ({ onClick }: AccountButton) => {
  const [isHovered, setIsHovered] = useState('#131338');
  return (
    <Div>
      <Link
        href='/'
        onMouseEnter={() => setIsHovered('#FAFCFE')}
        onMouseLeave={() => setIsHovered('#131338')}
        onClick={onClick}
      >
        {AccountSvg(isHovered)}
      </Link>
    </Div>
  );
};
