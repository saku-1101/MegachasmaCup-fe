import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';

export const AuthPage = () => {
  return (
    <PopUpWindow
      title='KouGuiitaへようこそ!'
      subtitle='ユーザ情報を入力してスタート！'
      isFirstNoteErrorPage={false}
      isWelcomePage={true}
      buttonLabel='登録して利用を開始'
    />
  );
};
