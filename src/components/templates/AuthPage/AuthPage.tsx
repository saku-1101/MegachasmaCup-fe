'use client';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';
import { useState } from 'react';

export const AuthPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userId, setUserId] = useState<string>('');
  function handleShowModal(user_id: string) {
    setIsVisible(true);
    setUserId(user_id);
  }
  if (!isVisible) {
    return (
      <PopUpWindow
        title='KouGuiitaへようこそ!'
        subtitle='ユーザ情報を入力してスタート！'
        isFirstNoteErrorPage={false}
        isWelcomePage={true}
        buttonLabel='登録して利用を開始'
        handleShowModal={handleShowModal}
      />
    );
  } else {
    return (
      <PopUpWindow
        title='大学を登録しよう！'
        subtitle='同じ大学のみんなと繋がろう！'
        isFirstNoteErrorPage={false}
        isWelcomePage={false}
        isSchoolRegistration={true}
        buttonLabel='大学を登録'
        user_id={userId}
      />
    );
  }
};
