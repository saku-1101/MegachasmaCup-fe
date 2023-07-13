import { StyledHeader } from './Header.style';
import { HeaderLogo } from '../../atoms/HeaderLogo/HeaderLogo';
import { AccountButton } from '../../atoms/AccountButton/AccountButton';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
export type HeaderProps = {
  user: {
    id: string;
    name: string;
    email: string;
    faculty: string;
    year: number;
  };
};

export const Header = ({ user }: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <DropdownMenu user={user} />
    </StyledHeader>
  );
};
