import Link from 'next/link';
import { Div } from './HeaderLogo.style';
import { LogoSvg } from '../../../../public';

export const HeaderLogo = () => {
  return (
    <Div>
      <Link href='/'>{LogoSvg()}</Link>
    </Div>
  );
};
