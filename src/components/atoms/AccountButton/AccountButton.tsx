'use client';
import { Div } from './AccountButton.style';
import { AccountSvg } from '../../../../public';
import { useState } from 'react';

export type AccountButton = {
  onClick: () => void;
  Mode: boolean;
};
export const AccountButton = ({ Mode, onClick }: AccountButton) => {
  const [isHovered, setIsHovered] = useState('#131338');
  return (
    <Div>
      {Mode ? (
        <button
          onMouseEnter={() => setIsHovered('#FAFCFE')}
          onMouseLeave={() => setIsHovered('#131338')}
          onClick={onClick}
        >
          {AccountSvg(isHovered)}
        </button>
      ) : (
        <button
          onMouseEnter={() => setIsHovered('#FAFCFE')}
          onMouseLeave={() => setIsHovered('#131338')}
          onClick={onClick}
        >
          {AccountSvg(isHovered)}
        </button>
      )}
    </Div>
  );
};
