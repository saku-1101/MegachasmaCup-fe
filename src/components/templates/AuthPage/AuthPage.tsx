import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';
import { Div } from './AuthPage.style';

export const AuthPage = () => {
  return (
    <PopUpWindow title='KouGuiitahへようこそ!' subtitle='' isWelcomePage={true} buttonLabel='登録して利用を開始' />
  );
};
