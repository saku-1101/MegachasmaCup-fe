import { useState } from 'react';
import { PlusSvg } from '../../../../public';
import { StyledButton } from './AddButton.style';

export const AddButton = () => {
  const [isHovered, setIsHovered] = useState('#131338');
  const handleAction = () => {
    console.log('clicked');
  };
  return (
    <StyledButton
      onClick={handleAction}
      onMouseEnter={() => setIsHovered('#FAFCFE')}
      onMouseLeave={() => setIsHovered('#131338')}
    >
      {PlusSvg(isHovered)}
      <p style={{ color: `${isHovered}` }}>Add</p>
    </StyledButton>
  );
};
