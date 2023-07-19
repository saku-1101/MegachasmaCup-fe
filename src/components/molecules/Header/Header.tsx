import { StyledHeader } from './Header.style';
import { HeaderLogo } from '../../atoms/HeaderLogo/HeaderLogo';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
export type HeaderProps = {
  user: {
    id: string;
    name: string;
    email: string;
    imageUrl: string | undefined;
  };
};

export const Header = ({ user }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <DropdownMenu user_id={user.id} img_url={user.imageUrl} />
    </StyledHeader>
  );
};
