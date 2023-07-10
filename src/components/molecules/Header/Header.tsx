import { StyledHeader } from './Header.style';
import { HeaderLogo } from '../../atoms/HeaderLogo/HeaderLogo';
import { AccountButton } from '../../atoms/AccountButton/AccountButton';
export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <StyledHeader>
      <HeaderLogo />
      <AccountButton />
    </StyledHeader>
  );
};
