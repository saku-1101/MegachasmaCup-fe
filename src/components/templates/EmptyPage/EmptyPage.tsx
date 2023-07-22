'use client';
import { EmptyPageContent } from '@/components/organisms/EmptyPageContent/EmptyPageContent';
import { useEffect, useState } from 'react';
import { PopUpWindow } from '@/components/organisms/PopUpWindow/PopUpWindow';
import { GetAccountSettingsQuery } from '@/codegen/gql/graphql';

type EmptyPageProps = {
  user: GetAccountSettingsQuery;
};
export const EmptyPage = ({ user }: EmptyPageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3 * 1000);
  }, []);
  const schoolExists = user.getUser[0].userSchool.length > 0;
  return (
    <>
      <EmptyPageContent />
      {isVisible && schoolExists ? (
        <PopUpWindow
          title='講義グループにジョイン！'
          subtitle={`講義グループに入り，講義ノートを作成してみよう！\nノートを作成するとみんなのノートが見れたり，コメントできたりするよ！`}
          isFirstNoteErrorPage={false}
          isWelcomePage={false}
          isSchoolRegistration='false'
          buttonLabel='この講義にジョイン！'
          user_id={user.getUser[0].id}
          school_id={user.getUser[0].userSchool[0].id}
        />
      ) : isVisible ? (
        <PopUpWindow
          title='大学を登録しよう！'
          subtitle='同じ大学のみんなと繋がろう！'
          isFirstNoteErrorPage={false}
          isWelcomePage={false}
          isSchoolRegistration='true'
          buttonLabel='大学を登録'
          user_id={user.getUser[0].id}
        />
      ) : (
        ''
      )}
    </>
  );
};
