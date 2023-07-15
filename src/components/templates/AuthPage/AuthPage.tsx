import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';

export const AuthPage = () => {
  return (
    <PopUpWindow
      title='KouGuiitaへようこそ!'
      subtitle='まずは，ユーザ情報を登録しましょう！'
      isWelcomePage={true}
      buttonLabel='登録して利用を開始'
    />
  );
};
