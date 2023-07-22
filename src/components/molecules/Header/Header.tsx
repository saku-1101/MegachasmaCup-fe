import { StyledHeader } from './Header.style';
import { HeaderLogo } from '../../atoms/HeaderLogo/HeaderLogo';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';
export type HeaderProps = {
  userObj: GetAccountSettingsQuery;
};

export const Header = ({ userObj }: HeaderProps) => {
const user = userObj.getUser[0]
  return (
    <StyledHeader>
      <HeaderLogo />
      <DropdownMenu user_id={user.id} img_url={user.imageUrl} />
    </StyledHeader>
  );
};
