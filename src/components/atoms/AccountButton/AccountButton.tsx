import Image from 'next/image';
import Link from 'next/link';
import { Div } from './AccountButton.style';
import { AccountSvg } from '../../../../public';

export const AccountButton = () => {
  return (
    <Div>
      <Link href='/'>{AccountSvg()}</Link>
    </Div>
  );
};
