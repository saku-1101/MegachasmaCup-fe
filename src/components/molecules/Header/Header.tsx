'use client';
import { StyledHeader } from './Header.style';
import { HeaderLogo } from '../../atoms/HeaderLogo/HeaderLogo';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
export type HeaderProps = {
  user: {
    id: string;
    name: string;
    email: string;
    img_url: string | undefined;
  };
};

export const Header = ({ user }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <DropdownMenu user_id={user.id} img_url={user.img_url} />
    </StyledHeader>
  );
};
