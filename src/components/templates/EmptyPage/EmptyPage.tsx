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
  return (
    <>
      <EmptyPageContent />
      {isVisible ? (
        <PopUpWindow
          title='講義グループにジョイン！'
          subtitle={`講義グループに入り，講義ノートを作成してみよう！\nノートを作成するとみんなのノートが見れたり，コメントできたりするよ！`}
          isWelcomePage={false}
          isFirstNoteErrorPage={false}
          buttonLabel='この講義にジョイン！'
          user_id={user.getUser[0].id}
          school_id={user.getUser[0].userSchool[0].id}
        />
      ) : (
        ''
      )}
    </>
  );
};
